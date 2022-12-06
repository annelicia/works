import { Component } from '@angular/core';

import { StepsBecomeDeveloper, STEPS_BECOME_DEVELOPER } from 'src/app/common/constants/stepsBecomeDeveloper';

@Component({
  selector: 'app-job-detail-footer',
  templateUrl: './job-detail-footer.component.html',
  styleUrls: ['./job-detail-footer.component.scss']
})
export class JobDetailFooterComponent {
  steps: StepsBecomeDeveloper[] = STEPS_BECOME_DEVELOPER;
}
