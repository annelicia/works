import { Component, Input } from '@angular/core';

export type IconName = "arrow";

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.scss']
})
export class ApplyButtonComponent {
  @Input() icon!: IconName | undefined;

  getClassName() {
    return this.icon === 'arrow' ? 'apply-button apply-button-transition' : 'apply-button';
  }
}
