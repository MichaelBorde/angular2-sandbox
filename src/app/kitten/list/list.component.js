import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {KittenService} from '../kitten.service';
import {CreationService} from '../creation/creation.service';

@Component({
  selector: 'sb-list',
  templateUrl: './list.component.html',
  providers: [KittenService, CreationService]
})
export class ListComponent {

  constructor(route: ActivatedRoute, router: Router, kittenService: KittenService, creationService: CreationService) {
    this._kittenService = kittenService;
    let self = this;

    creationService.creationCancelled$.subscribe((...args) => creationCancelled(...args))
    creationService.creationComplete$.subscribe((...args) => creationComplete(...args))

    function creationCancelled() {
      router.navigate(['./'], {relativeTo: route});
    }

    function creationComplete(kitten) {
      self._kittenService.add(kitten)
        .then(() => self._loadKittens())
        .then(() => router.navigate(['./'], {relativeTo: route}));
    }
  }

  ngOnInit() {
    this._loadKittens();
  }

  _loadKittens() {
    this._kittenService.all().then(kittens => {
      this.kittens = kittens;
    });
  }
}
