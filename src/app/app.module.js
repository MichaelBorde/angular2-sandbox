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
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule.forRoot(),
    LayoutModule,
    HomeModule,
    EncapsulationModule,
    KittenModule,
    WidgetModule
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
