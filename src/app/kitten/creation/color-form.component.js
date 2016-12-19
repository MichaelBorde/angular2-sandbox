import {Component, EventEmitter, Output} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import {CreationService} from './creation.service';

@Component({
  selector: 'sb-color-form',
  templateUrl: './color-form.component.html'
})
export class ColorFormComponent {

  @Output() formSubmit = new EventEmitter();

  constructor(formBuilder: FormBuilder, creationService: CreationService) {
    this._creationService = creationService;
    this.form = formBuilder.group({
      color: ['', Validators.required]
    });
  }

  onFormSubmit() {
    this._creationService.defineColor(this.form.value);
  }
}
