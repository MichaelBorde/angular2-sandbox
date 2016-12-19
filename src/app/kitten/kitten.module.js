import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/index';
import {KittenComponent} from './kitten.component';
import {ListComponent} from './list/list.component';
import {CreationPopupComponent} from './creation/creation-popup.component';
import {NameFormComponent} from './creation/name-form.component';
import {TypeFormComponent} from './creation/type-form.component';
import {ColorFormComponent} from './creation/color-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    KittenComponent,
    ListComponent,
    CreationPopupComponent,
    NameFormComponent,
    TypeFormComponent,
    ColorFormComponent
  ]
})
export class KittenModule {
}
