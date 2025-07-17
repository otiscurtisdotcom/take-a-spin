import { trigger, transition, style, animate } from '@angular/animations';
import { SPIN_BOUNCE, SPIN_TIME_MS } from '../constants/spins';

export const spinAnimation = trigger('spin', [
  transition(
    'false => true',
    [
      animate(
        `${SPIN_TIME_MS}ms ${SPIN_BOUNCE}`,
        style({ transform: '{{ transform }}' }),
      ),
    ],
    { params: { transform: 'rotate(0deg)' } },
  ),
]);
