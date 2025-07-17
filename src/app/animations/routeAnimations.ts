import {
  trigger,
  transition,
  query,
  style,
  animate,
  stagger,
} from '@angular/animations';
import {
  CONTENT_WRAPPER,
  ENTER_ANIMATION_MS,
  ENTER_DELAY_MS,
  ENTER_STAGGER_MS,
  LEAVE_ANIMATION_MS,
} from '../constants/routeAnimations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [
    query(
      `:enter ${CONTENT_WRAPPER} > *`,
      style({ opacity: 0, transform: 'translateY(20px)' }),
      { optional: true },
    ),

    query(
      ':leave',
      [
        style({
          position: 'absolute',
        }),
        animate(
          `${LEAVE_ANIMATION_MS}ms ease-out`,
          style({ opacity: 0, transform: 'translateY(-20px)' }),
        ),
      ],
      { optional: true },
    ),

    query(
      `:enter ${CONTENT_WRAPPER} > *`,
      stagger(ENTER_STAGGER_MS, [
        animate(
          `${ENTER_ANIMATION_MS}ms ${ENTER_DELAY_MS}ms ease-out`,
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      { optional: true },
    ),
  ]),
]);
