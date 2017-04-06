import {Component} from '@angular/core';

import './style/app.scss';

@Component({
  selector: 'sb-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    console.log('App started'); // eslint-disable-line no-console
  }
}
