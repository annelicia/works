import { Component, Input } from '@angular/core';
import { Job } from 'src/app/common/services/job/job.service';

@Component({
  selector: 'app-job-detail-header',
  templateUrl: './job-detail-header.component.html',
  styleUrls: ['./job-detail-header.component.scss']
})
export class JobDetailHeaderComponent {
  @Input() job!: Job | null;

  get tags() {
    return this.job?.requiredSkills.concat(this.job.optionalSkills).map(({ name }) => name);
  }
}
