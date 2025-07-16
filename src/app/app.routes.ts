import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';
import { WheelPage } from './wheel-page/wheel-page';
import { ResultsPage } from './results-page/results-page';
import { resultsGuard } from './guards/results-guard';
import { ApplicationRoutes } from './constants/routes';

export const routes: Routes = [
  {
    path: ApplicationRoutes.WELCOME,
    component: WelcomePage,
    data: { animation: 'WelcomePage' }
  },
  {
    path: ApplicationRoutes.WHEEL,
    component: WheelPage,
    data: { animation: 'WheelPage' }
  },
  {
    path: ApplicationRoutes.RESULTS,
    canActivate: [resultsGuard],
    component: ResultsPage,
    data: { animation: 'ResultsPage' }
  }
];
