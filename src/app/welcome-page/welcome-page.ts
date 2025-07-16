import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApplicationRoutes } from '../constants/routes';

@Component({
  selector: 'spinner-app-welcome-page',
  imports: [RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss'
})
export class WelcomePage {
  readonly wheelPageRoute = `/${ApplicationRoutes.WHEEL}`;
}
