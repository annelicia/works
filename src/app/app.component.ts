import { Component, HostListener } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'works-app';

  constructor(private metaService: Meta) {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    if (window.outerWidth <= 360) {
      this.metaService.updateTag({
        name: 'viewport',
        content: 'width=360',
      }, 'name=viewport');
    } else if (window.outerWidth > 360) {
      this.metaService.updateTag({
        name: 'viewport',
        content: 'width=device-width,initial-scale=1',
      }, 'name=viewport');
    }
  }
}
