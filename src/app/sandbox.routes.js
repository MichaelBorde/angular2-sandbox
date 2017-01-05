import {homeRoutes} from './home/index';
import {encapsulationRoutes} from './encapsulation/index';
import {kittenRoutes} from './kitten/index';
import {widgetRoutes} from './widget/index';

// pas d'accent dans les urls :)
export const sandboxRoutes = [
  ...homeRoutes,
  ...encapsulationRoutes,
  ...kittenRoutes,
  ...widgetRoutes,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
