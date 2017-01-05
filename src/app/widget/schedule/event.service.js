import moment from 'moment';
import {Injectable} from '@angular/core';

const todayMoment = moment.utc();
const tomorrowMoment = moment.utc().add(1, 'day');
const yesterdayMoment = moment.utc().subtract(1, 'day');

const events = [
  {
    id: '1',
    title: 'Event 1',
    beginningDate: withTime(todayMoment, 11, 0),
    endingDate: withTime(todayMoment, 11, 15),
    color: 'red'
  }, {
    id: '2',
    title: 'Event 2',
    beginningDate: withTime(todayMoment, 11, 15),
    endingDate: withTime(todayMoment, 12, 15),
    color: 'blue'
  }, {
    id: '3',
    title: 'Event 3',
    beginningDate: withTime(todayMoment, 15, 15),
    endingDate: withTime(todayMoment, 15, 30),
    color: 'green'
  }, {
    id: '4',
    title: 'Event 4',
    beginningDate: withTime(tomorrowMoment, 10, 0),
    endingDate: withTime(tomorrowMoment, 10, 30),
    color: 'yellow'
  }, {
    id: '5',
    title: 'Event 5',
    beginningDate: withTime(yesterdayMoment, 16, 15),
    endingDate: withTime(yesterdayMoment, 16, 30),
    color: 'violet'
  }
];

function withTime(moment, hour, minute) {
  return moment.clone()
    .set('hour', hour)
    .set('minute', minute)
    .set('second', 0);
}

@Injectable()
export class EventService {

  all() {
    return Promise.resolve(events);
  }
}
