import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor(private jobService: JobService) { }

  onScroll(event: any) {
    const remainingHeight = event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight;
    // TODO: Fix remainingHeight constant.
    if (remainingHeight < 2000) {
      this.jobService.fetchJobList();
    }
  }
}
