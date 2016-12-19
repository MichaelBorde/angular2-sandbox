import {Component} from '@angular/core';

import {KittenService} from '../kitten.service';

@Component({
  selector: 'sb-list',
  templateUrl: './list.component.html',
  providers: [KittenService]
})
export class ListComponent {

  constructor(kittenService: KittenService) {
    this._kittenService = kittenService;
  }

  ngOnInit() {
    this._kittenService.all().then(kittens => {
      this.kittens = kittens;
    });
  }
}
