import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getCompanySizeString } from 'src/app/common/utils/companySizeUtils';
import { DaysSinceTodayType, toDaysSinceToday } from 'src/app/common/utils/dateUtils';
import { getIndustryString } from 'src/app/common/utils/jobIndustryUtils';
import { Job } from '../../../common/services/job/job.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent {
  @Input() job!: Job;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter();

  get tags() {
    return this.job.requiredSkills.concat(this.job.optionalSkills).map(({ name }) => name).slice(0, 3);
  }

  getContainerClassName() {
    return this.selected ? 'job-item-container job-item-container-selected' : 'job-item-container';
  }

  getCompanySize() {
    return getCompanySizeString(this.job.companySize);
  }

  getPublishedDateString() {
    return toDaysSinceToday(this.job.publishedOnJobBoard, DaysSinceTodayType.JOB_ITEM);
  }

  getJobIndustry() {
    return getIndustryString(this.job.industry);
  }
}
