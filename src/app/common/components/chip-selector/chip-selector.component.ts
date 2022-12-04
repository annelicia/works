import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Chip {
  id: string;
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-chip-selector',
  templateUrl: './chip-selector.component.html',
  styleUrls: ['./chip-selector.component.scss']
})
export class ChipSelectorComponent {
  @Input() chips!: Chip[];
  @Output() selectChip = new EventEmitter();

  onClick(chipId: string) {
    this.selectChip.emit(chipId);
  }

  trackById(index: number, chip: Chip) {
    return chip.id;
  }
}
