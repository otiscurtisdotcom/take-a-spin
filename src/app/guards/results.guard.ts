import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { WheelService } from '../services/wheel-service';

export const resultsGuard: CanActivateFn = () => {
  const wheelService = inject(WheelService);

  if (wheelService.result() === null) {
    wheelService.navigateToStart();
    return false;
  } else {
    return true;
  }
};
