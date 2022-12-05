import { Component, OnInit } from '@angular/core';
import { JOB_IDS_FILTERED } from '../common/constants/jobIds';
import { Job, JobService } from '../common/services/job/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  jobList: Job[] = [];
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.jobList$.subscribe(jobList => {
      this.jobList = jobList.filter(eachJob => JOB_IDS_FILTERED.has(eachJob.jobId));
      if (this.jobList.length > 0) {
        this.jobService.selectJobId(this.jobList[0].jobId);
      }
    });
    this.jobService.fetchJobList();
  }

  onSelect(jobId: string) {
    this.jobService.selectJobId(jobId);
  }

  onScroll(event: any) {
    const remainingHeight = event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight;
    // TODO: Fix remainingHeight constant.
    if (remainingHeight < 2000) {
      this.jobService.fetchJobList();
    }
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

  isLoading() {
    return this.jobService.getIsFetching();
  }
}
