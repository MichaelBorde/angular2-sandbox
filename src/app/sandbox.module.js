import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {HomeModule} from './home/index';
import {SandboxComponent} from './sandbox.component';
import {sandboxRoutes} from './sandbox.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(sandboxRoutes),
    HomeModule
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
