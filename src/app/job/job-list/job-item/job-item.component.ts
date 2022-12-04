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

  getString(num: number | null) {
    if (!num) return "0";
    if (num <= 10) {
      return "1-10";
    } else if (num <= 50) {
      return "11-50";
    } else if (num <= 250) {
      return "51-250";
    } else if (num <= 10000) {
      return "251-10K";
    } else {
      return "10K+";
    }
  }

  getStringDateDistance(stringDate: string) {
    const distance = formatDistance(new Date(stringDate), new Date());
    if (distance.includes('days')) {
      return Number(distance.split(' days')[0]) < 7 ? `${distance} ago` : '';
    } else if (distance.includes('day')) {
      return `${distance} ago`;
    } else {
      return '';
    }
  }
}
