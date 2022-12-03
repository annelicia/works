import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-selector',
  templateUrl: './chip-selector.component.html',
  styleUrls: ['./chip-selector.component.scss']
})
export class ChipSelectorComponent {
  @Input() types!: string[];
}
