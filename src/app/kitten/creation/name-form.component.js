import {Component, EventEmitter, Output} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import {CreationService} from './creation.service';

@Component({
  selector: 'sb-name-form',
  templateUrl: './name-form.component.html'
})
export class NameFormComponent {

  @Output() formSubmit = new EventEmitter();

  constructor(formBuilder: FormBuilder, creationService: CreationService) {
    this._creationService = creationService;
    this.form = formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onFormSubmit() {
    this._creationService.defineName(this.form.value);
  }
}
