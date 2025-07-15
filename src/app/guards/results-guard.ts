import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { WheelService } from '../services/wheel-service';

export const resultsGuard: CanActivateFn = () => {
  const wheelService = inject(WheelService);
  const router = inject(Router);

  return wheelService.result() !== null
    ? true
    : router.navigate(['/']);
};