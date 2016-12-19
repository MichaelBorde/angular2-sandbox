import {Injectable} from '@angular/core';

const kittens = [];

@Injectable()
export class KittenService {

  constructor() {
    this.add({name: 'Garfield', type: 'European shorthair', color: 'Ginger'});
    this.add({name: 'Azraël', type: 'European shorthair', color: 'Ginger'});
  }

  all() {
    return Promise.resolve(kittens);
  }

  add(kitten) {
    let newKitten = Object.assign({}, kitten, {id: kittens.length});
    kittens.push(newKitten);
    return Promise.resolve();
  }
}
