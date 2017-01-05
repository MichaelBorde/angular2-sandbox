import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/index';
import {EncapsulationComponent} from './encapsulation.component';
import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';

@NgModule({
  imports: [SharedModule],
  declarations: [EncapsulationComponent, ParentComponent, ChildComponent]
})
export class EncapsulationModule {
}
