import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Job, JobService } from '../common/services/job/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  jobList: Job[] = [];
  constructor(private jobService: JobService, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.jobService.jobList$.subscribe(jobList => {
      this.jobList = jobList;
    });
    this.jobService.fetchJobList();
  }

  onSelect(jobId: string) {
    this.jobService.selectJobId(jobId);
    this.viewportScroller.scrollToPosition([0, 176]);
  }

  getSelectedJob() {
    const selectedJob = this.jobList.filter(job => job.jobId === this.jobService.getSelectedJobId());
    if (selectedJob) {
      return selectedJob[0];
    } else {
      return null;
    }
  }

  getSelectedJobId() {
    return this.jobService.getSelectedJobId();
  }

  isLoadingFirstTime() {
    return this.jobList.length === 0;
  }
}
