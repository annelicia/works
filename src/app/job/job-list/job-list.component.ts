import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Job, JobService } from '../../common/services/job/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {
  @Input() jobList!: Job[] | null;
  @Input() selectedJobId!: string | undefined;
  @Output() select = new EventEmitter();

  private readonly JOB_URL_PREFIX = 'https://www.turing.com/remote-developer-jobs/j/';
  private readonly INFINITE_LOADING_SCROLL_THRESHOLD = 2000;

  private isMobileView: boolean = false;

  constructor(private jobService: JobService, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(["(max-width: 1024px)"]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isMobileView = true;
      } else {
        this.isMobileView = false;
      }
    });
  }

  onScroll(event: any) {
    const remainingHeight = event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight;
    if (remainingHeight < this.INFINITE_LOADING_SCROLL_THRESHOLD) {
      this.jobService.fetchJobList();
    }
  }

  getJobList() {
    if (!this.jobList) return this.jobList;

    if (this.isMobileView) {
      return this.jobList.slice(0, 20);
    }
    return this.jobList;
  }

  private getJobUrl(job: Job) {
    let words = job.publicTitle.toLocaleLowerCase().split(' ');
    words.push(job.jobId);
    return `${this.JOB_URL_PREFIX}${words.join('-')}`;
  }

  onSelect(job: Job) {
    if (this.isMobileView) {
      window.location.href = this.getJobUrl(job);
    } else {
      this.select.emit();
    }
  }
}
