import { Routes } from '@angular/router';
import { resultsGuard } from './guards/results-guard';
import { ApplicationRoutes } from './constants/routes';

// Lazy load page components to reduce bundle size
export const routes: Routes = [
  {
    path: ApplicationRoutes.WELCOME,
    loadComponent: () =>
      import('./welcome-page/welcome-page').then((m) => m.WelcomePage),
    data: { animation: 'WelcomePage' },
  },
  {
    path: ApplicationRoutes.WHEEL,
    loadComponent: () =>
      import('./wheel-page/wheel-page').then((m) => m.WheelPage),
    data: { animation: 'WheelPage' },
  },
  {
    path: ApplicationRoutes.RESULTS,
    loadComponent: () =>
      import('./results-page/results-page').then((m) => m.ResultsPage),
    data: { animation: 'ResultsPage' },
    canActivate: [resultsGuard],
  },
];
