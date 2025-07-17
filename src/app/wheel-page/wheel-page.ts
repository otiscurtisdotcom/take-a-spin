import { Component, signal } from '@angular/core';
import { WheelComponent } from "./wheel/wheel";
import { WheelService } from '../services/wheel-service';
import { Button } from "../shared/button/button";

@Component({
  selector: 'spinner-app-wheel-page',
  imports: [WheelComponent, Button],
  templateUrl: './wheel-page.html',
  styleUrl: './wheel-page.scss'
})
export class WheelPage {
  constructor(private wheelService: WheelService) { }

  getRandom() {
    this.wheelService.spinRandom();
  }

  getFixed() {
    this.wheelService.spinFixed();
  }
}
