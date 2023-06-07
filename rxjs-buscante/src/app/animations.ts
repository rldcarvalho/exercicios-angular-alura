import { trigger, transition, query, style, stagger, animate, keyframes, group } from '@angular/animations';

export const listTrigger = trigger('listAnimation', [
    transition('* => *', [
        query(':enter', [
            style({
                transform: 'translateY(-50px)',
                opacity: 0
              }),
              stagger(100, [
                animate('500ms ease', keyframes([
                  style({ opacity: 0, transform: 'translateY(-50px)', offset: 0}),
                  style({ opacity: 0.5, transform: 'translateY(-25px)', offset: 0.3}),
                  style({ opacity: 1, transform: 'none', offset: 1}),
                ])),
              ])
        ], { optional: true}),
        query(':leave', [
            stagger(100, [
                animate('500ms ease', keyframes([
                    style({ opacity: 1, transform: 'none', offset: 0}),
                    style({ opacity: 0.5, transform: 'translateY(-25px)', offset: 0.3}),
                    style({ opacity: 0, transform: 'translateY(-50px)', offset: 1}),
                  ])),
            ])
        ], { optional: true })
    ]),
]);