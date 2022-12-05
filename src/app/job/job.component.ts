import { Component, OnInit } from '@angular/core';
import { Job, JobService } from '../common/services/job/job.service';

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
    this.jobService.jobList$.subscribe(jobList => this.jobList = jobList);
    this.jobService.fetchJobList();
  }

  onSelect(jobId: string) {
    this.selectedJobId = jobId;
  }

  onScroll(event: any) {
    const remainingHeight = event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight;
    // TODO: Fix remainingHeight constant.
    if (remainingHeight < 2000) {
      this.jobService.fetchJobList();
    }
  }

  getSelectedJob() {
    const selectedJob = this.jobList.filter(job => job.jobId === this.selectedJobId);
    if (selectedJob) {
      return selectedJob[0];
    } else {
      return null;
    }
  }
}
