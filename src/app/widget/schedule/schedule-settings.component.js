import {Component, EventEmitter, Output} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

const steps = [{
  value: 5,
  label: '5 minutes'
}, {
  value: 10,
  label: '10 minutes'
}, {
  value: 15,
  label: '15 minutes'
}, {
  value: 30,
  label: '30 minutes'
}, {
  value: 60,
  label: '1 hour'
}];

@Component({
  selector: 'sb-schedule-settings',
  templateUrl: './schedule-settings.component.html'
})
export class ScheduleSettingsComponent {

  @Output() submitted = new EventEmitter();

  constructor(formBuilder: FormBuilder) {
    this.steps = steps;
    this.form = formBuilder.group({
      stepInMinutes: [15, Validators.required]
    });
  }

  onSubmitted() {
    this.submitted.emit(this.form.value);
  }
}
