import {Component, EventEmitter, Input, Output} from '@angular/core';
import _ from 'lodash';
import moment from 'moment';

const minTime = dateFromTime(8, 0);
const maxTime = dateFromTime(20, 0);

@Component({
  selector: 'sb-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  @Output() slotSelected = new EventEmitter();
  @Output() slotMouseOver = new EventEmitter();

  constructor() {
    this._minTimeMoment = moment.utc(minTime);
    this._maxTimeMoment = moment.utc(maxTime);
    this._startOfWeekMoment = moment.utc().startOf('week');
    this._stepInMinutes = 15;
    this._events = [];
  }

  ngOnInit() {
    let self = this;
    this.dates = createDates();
    this._draw();

    function createDates() {
      return _.map(_.range(7), day => dayToDate(day));

      function dayToDate(day) {
        return {
          value: self._startOfWeekMoment.clone().add(day, 'day').toDate()
        }
      }
    }
  }

  @Input() set stepInMinutes(value) {
    if (this._stepInMinutes !== value) {
      this._stepInMinutes = value;
      this._draw();
    }
  }

  @Input() set events(value) {
    this._events = value || [];
    this._draw();
  }

  _draw() {
    let self = this;
    this.rows = createRows();

    function createRows() {
      let dayDuration = moment.duration(self._maxTimeMoment.diff(self._minTimeMoment));
      let dayDurationInMinutes = dayDuration.asMinutes();
      let slotsPerDay = dayDurationInMinutes / self._stepInMinutes;
      let rows = [];
      for (let rowIndex = 0; rowIndex < slotsPerDay; rowIndex++) {
        let rowMoment = getRowMoment();
        let roundHour = isRoundHour();
        rows.push({
          cssClass: cssClassForRow(),
          columns: []
        });
        maybeAddTimeIndicationRow();
        for (let colIndex = 0; colIndex < 7; colIndex++) {
          rows[rowIndex].columns.push(createSlot(rowIndex, colIndex));
        }

        function getRowMoment() {
          return self._minTimeMoment.clone().add(rowIndex * self._stepInMinutes, 'minute')
        }

        function isRoundHour() {
          return rowMoment.minutes() === 0;
        }

        function cssClassForRow() {
          return roundHour ? 'first-tr-for-hour' : '';
        }

        function maybeAddTimeIndicationRow() {
          if (roundHour) {
            rows[rowIndex].columns.push(createTimeIndication(rowMoment.toDate()));
          }
        }
      }
      applyEvents();
      return rows;

      function createTimeIndication(value) {
        return {
          type: 'timeIndication',
          value,
          cssClass: 'td-time-indication',
          rowSpan: 60 / self._stepInMinutes,
          colSpan: 1,
          onClick: () => undefined,
          onMouseOver: () => undefined
        };
      }

      function createSlot(rowIndex, colIndex) {
        let currentMoment = self._startOfWeekMoment.clone()
          .add(colIndex, 'day')
          .add(self._minTimeMoment.minutes(), 'minute')
          .add(self._minTimeMoment.hours(), 'hour')
          .add(rowIndex * self._stepInMinutes, 'minute');
        return {
          type: 'slot',
          value: currentMoment.toDate(),
          cssClass: 'td-slot',
          rowSpan: 1,
          colSpan: 1,
          onClick: cell => self.slotSelected.emit(cell),
          onMouseOver: cell => self.slotMouseOver.emit(cell)
        };
      }

      function applyEvents() {
        for (let event of self._events) {
          let beginningMoment = moment.utc(event.beginningDate);
          let endingMoment = moment.utc(event.endingDate);
          let rowIndex = 2;
          let colIndex = beginningMoment.day() + 1;
          let duration = moment.duration(moment.utc(event.endingDate).diff(moment.utc(event.beginningDate)));
          let durationInMinutes = duration.asMinutes();
          let slots = durationInMinutes / self._stepInMinutes;

          rows[rowIndex].columns[colIndex] = {
            type: 'event',
            value: event,
            cssClass: 'td-event',
            rowSpan: slots,
            colspan: 1,
            cssStyle: {'background-color': event.color},
            onClick: () => undefined,
            onMouseOver: () => undefined
          };
        }
      }
    }
  }
}

function dateFromTime(hours, minutes) {
  return moment.utc(`1970-01-01 ${hours}:${minutes}`, 'YYYY-MM-DD HH:mm').toDate();
}
