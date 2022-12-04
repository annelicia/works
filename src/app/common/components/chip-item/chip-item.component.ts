import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss'],
})
export class ChipItemComponent {
  @Input() text!: string;
  @Input() selected!: boolean;

  getClass() {
    if (this.selected) {
      return 'chip-item chip-item-selected';
    } else {
      return 'chip-item';
    }
  }
}
