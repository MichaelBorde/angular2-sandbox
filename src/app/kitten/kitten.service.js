import {Injectable} from '@angular/core';

@Injectable()
export class KittenService {

  constructor() {
    this._kittens = [];
    this.add({name: 'Garfield', type: 'European shorthair', color: 'Ginger'});
    this.add({name: 'Azraël', type: 'European shorthair', color: 'Ginger'});
  }

  all() {
    return Promise.resolve(this._kittens);
  }

  add(kitten) {
    let newKitten = Object.assign({}, kitten, {id: this._kittens.length});
    this._kittens.push(newKitten);
    return Promise.resolve();
  }
}
