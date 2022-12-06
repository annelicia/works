import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'works-app';

  constructor(private breakpointObserver: BreakpointObserver, private metaService: Meta) {
    this.breakpointObserver.observe(["(max-width: 360px)"]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.metaService.updateTag({
          name: 'viewport',
          content: 'width=360',
        }, 'name=viewport');
      }
    });

    this.breakpointObserver.observe(["(min-width: 361px)"]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.metaService.updateTag({
          name: 'viewport',
          content: 'width=device-width,initial-scale=1',
        }, 'name=viewport');
      }
    });
  }
}
