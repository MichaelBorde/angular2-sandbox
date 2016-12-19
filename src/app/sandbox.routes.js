import {homeRoutes} from './home/index';
import {kittenRoutes} from './kitten/index';

// pas d'accent dans les urls :)
export const sandboxRoutes = [
  ...homeRoutes,
  ...kittenRoutes,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
