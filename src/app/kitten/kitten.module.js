import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/index';
import {KittenComponent} from './kitten.component';
import {ListComponent} from './list/list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [KittenComponent, ListComponent]
})
export class KittenModule {
}
