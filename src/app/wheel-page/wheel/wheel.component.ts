import {
  Component,
  computed,
  effect,
  inject,
  signal,
  Signal,
} from '@angular/core';
import { WheelService } from '../../services/wheel-service';
import {
  SegmentData,
  SEGMENTS_CIRCUMFERENCE,
  SEGMENTS_DATA,
} from '../../constants/segments';
import { spinAnimation } from '../../animations/spinAnimation';

interface Segment extends SegmentData {
  rotation: string;
}

@Component({
  selector: 'spinner-app-wheel',
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.scss',
  animations: [spinAnimation],
})
export class WheelComponent {
  private readonly wheelService = inject(WheelService);

  private readonly rotation = signal(0);
  private readonly hasSpun = signal(false);
  private readonly wheelNumber = this.wheelService.result;
  readonly spinTrigger = signal(false);
  readonly rotationStyle = computed(() => `rotate(${this.rotation()}deg)`);
  readonly finalTransform = computed(() =>
    this.hasSpun() ? this.rotationStyle() : '',
  );

  readonly segments: Signal<Segment[]> = computed(() => {
    return SEGMENTS_DATA.map((segment, i) => {
      const angle = i * SEGMENTS_CIRCUMFERENCE;
      return {
        ...segment,
        rotation: `rotate(${angle}, 100, 100)`,
      };
    });
  });

  constructor() {
    effect(() => {
      // Prevent double spin
      if (this.hasSpun() || this.spinTrigger()) return;

      const newNumber = this.wheelNumber();
      if (newNumber !== null) {
        const degrees = this.wheelService.calculateRotation(newNumber);
        this.rotation.set(degrees);
        this.spinTrigger.set(true);
      }
    });
  }

  onAnimationDone(): void {
    // Prevent animation done from firing on page load
    if (!this.spinTrigger()) return;

    this.hasSpun.set(true);
    this.wheelService.navigateToResult();
  }
}
