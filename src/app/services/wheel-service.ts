import { inject, Injectable, signal } from '@angular/core';
import {
  FIXED_SPIN_INDEX,
  INITIAL_SPINS,
  POST_SPIN_DELAY_MS,
} from '../constants/spins';
import { SEGMENTS_CIRCUMFERENCE, SEGMENTS_DATA } from '../constants/segments';
import { Router } from '@angular/router';
import { ApplicationRoutes } from '../constants/routes';

@Injectable({
  providedIn: 'root',
})
export class WheelService {
  private readonly router = inject(Router);

  readonly result = signal<number | null>(null);

  spinRandom(): void {
    // Get a random value, based on the number of segments in the array.
    const random = Math.floor(Math.random() * SEGMENTS_DATA.length);
    this.result.set(random);
  }

  spinFixed(): void {
    this.result.set(FIXED_SPIN_INDEX);
  }

  calculateRotation(resultIndex: number): number {
    // Rotate N full spins, then subtract segment offset to land on the correct result
    return INITIAL_SPINS * 360 - SEGMENTS_CIRCUMFERENCE * resultIndex;
  }

  navigateToStart(): void {
    this.result.set(null);
    this.router.navigate(['/']);
  }

  navigateToResult(): void {
    setTimeout(() => {
      this.router.navigate([`/${ApplicationRoutes.RESULTS}`]);
    }, POST_SPIN_DELAY_MS);
  }
}
