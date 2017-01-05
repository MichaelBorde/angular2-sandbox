import {Component} from '@angular/core';

import {EventService} from './event.service';

@Component({
  selector: 'sb-schedule-example',
  templateUrl: './schedule-example.component.html',
  providers: [EventService]
})
export class ScheduleExampleComponent {

  constructor(eventService: EventService) {
    this._eventService = eventService;
  }

  ngOnInit() {
    this.stepInMinutes = 15;
    this._eventService.all().then(events => {
      this.events = events;
    });
  }

  onSettingsChanged(settings) {
    this.stepInMinutes = settings.stepInMinutes;
  }

  onSlotSelected(slot) {
    this.lastSlotSelected = slot;
  }

  onSlotMouseOver(slot) {
    this.lastSlotMouseOver = slot;
  }
}
