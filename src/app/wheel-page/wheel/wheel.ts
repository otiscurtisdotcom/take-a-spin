import { Component, computed, effect, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { WheelService } from '../../services/wheel-service';
import { animate, style, transition, trigger } from '@angular/animations';
import { SegmentData, SEGMENTS_DATA } from '../../constants/segments';

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
      transition('* => *', [
        animate('5s cubic-bezier(.21,.91,.73,1.03)', style({ transform: '{{ transform }}' }))
      ], { params: { transform: 'rotate(0deg)' } })
    ])
  ]
})
export class Wheel {
  readonly wheelNumber = this.wheelService.result;

  readonly segments: Signal<Segment[]> = computed(() => {
    return SEGMENTS_DATA.map((segment, i) => {
      const angle = i * 360 / SEGMENTS_DATA.length;
      return {
        ...segment,
        rotation: `rotate(${angle}, 100, 100)`,
      };
    });
  });

  private rotation = signal(0);
  readonly spinTrigger = signal(false);
  readonly hasSpun = signal(false);

  constructor(
    private router: Router,
    private readonly wheelService: WheelService
  ) {
    effect(() => {
      const newNumber = this.wheelNumber();
      if (newNumber !== null) {
        const degrees = (5 * 360) - (60 * newNumber);
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
    }, 400);
  }

  getRotationStyle(): string {
    return `rotate(${this.rotation()}deg)`;
  }

  finalTransform(): string {
    return this.hasSpun() ? this.getRotationStyle() : '';
  }
}
