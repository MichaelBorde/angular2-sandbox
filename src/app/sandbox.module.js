import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {SharedModule} from './shared/index';
import {LayoutModule} from './layout/index';
import {HomeModule} from './home/index';
import {EncapsulationModule} from './encapsulation/index';
import {KittenModule} from './kitten/index';
import {WidgetModule} from './widget/index';
import {SandboxComponent} from './sandbox.component';
import {sandboxRoutes} from './sandbox.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(sandboxRoutes),
    SharedModule.forRoot(),
    LayoutModule,
    HomeModule,
    EncapsulationModule,
    KittenModule,
    WidgetModule
  ],
  declarations: [SandboxComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [SandboxComponent]
})
export class SandboxModule {
}
