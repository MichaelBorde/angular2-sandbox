import {Component} from '@angular/core';

import './style/sandbox.scss';

@Component({
  selector: 'sb-sandbox',
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent {

  constructor() {
    console.debug('==> Application démarrée <==');
  }
}
