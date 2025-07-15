import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';
import { WheelPage } from './wheel-page/wheel-page';
import { ResultsPage } from './results-page/results-page';
import { resultsGuard } from './guards/results-guard';

export const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
    data: { animation: 'WelcomePage' }
  },
  {
    path: 'play',
    component: WheelPage,
    data: { animation: 'WheelPage' }
  },
  {
    path: 'results',
    canActivate: [resultsGuard],
    component: ResultsPage,
    data: { animation: 'ResultsPage' }
  }
];
