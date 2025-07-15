import { Injectable, signal } from '@angular/core';
import { FIXED_SPIN_INDEX } from '../constants/spins';
import { SEGMENTS_DATA } from '../constants/segments';

@Injectable({
  providedIn: 'root'
})
export class WheelService {
  readonly result = signal<number | null>(null);

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
}
