import {KittenComponent} from './kitten.component';
import {ListComponent} from './list/list.component';
import {CreationPopupComponent} from './creation/creation-popup.component';
import {NameStepComponent} from './creation/steps/name-step.component';
import {TypeStepComponent} from './creation/steps/type-step.component';
import {ColorStepComponent} from './creation/steps/color-step.component';

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
          component: NameStepComponent,
        }, {
          path: 'type',
          component: TypeStepComponent,
        }, {
          path: 'color',
          component: ColorStepComponent,
        }, {
          path: '',
          redirectTo: 'name',
          pathMatch: 'full'
        }]
      }]
    }]
  }
];
