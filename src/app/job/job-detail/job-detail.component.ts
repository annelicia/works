import { Component, Input } from '@angular/core';
import { Job } from '../../common/services/job/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent {
  @Input() job!: Job | null;
}
