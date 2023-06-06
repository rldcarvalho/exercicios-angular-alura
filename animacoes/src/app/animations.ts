import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

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

export const flyInOutTrigger = trigger('flyInOutAnimation', [
  transition(':enter', [
    style({
      width: '100%',
      transform: 'translateX(-100%)',
      opacity: 0
    }),
    group([
      animate('0.3s 0.1s ease', style({
        transform: 'translateX(0)',
        width: '*'
      })),
      animate('0.3s ease', style({
        opacity: 1
      }))
    ])
  ]),
  transition(':leave', [
    group([
      animate('0.3s ease', style({
        transform: 'translateX(100%)',
        width: '*'
      })),
      animate('0.3s 0.2s ease', style({
        opacity: 0
      }))
    ])
  ])
])

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate('200ms', style({ backgroundColor: '#63b77c'})),
        animate('100ms', style({ transform: 'scale(1.1)'})),
      ]),
      animate('200ms', style({ backgroundColor: 'scale(1.1)'})),
      ])
    ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate('200ms', style({ backgroundColor: '#6c757d'})),
        animate('100ms', style({ transform: 'scale(1.1)'})),
      ]),
      animate('200ms', style({ backgroundColor: 'scale(1.1)'})),
    ])
  ])
])

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query('input.ng-invalid:focus, select.ng-invalid:focus', [
      animate('0.5s', keyframes([
        style({ border: '2px solid red' }),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(0)'}),
      ]))
    ], { optional: true})
  ])
])