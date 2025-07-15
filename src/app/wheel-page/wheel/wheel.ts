import { Component, computed, input, Signal } from '@angular/core';

interface SegmentData {
  label: string;
  color: string;
}

interface Segment extends SegmentData {
  rotation: string;
}

const SEGMENTS_DATA: SegmentData[] = [
  { label: 'One', color: '#f66' },
  { label: 'Two', color: '#6f6' },
  { label: 'Three', color: '#66f' },
  { label: 'Four', color: '#ff6' },
  { label: 'Five', color: '#6ff' },
  { label: 'Six', color: '#f6f' },
];

@Component({
  selector: 'spinner-app-wheel',
  imports: [],
  templateUrl: './wheel.html',
  styleUrl: './wheel.scss'
})
export class Wheel {
  readonly wheelNumber = input.required<Signal<number | null>>();

  readonly segments: Signal<Segment[]> = computed(() => {
    return SEGMENTS_DATA.map((segment, i) => {
      const angle = i * 360 / SEGMENTS_DATA.length;
      return {
        ...segment,
        rotation: `rotate(${angle}, 100, 100)`,
      };
    });
  })
}
