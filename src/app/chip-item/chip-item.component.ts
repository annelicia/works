import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss'],
  // animations: [
  //   trigger('selectUnselect', [
  //     state('selected', style({
  //       paddingRight: '30px',
  //     })),
  //     state('unselected', style({
  //       paddingRight: '12px',
  //     })),
  //     transition('* => *', [
  //       animate('.2s')
  //     ]),
  //   ])
  // ]
})
export class ChipItemComponent {
  @Input() text!: string;
  @Input() selected!: boolean;
}
