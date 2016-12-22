import {homeRoutes} from './home/index';
import {kittenRoutes} from './kitten/index';
import {widgetRoutes} from './widget/index';

// pas d'accent dans les urls :)
export const sandboxRoutes = [
  ...homeRoutes,
  ...kittenRoutes,
  ...widgetRoutes,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
