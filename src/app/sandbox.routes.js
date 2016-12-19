import {homeRoutes} from './home/index';

// pas d'accent dans les urls :)
export const sandboxRoutes = [
  ...homeRoutes,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
