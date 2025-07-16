import { Component } from '@angular/core';
import { ApplicationRoutes } from '../constants/routes';
import { Link } from "../shared/link/link";

@Component({
  selector: 'spinner-app-welcome-page',
  imports: [Link],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss'
})
export class WelcomePage {
  readonly wheelPageRoute = `/${ApplicationRoutes.WHEEL}`;
}
