import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/index';
import {HeaderComponent} from './header.component';
import {MenuComponent} from './menu.component';

@NgModule({
  imports: [SharedModule],
  declarations: [HeaderComponent, MenuComponent],
  exports: [HeaderComponent, MenuComponent]
})
export class LayoutModule {
}
