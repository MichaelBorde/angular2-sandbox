import {Component} from '@angular/core';

import './style/sandbox.scss';

@Component({
  selector: 'sb-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent {

  constructor() {
    console.debug('==> Application started <==');
  }
}
