import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  types: string[] = [
    "React",
    "AWS",
    "Python",
    "Node.js",
    "Typescript",
    "JavaScript",
    "SQL",
    "CSS",
    "Java",
    "HTML",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "React Native",
    "GraphQL",
    "MongoDB",
    "PHP",
    "Go/Golang",
    "Ruby on Rails",
    "Angular",
    "DevOps"
  ];
  constructor() { }
}
