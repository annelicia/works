import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Skill {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private skills: Skill[] = [
    {
      id: "1",
      name: "React",
    }, {
      id: "2",
      name: "AWS",
    }, {
      id: "3",
      name: "Python",
    }, {
      id: "4",
      name: "Node.js",
    }, {
      id: "5",
      name: "Typescript",
    }, {
      id: "6",
      name: "JavaScript",
    }, {
      id: "7",
      name: "SQL",
    }, {
      id: "8",
      name: "CSS",
    }, {
      id: "9",
      name: "Java",
    }, {
      id: "10",
      name: "HTML",
    }, {
      id: "11",
      name: "Docker",
    }, {
      id: "12",
      name: "Kubernetes",
    }, {
      id: "13",
      name: "PostgreSQL",
    }, {
      id: "14",
      name: "React Native",
    }, {
      id: "15",
      name: "GraphQL",
    }, {
      id: "16",
      name: "MongoDB",
    }, {
      id: "17",
      name: "PHP",
    }, {
      id: "18",
      name: "Go/Golang",
    }, {
      id: "19",
      name: "Ruby on Rails",
    }, {
      id: "20",
      name: "Angular",
    }, {
      id: "21",
      name: "DevOps",
    },
  ];
  private selectedTypes: Set<string> = new Set();

  constructor() { }

  selectType(id: string) {
    console.log('select type', id);
    if (this.selectedTypes.has(id)) {
      this.selectedTypes.delete(id);
    } else {
      this.selectedTypes.add(id);
    }
  }

  getSelectedTypes() {
    return this.selectedTypes;
  }

  getSkills(): Skill[] {
    return this.skills;
  }
}
