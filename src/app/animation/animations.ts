import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideDownUp = trigger('slideDownUp', [
  transition(':enter', [
    style({ transform: 'translateY(100%)' }),
    animate('.2s ease-in-out', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    animate('.2s ease-in-out', style({ transform: 'translateY(100%)' })),
  ]),
]);
