import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Skill, SKILLS, SKILLS_MAP } from '../../constants/skills';

interface JobSkill {
  id: number;
  name: string;
}

interface JobLanguageContent {
  languageId: number,
  abbreviation: string;
  language: string;
  publicDescription: null | string,
  publicTitle: null | string,
  publishedOnJobBoard: string;
}

export interface Job {
  jobId: string;
  createdDate: string;
  updatedDate: string;
  industry: string;
  customerWeeklyHourEngagement: null | number;
  publishedOnJobBoard: string;
  requiredSkills: JobSkill[];
  optionalSkills: JobSkill[];
  role: string;
  companySize: null | number;
  publicTitle: string;
  isActive: boolean,
  jobLanguageContent: JobLanguageContent[],
}

export interface JobDetail {
  jobId: string;
  description: string;
  createdDate: string;
  updatedDate: string;
  industry: string;
  customerWeeklyHourEngagement: null | number;
  publishedOnJobBoard: string;
  requiredSkills: JobSkill[];
  optionalSkills: JobSkill[];
  role: string;
  companySize: null | number;
  company: string;
  publicTitle: string;
  isActive: boolean;
  jobLanguageContent: JobLanguageContent[],
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private skills: Skill[] = SKILLS;
  private subscription: Subscription | undefined;
  private offsetFetch: number = 0;
  private isFetching: boolean = false;
  private readonly jobList = new BehaviorSubject<Job[]>([]);
  readonly jobList$ = this.jobList.asObservable();
  private selectedTechnologyIds: Set<string> = new Set();
  private jobDetail = new BehaviorSubject<JobDetail | undefined>(undefined);  // undefined means loading.
  readonly jobDetail$ = this.jobDetail.asObservable();
  private selectedJobId: string | undefined;  // undefined means loading.

  selectJobId(jobId: string) {
    if (this.selectedJobId === jobId) return;
    this.selectedJobId = jobId;
    this.getJobDetail();
  }

  getSelectedJobId() {
    return this.selectedJobId;
  }

  getJobDetail() {
    this.jobDetail.next(undefined);
    this.http.get<JobDetail>(this.getJobDetailUrl()).subscribe(jobDetail => this.jobDetail.next(jobDetail));
  }

  getIsFetching() {
    return this.isFetching;
  }

  getOffsetFetch() {
    return this.offsetFetch;
  }

  fetchJobList(force: boolean = false) {
    if (this.isFetching) {
      if (!force) return;
      if (this.subscription !== undefined) {
        this.subscription.unsubscribe();
        this.isFetching = false;
      }
    }
    this.isFetching = true;
    if (force) {
      this.jobList.next([]);
      this.jobDetail.next(undefined);
      this.offsetFetch = 0;
    }
    this.subscription = this.getJobList().subscribe(jobListNew => {
      this.jobList.next([...this.jobList.getValue(), ...jobListNew]);
      this.isFetching = false;
      this.offsetFetch = this.offsetFetch + 30;
    });
  }

  constructor(private http: HttpClient) { }

  selectType(id: string) {
    if (this.selectedTechnologyIds.has(id)) {
      this.selectedTechnologyIds.delete(id);
    } else {
      this.selectedTechnologyIds.add(id);
    }
    this.fetchJobList(true);
  }

  getSelectedTechnologyIds() {
    return this.selectedTechnologyIds;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  private getJobList(): Observable<Job[]> {
    return this.http.get<Job[]>(this.getJobListUrl(this.offsetFetch));
  }

  private getJobListUrl(offset: number) {
    const skillIdsUrl = Array.from(this.selectedTechnologyIds)
      .reduce<number[]>((prev, id) => {
        const skillNow = SKILLS_MAP.get(id);
        if (skillNow) {
          for (let skillId of skillNow.skillIds) {
            prev.push(skillId);
          }
        }
        return prev;
      }, [])
      .join('%2C');
    return `https://works-api.vercel.app/api/getJobList?sortBy=publishedOnJobBoard%2Cdesc&skillIds=${skillIdsUrl}&limit=30&offset=${offset}&locale=en`;
  }

  private getJobDetailUrl() {
    return `https://works-api.vercel.app/api/getJobDetail?id=${this.selectedJobId}`;
  }
}
