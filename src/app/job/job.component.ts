import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  selectedJobId: string = "98226";
  constructor(private jobService: JobService) { }

  getJobList() {
    return this.jobService.getJobList();
  }

  onSelect(jobId: string) {
    this.selectedJobId = jobId;
  }
}
