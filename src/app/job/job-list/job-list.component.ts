import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../common/services/job/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {
  @Input() jobList!: Job[] | null;
  @Input() selectedJobId!: string | undefined;
  @Output() select = new EventEmitter();
}
