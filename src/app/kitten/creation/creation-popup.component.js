import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CreationService} from './creation.service';

@Component({
  selector: 'sb-creation-popup',
  templateUrl: './creation-popup.component.html'
})
export class CreationPopupComponent {

  constructor(route: ActivatedRoute, router: Router, creationService: CreationService) {
    this._creationService = creationService;
    this.kitten = {};
    let self = this;

    this._subscriptions = [
      creationService.nameDefined$.subscribe((...args) => nameDefined(...args)),
      creationService.typeDefined$.subscribe((...args) => typeDefined(...args)),
      creationService.colorDefined$.subscribe((...args) => colorDefined(...args))
    ];

    function nameDefined(kittenPart) {
      Object.assign(self.kitten, kittenPart);
      router.navigate(['./type'], {relativeTo: route});
    }

    function typeDefined(kittenPart) {
      Object.assign(self.kitten, kittenPart);
      router.navigate(['./color'], {relativeTo: route});
    }

    function colorDefined(kittenPart) {
      Object.assign(self.kitten, kittenPart);
      self._creationService.completeCreation(self.kitten);
    }

    router.navigate(['./name'], {relativeTo: route});
  }

  onBeforeHide() {
    this._creationService.cancelCreation();
  }

  ngOnDestroy() {
    for (let subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }
}
