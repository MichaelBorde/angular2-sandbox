import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/index';
import {KittenComponent} from './kitten.component';
import {ListComponent} from './list/list.component';
import {CreationPopupComponent} from './creation/creation-popup.component';
import {NameStepComponent} from './creation/steps/name-step.component';
import {TypeStepComponent} from './creation/steps/type-step.component';
import {ColorStepComponent} from './creation/steps/color-step.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    KittenComponent,
    ListComponent,
    CreationPopupComponent,
    NameStepComponent,
    TypeStepComponent,
    ColorStepComponent
  ]
})
export class KittenModule {
}
