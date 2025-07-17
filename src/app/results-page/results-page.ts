import { Component, computed, inject } from '@angular/core';
import { WheelService } from '../services/wheel-service';
import { SEGMENTS_DATA } from '../constants/segments';
import { Button } from '../shared/button/button';

@Component({
  selector: 'spinner-app-results-page',
  templateUrl: './results-page.html',
  styleUrl: './results-page.scss',
  imports: [Button],
})
export class ResultsPage {
  private readonly wheelService = inject(WheelService);

  readonly result = computed(() => {
    const resultIndex = this.wheelService.result();
    return resultIndex !== null ? SEGMENTS_DATA[resultIndex] : null;
  });

  startAgain(): void {
    this.wheelService.navigateToStart();
  }
}
