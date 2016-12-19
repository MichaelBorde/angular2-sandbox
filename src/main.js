import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {SandboxModule} from './app/sandbox.module';

if (productionMode) { // eslint-disable-line no-undef
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SandboxModule);
