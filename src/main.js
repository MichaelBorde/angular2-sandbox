import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {AppModule} from './app/app.module';

if (productionMode) { // eslint-disable-line no-undef
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
