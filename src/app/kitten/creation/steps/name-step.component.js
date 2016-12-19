import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import {CreationService} from '../creation.service';

@Component({
  selector: 'sb-name-step',
  templateUrl: './name-step.component.html'
})
export class NameStepComponent {

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
