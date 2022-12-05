import { Component } from '@angular/core';
import { JobService } from '../common/services/job/job.service';

@Component({
  selector: 'app-technology-selector',
  templateUrl: './technology-selector.component.html',
  styleUrls: ['./technology-selector.component.scss']
})
export class TechnologySelectorComponent {

  constructor(private jobService: JobService) { }

  get chips() {
    return this.skills.map(skill => ({
      id: skill.id,
      value: skill.label,
      selected: this.selectedTypes.has(skill.id) ? true : false,
    }));
  }

  get selectedTypes() {
    return this.jobService.getSelectedTechnologyIds();
  }

  get skills() {
    return this.jobService.getSkills();
  }

  onClickSkill(skillId: string) {
    this.jobService.selectType(skillId);
  }
}
