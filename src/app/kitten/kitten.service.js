import {Injectable} from '@angular/core';

const kittens = [
  {name: 'Garfield', type: 'European shorthair', color: 'Ginger'},
  {name: 'Azraël', type: 'European shorthair', color: 'Ginger'}
];

@Injectable()
export class KittenService {

  all() {
    return Promise.resolve(kittens);
  }

  add(kitten) {
    let newKitten = Object.assign({}, kitten, {id: kittens.length});
    kittens.push(newKitten);
    return Promise.resolve();
  }
}
