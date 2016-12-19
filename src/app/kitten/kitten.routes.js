import {KittenComponent} from './kitten.component';
import {ListComponent} from './list/list.component';
import {CreationPopupComponent} from './creation/creation-popup.component';
import {NameFormComponent} from './creation/name-form.component';
import {TypeFormComponent} from './creation/type-form.component';
import {ColorFormComponent} from './creation/color-form.component';

export const kittenRoutes = [
  {
    path: 'kittens',
    component: KittenComponent,
    children: [{
      path: '',
      component: ListComponent,
      children: [{
        path: 'creation',
        component: CreationPopupComponent,
        children: [{
          path: 'name',
          component: NameFormComponent,
        }, {
          path: 'type',
          component: TypeFormComponent,
        }, {
          path: 'color',
          component: ColorFormComponent,
        }, {
          path: '',
          redirectTo: 'name',
          pathMatch: 'full'
        }]
      }]
    }]
  }
];
