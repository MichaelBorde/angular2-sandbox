import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import {CreationService} from './creation.service';

@Component({
  selector: 'sb-type-form',
  templateUrl: './type-form.component.html'
})
export class TypeFormComponent {

  constructor(formBuilder: FormBuilder, creationService: CreationService) {
    this._creationService = creationService;
    this.form = formBuilder.group({
      type: ['', Validators.required]
    });
  }

  onFormSubmit() {
    this._creationService.defineType(this.form.value);
  }
}
