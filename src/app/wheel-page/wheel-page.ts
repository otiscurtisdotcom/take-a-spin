import { Component, signal } from '@angular/core';
import { Wheel } from "./wheel/wheel";
import { WheelService } from '../services/wheel-service';

@Component({
  selector: 'spinner-app-wheel-page',
  imports: [Wheel],
  templateUrl: './wheel-page.html',
  styleUrl: './wheel-page.scss'
})
export class WheelPage {
  readonly wheelNumber = this.wheelService.result;

  constructor(private wheelService: WheelService) { }

  getRandom() {
    this.wheelService.spinRandom();
  }

  getFixed() {
    this.wheelService.spinFixed();
  }
}
