import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/index';
import {ModalComponent} from './modal/modal.component';
import {ModalExampleComponent} from './modal/modal-example.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ScheduleExampleComponent} from './schedule/schedule-example.component';
import {ScheduleSettingsComponent} from './schedule/schedule-settings.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ModalComponent,
    ModalExampleComponent,
    ScheduleComponent,
    ScheduleExampleComponent,
    ScheduleSettingsComponent
  ]
})
export class WidgetModule {
}
