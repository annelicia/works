import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JOB_IDS_FILTERED } from 'src/constants/jobIds';
import { Job } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {
  @Input() jobList!: Job[] | null;
  @Input() selectedJobId!: string | null;
  @Output() select = new EventEmitter();

  get jobListFiltered() {
    return this.jobList?.filter(eachJob => JOB_IDS_FILTERED.has(eachJob.jobId));
  }
}
