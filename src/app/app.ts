import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { routeAnimations } from './animations/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  animations: [routeAnimations],
})
export class App {
  getRouteAnimation(outlet: RouterOutlet | null): string | null {
    return outlet?.activatedRouteData?.['animation'] ?? null;
  }
}
