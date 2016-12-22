import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/index';
import {ModalComponent} from './modal.component';
import {ModalExampleComponent} from './modal-example.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ModalComponent, ModalExampleComponent]
})
export class WidgetModule {
}
