import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Skill {
  id: string;
  name: string;
}

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
  private subscription: Subscription | undefined;
  private offsetFetch: number = 0;
  private isFetching: boolean = false;
  private readonly jobList = new BehaviorSubject<Job[]>([]);
  readonly jobList$ = this.jobList.asObservable();
  private selectedTechnologyIds: Set<string> = new Set();

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
    this.subscription = this.getJobList().subscribe(jobListNew => {
      this.jobList.next([...this.jobList.getValue(), ...jobListNew]);
      this.isFetching = false;
      this.offsetFetch = this.offsetFetch + 30;
    });
  }

  private jobDetail: JobDetail = {
    "jobId": "98226",
    "description": "<p><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">A NASDAQ-listed company manufacturing relevant and necessary electrical vehicle solutions is looking for a Senior Front-End Engineer. The engineer will be responsible for writing code from scratch while designing and developing technical documentation. The company is determined to provide future generations with a greener future with their eco-friendly automation solutions. So far, the company has successfully secured more than $10 bn in funding.&nbsp;&nbsp;</span></p><p><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">&nbsp;</span></p><p><strong style=\"background-color: transparent; color: rgb(14, 16, 26);\">Job Responsibilities:</strong></p><ul><li><span style=\"background-color: transparent;\">Work collaboratively in a team environment with other engineers, product, and design teams to design and build sustainable applications&nbsp;</span></li><li><span style=\"background-color: transparent;\">Collaborate across teams and departments to ensure proper flow of communication&nbsp;</span></li><li><span style=\"background-color: transparent;\">Maintain quality standards and iteratively develop software&nbsp;</span></li><li><span style=\"background-color: transparent;\">Write robust, scalable code that is well-documented and easy to read</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(14, 16, 26);\">Job Requirements:</strong></p><ul><li><span style=\"background-color: transparent;\">Bachelor’s/Master’s degree in Engineering, Computer Science (or equivalent experience)</span></li><li><span style=\"background-color: transparent;\">At least 5+ years of relevant experience as a front-end engineer</span></li><li><span style=\"background-color: transparent;\">Extensive experience with ReactJS, Typescript, and GraphQL</span></li><li><span style=\"background-color: transparent;\">Knowledge of AWS</span></li><li><span style=\"background-color: transparent;\">Fluent in verbal and written English</span></li></ul>",
    "createdDate": "2022-11-28T20:33:21.000Z",
    "updatedDate": "2022-11-30T14:15:33.000Z",
    "industry": "Transportation",
    "customerWeeklyHourEngagement": null,
    "publishedOnJobBoard": "2022-11-30T10:59:21.000Z",
    "requiredSkills": [
      {
        "id": 2031,
        "name": "React"
      },
      {
        "id": 158,
        "name": "Typescript"
      },
      {
        "id": 159,
        "name": "GraphQL"
      },
      {
        "id": 433,
        "name": "AWS"
      }
    ],
    "optionalSkills": [],
    "role": "Sr. Frontend Engineer",
    "companySize": 1000,
    "company": "Rivian",
    "publicTitle": "Senior Front-End Engineer",
    "isActive": true,
    "jobLanguageContent": [
      {
        "languageId": 2,
        "abbreviation": "PT",
        "language": "Portuguese",
        "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa listada na NASDAQ, que está criando importantes soluções no campo de veículos elétricos, está procurando contratar um Desenvolvedor Front-end Sênior. O desenvolvedor será responsável por escrever código do zero enquanto elabora o design e cria a documentação técnica. Através de suas soluções automotivas preocupadas com o meio-ambiente, a empresa está determinada a oferecer um futuro mais verde para as próximas gerações. Até agora, ela conseguiu arrecadar mais de US$10 bilhões em investimentos. Essa é uma excelente vaga front-end para desenvolvedores brasileiros que querem trabalhar para uma gigante da indústria empenhada na construção de um futuro mais sustentável.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Trabalhar colaborativamente, em um ambiente de equipe, junto a outros desenvolvedores e equipes de design e produto, a fim de elaborar novos designs e criar aplicações sustentáveis</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Colaborar com outras equipes e departamentos para garantir o bom fluxo da informação</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Manter os padrões de qualidade e desenvolver software iterativamente</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Escrever código robusto, escalável, bem documentado e fácil de ler</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Ao menos 5 anos de experiência relevante como desenvolvedor front-end</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vasta experiência com ReactJS, TypeScript e GraphQL</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre AWS</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Inglês fluente, verbal e escrito</span></li></ul>",
        "publicTitle": "Desenvolvedor Front-end Sênior",
        "publishedOnJobBoard": "2022-11-29T18:59:11.000Z"
      },
      {
        "languageId": 3,
        "abbreviation": "ES",
        "language": "Spanish",
        "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa que cotiza en NASDAQ que fabrica soluciones relevantes y necesarias para vehículos eléctricos está buscando un ingeniero front-end senior. El candidato seleccionado será responsable de escribir el código desde cero mientras diseña y desarrolla la documentación técnica. La empresa está decidida a proporcionar a las generaciones futuras un futuro más verde con sus soluciones de automatización ecológicas. Hasta el momento, ha obtenido con éxito más de 10.000 millones de dólares en financiación. Esta es una gran oportunidad de trabajo remoto para desarrolladores de Latinoamérica.</span></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Trabajar en colaboración en un entorno de equipo con otros ingenieros, equipos de producto y diseño para crear aplicaciones sostenibles</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Colaborar entre equipos y departamentos para garantizar un flujo de comunicación adecuado</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Mantener estándares de calidad y desarrollar software iterativamente</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Escribir código sólido y escalable que esté bien documentado y sea fácil de leer</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li><span style=\"background-color: transparent;\">Licenciatura / Maestría en Ingeniería, Ciencias de la Computación (o experiencia equivalente)</span></li><li><span style=\"background-color: transparent;\">Al menos 5 años o más de experiencia relevante como ingeniero front-end</span></li><li><span style=\"background-color: transparent;\">Amplia experiencia con ReactJS, TypeScript y GraphQL</span></li><li><span style=\"background-color: transparent;\">Conocimiento de AWS</span></li><li><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul><p><br></p>",
        "publicTitle": "Ingeniero Front-end Senior",
        "publishedOnJobBoard": "2022-11-29T18:59:11.000Z"
      },
      {
        "languageId": 2,
        "abbreviation": "PT",
        "language": "Portuguese",
        "publicDescription": null,
        "publicTitle": null,
        "publishedOnJobBoard": "2022-11-29T20:25:43.000Z"
      },
      {
        "languageId": 3,
        "abbreviation": "ES",
        "language": "Spanish",
        "publicDescription": null,
        "publicTitle": null,
        "publishedOnJobBoard": "2022-11-29T20:25:43.000Z"
      }
    ]
  };

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
  ]

  constructor(private http: HttpClient) { }

  selectType(id: string) {
    if (this.selectedTechnologyIds.has(id)) {
      this.selectedTechnologyIds.delete(id);
    } else {
      this.selectedTechnologyIds.add(id);
    }
  }

  getSelectedTechnologyIds() {
    return this.selectedTechnologyIds;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getJobList(): Observable<Job[]> {
    return this.http.get<Job[]>(this.getJobListUrl(this.offsetFetch));
  }

  private getJobListUrl(offset: number) {
    return `https://works-api.vercel.app/api/getJobList?sortBy=publishedOnJobBoard%2Cdesc&skillIds=2031%2C2101%2C433%2C1827%2C857%2C1012%2C1403%2C836%2C234%2C1013%2C720&limit=30&offset=${offset}&locale=en`;
  }

  getJobDetail(): Observable<JobDetail> {
    return this.http.get<JobDetail>(this.getJobDetailUrl());
  }

  private getJobDetailUrl() {
    return "https://works-api.vercel.app/api/getJobDetail?id=98460";
  }
}
