import { Component, OnInit } from '@angular/core';
import { Job, JobService } from '../job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  selectedJobId: string = "98226";
  jobList: Job[] = [];
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobList().subscribe(jobList => this.jobList = jobList);
  }

  onSelect(jobId: string) {
    this.selectedJobId = jobId;
  }

  get selectedJob() {
    const selectedJob = this.jobList.filter(job => job.jobId === this.selectedJobId);
    if (selectedJob) {
      return selectedJob[0];
    } else {
      return null;
    }
  }
}