import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagComponent } from 'src/app/common/components/tag/tag.component';
import { JOB_1, JOB_2, JOB_3, JOB_4 } from 'src/app/common/constants/job';
import { IconLabelComponent } from '../../../common/components/icon-label/icon-label.component';

import { JobItemComponent } from './job-item.component';

describe('JobItemComponent', () => {
  let component: JobItemComponent;
  let fixture: ComponentFixture<JobItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JobItemComponent,
        IconLabelComponent,
        TagComponent,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jasmine.clock().install();
    const baseTime = new Date('2022-12-05T00:00:00.000Z');  // Dec 5th, 2022.
    jasmine.clock().mockDate(baseTime);
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get tags', () => {
    it('should return expected tags when job provided 3 requiredSkills.', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.job = {
        ...JOB_1,
        requiredSkills: [
          {
            "id": 120,
            "name": "Node.js"
          },
          {
            "id": 2031,
            "name": "React"
          },
          {
            "id": 433,
            "name": "AWS"
          }
        ],
      };

      // Act.
      const tags = component.tags;

      // Assert.
      expect(tags).toEqual(["Node.js", "React", "AWS"]);
    });

    it('should return expected tags when job provided 2 requiredSkills and 0 optionalSkills.', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.job = {
        ...JOB_3,
        requiredSkills: [
          {
            "id": 2031,
            "name": "React"
          },
          {
            "id": 158,
            "name": "Typescript"
          },
        ],
        optionalSkills: [],
      };

      // Act.
      const tags = component.tags;

      // Assert.
      expect(tags).toEqual(["React", "Typescript"]);
    });

    it('should return expected tags when job provided 2 requiredSkills and 1 optionalSkills.', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.job = {
        ...JOB_4,
        requiredSkills: [
          {
            "id": 2031,
            "name": "React"
          },
          {
            "id": 158,
            "name": "Typescript"
          },
        ],
        optionalSkills: [
          {
            "id": 387,
            "name": "HTML"
          }
        ],
      };

      // Act.
      const tags = component.tags;

      // Assert.
      expect(tags).toEqual(["React", "Typescript", "HTML"]);
    });
  });

  describe('getContainerClassName', () => {
    it('should return correct class name when selected is true.', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.selected = true;

      // Act.
      const className = component.getContainerClassName();

      // Assert.
      expect(className).toBe('job-item-container job-item-container-selected');
    });

    it('should return correct class name when selected is false.', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.selected = false;

      // Act.
      const className = component.getContainerClassName();

      // Assert.
      expect(className).toBe('job-item-container');
    });
  });

  describe('getCompanySizeString', () => {
    it('should return "1-10" when companySize provided is 1.', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.job = JOB_1;

      // Act.
      const companySizeString = component.getCompanySizeString();

      // Assert.
      expect(companySizeString).toBe('1-10');
    });

    it('should return "1-10" when companySize provided is 1.', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.job = JOB_2;

      // Act.
      const companySizeString = component.getCompanySizeString();

      // Assert.
      expect(companySizeString).toBe('11-50');
    });
  });

  describe('getPublishedDataString', () => {
    it('should return return "3 days ago" when published days is Dec 5th, 2022', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.job = { ...JOB_1, publishedOnJobBoard: "2022-12-02T00:00:00.000Z" };

      // Act.
      const publishedDateString = component.getPublishedDateString();

      // Assert.
      expect(publishedDateString).toBe('3 days ago');
    });

    it('should return return empty string when published days is Nov 5th, 2022', () => {
      // Arrange.
      const component = new JobItemComponent();
      component.job = { ...JOB_1, publishedOnJobBoard: "2022-11-04T21:00:00.000Z" };

      // Act.
      const publishedDateString = component.getPublishedDateString();

      // Assert.
      expect(publishedDateString).toBe('');
    });
  });

  it('should emit select event.', () => {
    // Arrange.
    component.job = JOB_1;
    fixture.detectChanges();
    spyOn(component.select, 'emit');

    // Act.
    const element = fixture.nativeElement;
    const div = element.querySelector('[aria-label="job-item-container"]');
    div.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    // Assert.
    expect(component.select.emit).toHaveBeenCalledTimes(1);
  })
});