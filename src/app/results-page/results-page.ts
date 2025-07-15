import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WheelService } from '../services/wheel-service';

@Component({
  selector: 'spinner-app-results-page',
  templateUrl: './results-page.html',
  styleUrl: './results-page.scss'
})
export class ResultsPage {
  readonly result = this.wheelService.result;

  constructor(
    private wheelService: WheelService,
    private readonly router: Router
  ) { }

  startAgain() {
    this.wheelService.clear();
    this.router.navigate(['/']);
  }
}
