import {KittenComponent} from './kitten.component';
import {ListComponent} from './list/list.component';

export const kittenRoutes = [
  {
    path: 'kittens',
    component: KittenComponent,
    children: [{
      path: '',
      component: ListComponent
    }]
  }
];
