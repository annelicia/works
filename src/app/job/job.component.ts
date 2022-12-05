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
  isFetching: boolean = false;
  offsetFetch: number = 0;
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.isFetching = true;
    this.jobService.getJobList(this.offsetFetch).subscribe(jobList => {
      this.jobList = jobList;
      this.isFetching = false;
    });
  }

  onSelect(jobId: string) {
    this.selectedJobId = jobId;
  }

  onScroll(event: any) {
    const remainingHeight = event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight;
    // TODO: edit if statement buat scroll new job.
    if (remainingHeight < 2000 && !this.isFetching) {
      this.isFetching = true;
      this.offsetFetch = this.offsetFetch + 30;
      this.jobService.getJobList(this.offsetFetch).subscribe(jobListNew => {
        this.jobList = [...this.jobList, ...jobListNew];
        this.isFetching = false;
      });
    }
    console.log(remainingHeight);
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
