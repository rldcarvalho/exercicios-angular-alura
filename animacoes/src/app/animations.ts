import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightStateTrigger = trigger('highlightState', [
    state('default', style({
      border: '2px solid #b2b6ff'
    })),
    state('highlighted', style({
      border: '4px solid #b2b6ff',
      filter: 'brightness(92%)'
    })),
    transition('default => highlighted', [
      animate('200ms ease-out', style({
        transform: 'scale(1.02)'
      })),
      animate(200)
    ])
])

export const showStateTrigger = trigger('showState', [
  state('shown', style({

  })),
  transition('void => shown', [
    style({
      opacity: 0
    }),
    animate(300, style({ 
      opacity: 1
    }))
  ]),
  transition('shown => void', [
    animate(300, style({
      opacity: 0
    }))
  ])

])