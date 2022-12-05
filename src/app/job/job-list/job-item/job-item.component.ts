import { Component, EventEmitter, Input, Output } from '@angular/core';
import formatDistance from 'date-fns/formatDistance';
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

  getCompanySizeString() {
    if (!this.job.companySize) return "0";
    if (this.job.companySize <= 10) {
      return "1-10";
    } else if (this.job.companySize <= 50) {
      return "11-50";
    } else if (this.job.companySize <= 250) {
      return "51-250";
    } else if (this.job.companySize <= 10000) {
      return "251-10K";
    } else {
      return "10K+";
    }
  }

  getPublishedDateString() {
    const distance = formatDistance(new Date(this.job.publishedOnJobBoard), new Date());
    if (distance.includes('days')) {
      return Number(distance.split(' days')[0]) < 7 ? `${distance} ago` : '';
    } else if (distance.includes('day')) {
      return `${distance} ago`;
    } else {
      return '';
    }
  }
}
