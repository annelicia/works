import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyButtonComponent } from 'src/app/common/components/apply-button/apply-button.component';
import { IconLabelComponent } from 'src/app/common/components/icon-label/icon-label.component';
import { TagComponent } from 'src/app/common/components/tag/tag.component';
import { JOB_2 } from 'src/app/common/constants/job';
import { JobDetailHeaderComponent } from './job-detail-header.component';

describe('JobDetailHeaderComponent', () => {
  let component: JobDetailHeaderComponent;
  let fixture: ComponentFixture<JobDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobDetailHeaderComponent,
        IconLabelComponent,
        ApplyButtonComponent,
        TagComponent,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return expected tags.', () => {
    // Arrange.
    const component = new JobDetailHeaderComponent();
    component.job = {
      ...JOB_2,
      requiredSkills: [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 158,
          "name": "Typescript"
        },
        {
          "id": 107,
          "name": "CSS"
        },
        {
          "id": 387,
          "name": "HTML"
        }
      ],
      optionalSkills: [
        {
          "id": 123,
          "name": "Angular",
        }
      ],
    };

    // Act.
    const tags = component.tags;

    // Assert.
    expect(tags).toEqual(["React", "Typescript", "CSS", "HTML", "Angular"]);
  })
});
