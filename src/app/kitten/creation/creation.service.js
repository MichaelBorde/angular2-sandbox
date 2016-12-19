import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class CreationService {

  constructor() {
    this._creationCancelledSource = new Subject();
    this.creationCancelled$ = this._creationCancelledSource.asObservable();

    this._nameDefinedSource = new Subject();
    this.nameDefined$ = this._nameDefinedSource.asObservable();

    this._typeDefinedSource = new Subject();
    this.typeDefined$ = this._typeDefinedSource.asObservable();

    this._colorDefinedSource = new Subject();
    this.colorDefined$ = this._colorDefinedSource.asObservable();

    this._creationCompleteSource = new Subject();
    this.creationComplete$ = this._creationCompleteSource.asObservable();
  }

  defineName(kittenPart) {
    this._nameDefinedSource.next(kittenPart);
  }

  defineType(kittenPart) {
    this._typeDefinedSource.next(kittenPart);
  }

  defineColor(kittenPart) {
    this._colorDefinedSource.next(kittenPart);
  }

  cancelCreation(...args) {
    this._creationCancelledSource.next(...args);
  }

  completeCreation(...args) {
    this._creationCompleteSource.next(...args);
  }
}
