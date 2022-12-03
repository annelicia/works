import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-technology-selector',
  templateUrl: './technology-selector.component.html',
  styleUrls: ['./technology-selector.component.scss']
})
export class TechnologySelectorComponent {
  types: string[] = [];

  constructor(private jobService: JobService) {
    this.types = jobService.types;
  }
}
