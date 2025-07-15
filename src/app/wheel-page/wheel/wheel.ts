import { Component, input, Signal } from '@angular/core';

@Component({
  selector: 'spinner-app-wheel',
  imports: [],
  templateUrl: './wheel.html',
  styleUrl: './wheel.scss'
})
export class Wheel {
  readonly wheelNumber = input.required<Signal<number | null>>();
}
