import { Injectable, signal } from '@angular/core';
import { FIXED_SPIN_INDEX, INITIAL_SPINS, POST_SPIN_DELAY_MS } from '../constants/spins';
import { SEGMENTS_CIRCUMFERENCE, SEGMENTS_DATA } from '../constants/segments';
import { Router } from '@angular/router';
import { ApplicationRoutes } from '../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class WheelService {
  readonly result = signal<number | null>(null);

  constructor(private readonly router: Router,
  ) { }

  spinRandom() {
    const random = Math.floor(Math.random() * SEGMENTS_DATA.length);
    this.result.set(random);
  }

  spinFixed() {
    this.result.set(FIXED_SPIN_INDEX);
  }

  clear() {
    this.result.set(null);
  }

  calculateRotation(resultIndex: number): number {
    return (INITIAL_SPINS * 360) - (SEGMENTS_CIRCUMFERENCE * resultIndex);
  }

  navigateToResult() {
    setTimeout(() => {
      this.router.navigate([`/${ApplicationRoutes.RESULTS}`]);
    }, POST_SPIN_DELAY_MS);
  }
}
