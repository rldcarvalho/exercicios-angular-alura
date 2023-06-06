import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';

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
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({ 
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])

])

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4'
    }))
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity:0, width: 0}),
    animate('400ms ease-out', keyframes([
      style({ offset: 0,opacity: 0, width: 0}),
      style({ offset: 0.8, opacity: 0.5, width: '*', backgroundColor: 'lightgreen'}),
      style({ offset: 1,opacity: 1, width: '*',  backgroundColor: 'lightblue'}),
    ]))
  ]),
  transition(':leave', [
    animate('400ms cubic-bezier(.13, .9, .8, .1)', style({ opacity:0, width: 0}))
  ])
])

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    group([
      animate('200ms', style({ backgroundColor: '#63b77c'})),
      animate('100ms', style({ transform: 'scale(1.1)'})),
    ]),
    animate('200ms', style({ backgroundColor: 'scale(1.1)'})),
  ]),
  transition('valid => invalid', [
    group([
      animate('200ms', style({ backgroundColor: '#6c757d'})),
      animate('100ms', style({ transform: 'scale(1.1)'})),
    ]),
    animate('200ms', style({ backgroundColor: 'scale(1.1)'})),
  ])
])