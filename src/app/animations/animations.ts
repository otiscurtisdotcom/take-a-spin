import {
  trigger,
  transition,
  query,
  style,
  animate,
  stagger
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [
    query(
      ':enter .content > *',
      style({ opacity: 0, transform: 'translateY(20px)' }),
      { optional: true }
    ),

    query(':leave', [
      style({
        position: 'absolute',
      }),
      animate('300ms ease-out', style({ opacity: 0 }))
    ], { optional: true }),

    query(
      ':enter .content > *',
      stagger(100, [
        animate(
          '400ms 100ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      { optional: true }
    )
  ])
]);
