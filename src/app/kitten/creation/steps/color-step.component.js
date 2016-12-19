import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import {CreationService} from '../creation.service';

@Component({
  selector: 'sb-color-step',
  templateUrl: './color-step.component.html'
})
export class ColorStepComponent {

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
