import { Component, computed } from '@angular/core';
import { Router } from '@angular/router';
import { WheelService } from '../services/wheel-service';
import { SEGMENTS_DATA } from '../constants/segments';

@Component({
  selector: 'spinner-app-results-page',
  templateUrl: './results-page.html',
  styleUrl: './results-page.scss'
})
export class ResultsPage {
  readonly result = computed(() => {
    const resultIndex = this.wheelService.result();
    return resultIndex ? SEGMENTS_DATA[resultIndex] : null;
  })

  constructor(
    private wheelService: WheelService,
    private readonly router: Router
  ) { }

  startAgain() {
    this.wheelService.clear();
    this.router.navigate(['/']);
  }
}
