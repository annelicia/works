import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobDetail, JobService } from 'src/app/common/services/job/job.service';

@Component({
  selector: 'app-job-detail-description',
  templateUrl: './job-detail-description.component.html',
  styleUrls: ['./job-detail-description.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JobDetailDescriptionComponent implements OnInit {
  jobDetail: JobDetail | undefined;
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    // this.jobService.getJobDetail().subscribe(jobDetail => this.jobDetail = jobDetail);
  }
}
