import { Component, computed, effect, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { WheelService } from '../../services/wheel-service';
import { animate, style, transition, trigger } from '@angular/animations';
import { SegmentData, SEGMENTS_CIRCUMFERENCE, SEGMENTS_DATA } from '../../constants/segments';
import { INITIAL_SPINS, POST_SPIN_DELAY_MS } from '../../constants/spins';

interface Segment extends SegmentData {
  rotation: string;
}

@Component({
  selector: 'spinner-app-wheel',
  imports: [],
  templateUrl: './wheel.html',
  styleUrl: './wheel.scss',
  animations: [
    trigger('spin', [
      transition('false => true', [
        animate('5s cubic-bezier(.21,.91,.73,1.03)', style({ transform: '{{ transform }}' }))
      ], { params: { transform: 'rotate(0deg)' } })
    ])
  ]
})
export class Wheel {
  private readonly rotation = signal(0);
  private readonly hasSpun = signal(false);
  private readonly wheelNumber = this.wheelService.result;
  readonly spinTrigger = signal(false);
  readonly rotationStyle = computed(() => `rotate(${this.rotation()}deg)`);
  readonly finalTransform = computed(() => this.hasSpun() ? this.rotationStyle() : '');

  readonly segments: Signal<Segment[]> = computed(() => {
    return SEGMENTS_DATA.map((segment, i) => {
      const angle = i * SEGMENTS_CIRCUMFERENCE;
      return {
        ...segment,
        rotation: `rotate(${angle}, 100, 100)`,
      };
    });
  });

  constructor(
    private router: Router,
    private readonly wheelService: WheelService
  ) {
    effect(() => {
      const newNumber = this.wheelNumber();
      if (newNumber !== null) {
        const degrees = (INITIAL_SPINS * 360) - (SEGMENTS_CIRCUMFERENCE * newNumber);
        this.rotation.set(degrees);
        this.spinTrigger.set(true);
      }
    });
  }

  onAnimationDone() {
    if (!this.spinTrigger()) return;
    this.hasSpun.set(true);

    setTimeout(() => {
      this.router.navigate(['/results']);
    }, POST_SPIN_DELAY_MS);
  }
}
