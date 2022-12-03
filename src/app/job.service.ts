import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  types: string[] = ["React", "AWS", "Python", "CSS"];
  constructor() { }
}
