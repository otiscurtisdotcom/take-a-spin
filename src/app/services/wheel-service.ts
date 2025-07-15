import { effect, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

const TOTAL = 6;
const FIXED = 3;

@Injectable({
  providedIn: 'root'
})
export class WheelService {
  readonly result = signal<number | null>(null);

  constructor(private router: Router) { }

  spinRandom() {
    const random = Math.floor(Math.random() * TOTAL);
    this.result.set(random);
  }

  spinFixed() {
    this.result.set(FIXED);
  }

  clear() {
    this.result.set(null);
  }
}
