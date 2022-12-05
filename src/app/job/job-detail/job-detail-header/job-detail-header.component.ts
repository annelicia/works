import { Component, Input } from '@angular/core';
import { toDaysSinceToday } from 'src/app/common/utils/dateUtils';
import { Job } from 'src/app/common/services/job/job.service';
import { getCompanySizeString } from 'src/app/common/utils/companySizeUtils';
import { getIndustryString } from 'src/app/common/utils/jobIndustryUtils';

@Component({
  selector: 'app-job-detail-header',
  templateUrl: './job-detail-header.component.html',
  styleUrls: ['./job-detail-header.component.scss']
})
export class JobDetailHeaderComponent {
  @Input() job!: Job | null;

  get tags() {
    return this.job?.requiredSkills.concat(this.job.optionalSkills).map(({ name }) => name);
  }

  getPublishedDateString() {
    return this.job ? toDaysSinceToday(this.job.publishedOnJobBoard) : '';
  }

  getCompanySize() {
    return getCompanySizeString(this.job?.companySize);
  }

  getJobIndustry() {
    if (!this.job) return;
    return getIndustryString(this.job.industry);
  }
}
