import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  private jobList: Job[] = [
    {
      "jobId": "98559",
      "createdDate": "2022-12-01T20:20:05.000Z",
      "updatedDate": "2022-12-02T18:55:19.000Z",
      "industry": "UNKNOWN",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-12-02T18:55:20.000Z",
      "requiredSkills": [
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
      "optionalSkills": [],
      "role": "Brisken- Software Engineer (Europe based)",
      "companySize": 1,
      "publicTitle": "Software Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-12-02T18:55:16.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-12-02T18:55:16.000Z"
        }
      ]
    },
    {
      "jobId": "98514",
      "createdDate": "2022-12-01T16:17:16.000Z",
      "updatedDate": "2022-12-02T18:40:32.000Z",
      "industry": "Edtech",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-12-02T18:40:33.000Z",
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
          "id": 107,
          "name": "CSS"
        },
        {
          "id": 387,
          "name": "HTML"
        }
      ],
      "optionalSkills": [],
      "role": "Front end Engineer 2",
      "companySize": 11,
      "publicTitle": "Front-End Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-12-02T18:40:29.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-12-02T18:40:29.000Z"
        }
      ]
    },
    {
      "jobId": "98226",
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
    },
    {
      "jobId": "98181",
      "createdDate": "2022-11-28T18:24:23.000Z",
      "updatedDate": "2022-12-01T14:46:10.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-11-29T18:47:22.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 111,
          "name": "REST/RESTful APIs"
        },
        {
          "id": 183,
          "name": "Stripe"
        },
        {
          "id": 264,
          "name": "JSON"
        }
      ],
      "optionalSkills": [
        {
          "id": 93,
          "name": "JavaScript"
        },
        {
          "id": 387,
          "name": "HTML"
        },
        {
          "id": 107,
          "name": "CSS"
        }
      ],
      "role": "React Front End",
      "companySize": 11,
      "publicTitle": "React Front-End Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa bem estabelecida que desenvolveu uma plataforma de networking para as pessoas encontrarem seu próximo emprego, montarem uma rede de contatos e se qualificarem, está procurando contratar um Desenvolvedor React Front-end. O candidato selecionado será responsável por otimizar a capacidade de resposta do componente em uma variedade de dispositivos e navegadores com capacidade para web. A empresa está empenhada em oferecer oportunidades de emprego, redes de contatos e qualificações para permitir que milhões de funcionários de colarinho azul avancem em suas carreiras. Essa é uma excelente oportunidade para desenvolvedores brasileiros que estão em busca de uma vaga de trabalho remoto cujo salário é em dólar.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Implementar soluções de software em colaboração com equipes de desenvolvimento e gerentes de produto</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Trabalhar diariamente em um ambiente disperso com uma equipe multifuncional</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Traduzir o design e os wireframes em uma interface de usuário baseada na Web altamente responsiva</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Garantir que os designs de UI/UX sejam tecnicamente viáveis</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Criar uma arquitetura de front-end versátil e bem estruturada apoiada por APIs</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Desenvolver aplicações web a partir do zero</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Otimizar o desempenho do componente em uma variedade de dispositivos e navegadores com capacidade para web</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Oferecer suporte durante toda a vida útil do projeto (elaboração, desenvolvimento, teste e debugging, lançamento e suporte)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Reconhecer requisitos exclusivos e propor respostas adequadas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Implementar recursos do documento e especificações técnicas&nbsp;</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Manter-se atualizado sobre os princípios e as melhores práticas de desenvolvimento de aplicações web usando o GitHub ou repositórios similares</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 3 anos de experiência relevante como desenvolvedor de software</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Mais de 3 anos de experiência em desenvolvimento React</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre JavaScript</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Familiaridade com HTML e CSS</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com ferramentas comuns de desenvolvimento front-end</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre comunicação client-server</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Compreensão sobre APIs baseadas em JSON e REST</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com a integração de opções de pagamento, como PayPal, Stripe, etc.</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre integração de código personalizado com APIs de terceiros</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com mecanismos de autorização seguros, como token web JSON</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre repositórios de código e sistemas de controle de versão de código</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Será vantajoso ter experiência com unit tests, desenvolvimento orientado a testes e cobertura de código, frameworks de teste e refatoração de código</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">É recomendável compreender o mecanismo de segurança de dados</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Excelentes habilidades de escuta e comunicação interpessoal verbais e escritas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Habilidade para interpretar e executar o plano técnico</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Excelentes habilidades de resolução de problemas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Demonstrar domínio da gestão do tempo para garantir a entrega do produto dentro do cronograma</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Fluência em inglês, verbal e escrito</span></li></ul>",
          "publicTitle": "Desenvolvedor React Front-end",
          "publishedOnJobBoard": "2022-11-29T18:47:20.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa consolidada que ha desarrollado una plataforma de networking para que la gente encuentre su próximo trabajo, se relacione y se perfeccione está buscando un programador React Front-End. El candidato seleccionado para este trabajo remoto será responsable de mejorar la capacidad de respuesta del componente en una amplia gama de dispositivos y navegadores con capacidad web. La empresa se compromete a proporcionar empleo, red y posibilidades de perfeccionamiento para permitir que millones de empleados de cuello azul avancen en sus carreras.</span></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Implementar soluciones de software en colaboración con los equipos de desarrollo y los gestores de productos</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Trabajar diariamente en un entorno disperso con un equipo multifuncional</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">El diseño y los wireframes deben traducirse en una interfaz de usuario basada en la web con gran capacidad de respuesta</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Garantizar que los diseños UI/UX sean técnicamente viables</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Crear una arquitectura front-end versátil y bien estructurada que esté respaldada por APIs</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Crear aplicaciones web desde cero&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Mejorar el rendimiento de los componentes en una amplia gama de dispositivos y navegadores con capacidad web</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Apoyo durante todo el ciclo de vida (diseño, desarrollo, prueba y depuración, lanzamiento y soporte)</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Reconocer los requisitos únicos y proponer respuestas</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Documentar las características y especificaciones técnicas que se están implementando</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Mantenerse actualizado con los principios de desarrollo de aplicaciones web y las mejores prácticas mediante el uso de GitHub o repositorios de fuentes análogas</span></li></ul><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Licenciatura/Máster en Ingeniería, Informática (o experiencia equivalente)</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Al menos 3 o más años de experiencia relevante como ingeniero de software</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">3 o más años de experiencia en el desarrollo de React</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Conocimiento de JavaScript</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Familiaridad con HTML y CSS</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia con herramientas comunes de desarrollo Front-end</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Conocimiento de la comunicación cliente-servidor</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Conocimiento de JSON y APIs basadas en REST</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia en la integración de opciones de pago como PayPal, Stripe, etc.</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Conocimiento de la integración de código personalizado con APIs de terceros</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia en mecanismos de autorización seguros, como el token web JSON</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Conocimiento de repositorios de código y sistemas de control de versiones</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia con pruebas unitarias, desarrollo dirigido por pruebas y cobertura de código, marcos de pruebas y refactorización de código es un plus</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Se agradece la comprensión de los mecanismos de seguridad de datos</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Excelentes habilidades de escucha, interpersonales, escritas y de comunicación oral</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Interpretación y ejecución de planes técnicos</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Excelente capacidad de resolución de problemas</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Gestión del tiempo para garantizar los plazos de entrega del producto</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul><p><br></p>",
          "publicTitle": "Programador React Front-end ",
          "publishedOnJobBoard": "2022-11-29T18:47:20.000Z"
        }
      ]
    },
    {
      "jobId": "90702",
      "createdDate": "2022-09-28T02:45:02.000Z",
      "updatedDate": "2022-11-29T18:25:11.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-29T18:25:10.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 406,
          "name": "Next.js"
        },
        {
          "id": 158,
          "name": "Typescript"
        }
      ],
      "optionalSkills": [
        {
          "id": 86,
          "name": "PostgreSQL"
        },
        {
          "id": 836,
          "name": "AWS DevOps"
        }
      ],
      "role": "Full-stack developer",
      "companySize": 15,
      "publicTitle": "Full-Stack Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-28T23:01:36.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-28T23:01:36.000Z"
        }
      ]
    },
    {
      "jobId": "89577",
      "createdDate": "2022-09-20T13:16:06.000Z",
      "updatedDate": "2022-11-29T18:05:43.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-11-29T18:05:42.000Z",
      "requiredSkills": [
        {
          "id": 93,
          "name": "JavaScript"
        },
        {
          "id": 308,
          "name": "HTML5"
        },
        {
          "id": 107,
          "name": "CSS"
        },
        {
          "id": 2031,
          "name": "React"
        }
      ],
      "optionalSkills": [],
      "role": "Frontend engineer",
      "companySize": 35,
      "publicTitle": "Front-End Engineer",
      "isActive": false,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-22T01:25:20.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-22T01:25:20.000Z"
        }
      ]
    },
    {
      "jobId": "89082",
      "createdDate": "2022-09-15T21:47:40.000Z",
      "updatedDate": "2022-12-02T16:06:00.000Z",
      "industry": "Healthtech",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-29T17:57:41.000Z",
      "requiredSkills": [
        {
          "id": 29,
          "name": "Java"
        },
        {
          "id": 26,
          "name": "Go/Golang"
        },
        {
          "id": 680,
          "name": "Spring Framework"
        }
      ],
      "optionalSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 54,
          "name": "DevOps"
        }
      ],
      "role": "Backend - Lead Engineer",
      "companySize": 2,
      "publicTitle": "Lead Back-End Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-18T21:19:12.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-18T21:19:12.000Z"
        }
      ]
    },
    {
      "jobId": "88128",
      "createdDate": "2022-09-09T21:00:02.000Z",
      "updatedDate": "2022-12-01T19:54:40.000Z",
      "industry": "Healthtech",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-29T17:12:57.000Z",
      "requiredSkills": [
        {
          "id": 111,
          "name": "REST/RESTful APIs"
        },
        {
          "id": 433,
          "name": "AWS"
        },
        {
          "id": 114,
          "name": "SQL"
        },
        {
          "id": 2031,
          "name": "React"
        }
      ],
      "optionalSkills": [
        {
          "id": 29,
          "name": "Java"
        }
      ],
      "role": "Fullstack Developer",
      "companySize": 2,
      "publicTitle": "Full-Stack Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-12T17:55:07.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-12T17:55:07.000Z"
        }
      ]
    },
    {
      "jobId": "87678",
      "createdDate": "2022-09-07T17:07:31.000Z",
      "updatedDate": "2022-11-29T16:08:48.000Z",
      "industry": "Other",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-11-29T16:08:48.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 122,
          "name": "Vue.js"
        }
      ],
      "optionalSkills": [
        {
          "id": 107,
          "name": "CSS"
        },
        {
          "id": 93,
          "name": "JavaScript"
        },
        {
          "id": 606,
          "name": "NPM Packages Development"
        },
        {
          "id": 258,
          "name": "Git"
        }
      ],
      "role": "Frontend Developer",
      "companySize": 10,
      "publicTitle": "Front-End Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-08T19:32:29.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-08T19:32:29.000Z"
        }
      ]
    },
    {
      "jobId": "87264",
      "createdDate": "2022-09-02T15:23:43.000Z",
      "updatedDate": "2022-11-29T16:03:08.000Z",
      "industry": "Education",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-11-29T16:03:08.000Z",
      "requiredSkills": [
        {
          "id": 424,
          "name": "Drupal"
        },
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 311,
          "name": "SASS"
        },
        {
          "id": 258,
          "name": "Git"
        },
        {
          "id": 120,
          "name": "Node.js"
        },
        {
          "id": 284,
          "name": "jQuery"
        }
      ],
      "optionalSkills": [
        {
          "id": 114,
          "name": "SQL"
        },
        {
          "id": 165,
          "name": "PHP"
        }
      ],
      "role": "Frontend Drupal React Developer",
      "companySize": 10,
      "publicTitle": "Front-End Developer",
      "isActive": false,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-05T19:02:43.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-05T19:02:43.000Z"
        }
      ]
    },
    {
      "jobId": "85410",
      "createdDate": "2022-08-22T03:18:23.000Z",
      "updatedDate": "2022-11-29T16:02:12.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-29T16:02:12.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 91,
          "name": "C#"
        }
      ],
      "optionalSkills": [
        {
          "id": 305,
          "name": "Microservices"
        },
        {
          "id": 836,
          "name": "AWS DevOps"
        }
      ],
      "role": "Lead Software Engineer",
      "companySize": 47,
      "publicTitle": "Full-Stack Developer",
      "isActive": false,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-05T07:34:09.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-05T07:34:09.000Z"
        }
      ]
    },
    {
      "jobId": "86931",
      "createdDate": "2022-08-31T18:25:47.000Z",
      "updatedDate": "2022-11-29T15:58:17.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-29T15:58:17.000Z",
      "requiredSkills": [
        {
          "id": 120,
          "name": "Node.js"
        },
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 282,
          "name": "Express.js"
        },
        {
          "id": 116,
          "name": "MongoDB"
        }
      ],
      "optionalSkills": [
        {
          "id": 871,
          "name": "Axio"
        }
      ],
      "role": "Senior Developer",
      "companySize": 11,
      "publicTitle": "Senior Software Developer",
      "isActive": false,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-01T20:05:29.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-01T20:05:30.000Z"
        }
      ]
    },
    {
      "jobId": "86922",
      "createdDate": "2022-08-31T18:13:30.000Z",
      "updatedDate": "2022-11-29T15:57:33.000Z",
      "industry": "Entertainment",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-29T15:54:21.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 313,
          "name": "XHTML"
        },
        {
          "id": 107,
          "name": "CSS"
        },
        {
          "id": 93,
          "name": "JavaScript"
        }
      ],
      "optionalSkills": [],
      "role": "Web Developer - React",
      "companySize": 100,
      "publicTitle": "Web Developer",
      "isActive": false,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-01T19:46:13.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-09-01T19:46:13.000Z"
        }
      ]
    },
    {
      "jobId": "93015",
      "createdDate": "2022-10-14T20:51:36.000Z",
      "updatedDate": "2022-11-28T23:11:18.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-11-28T23:11:16.000Z",
      "requiredSkills": [
        {
          "id": 20,
          "name": "Python"
        },
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 125,
          "name": "API Design"
        }
      ],
      "optionalSkills": [
        {
          "id": 120,
          "name": "Node.js"
        },
        {
          "id": 26,
          "name": "Go/Golang"
        },
        {
          "id": 61,
          "name": "Kubernetes"
        },
        {
          "id": 433,
          "name": "AWS"
        },
        {
          "id": 25,
          "name": "Django"
        },
        {
          "id": 31,
          "name": "Flask"
        },
        {
          "id": 242,
          "name": "Airflow"
        },
        {
          "id": 76,
          "name": "ElasticSearch"
        },
        {
          "id": 352,
          "name": "Apache"
        }
      ],
      "role": "Fullstack Engineer",
      "companySize": 50,
      "publicTitle": "Full-Stack Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-10-17T16:45:23.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-10-17T16:45:23.000Z"
        }
      ]
    },
    {
      "jobId": "94383",
      "createdDate": "2022-10-25T23:16:36.000Z",
      "updatedDate": "2022-11-28T23:04:19.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-28T23:04:16.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 120,
          "name": "Node.js"
        }
      ],
      "optionalSkills": [
        {
          "id": 1013,
          "name": "AWS Lambda"
        },
        {
          "id": 114,
          "name": "SQL"
        },
        {
          "id": 125,
          "name": "API Design"
        }
      ],
      "role": "Full-stack developer",
      "companySize": 3,
      "publicTitle": "Full-Stack Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-10-27T22:42:06.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-10-27T22:42:06.000Z"
        }
      ]
    },
    {
      "jobId": "94401",
      "createdDate": "2022-10-25T23:21:37.000Z",
      "updatedDate": "2022-11-28T23:03:51.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-28T23:03:49.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 387,
          "name": "HTML"
        }
      ],
      "optionalSkills": [
        {
          "id": 1123,
          "name": "UI Design"
        }
      ],
      "role": "Front-end developer",
      "companySize": 3,
      "publicTitle": "Front-End developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-10-26T18:49:42.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-10-26T18:49:42.000Z"
        }
      ]
    },
    {
      "jobId": "91206",
      "createdDate": "2022-09-30T17:02:28.000Z",
      "updatedDate": "2022-12-01T08:55:30.000Z",
      "industry": "Finance",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-28T19:43:44.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 121,
          "name": "Redux"
        },
        {
          "id": 2101,
          "name": "React Hooks"
        },
        {
          "id": 93,
          "name": "JavaScript"
        },
        {
          "id": 158,
          "name": "Typescript"
        }
      ],
      "optionalSkills": [],
      "role": "Senior Software Engineer - React JS with Payment Experience",
      "companySize": 251,
      "publicTitle": "Senior Software Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-10-03T11:31:25.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-10-03T11:31:25.000Z"
        }
      ]
    },
    {
      "jobId": "97560",
      "createdDate": "2022-11-18T18:49:36.000Z",
      "updatedDate": "2022-11-29T18:00:26.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-28T19:14:37.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 109,
          "name": ".NET"
        }
      ],
      "optionalSkills": [],
      "role": "Technical Lead (React + .Net)",
      "companySize": 1000,
      "publicTitle": "Technical Lead",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa crescendo rapidamente, que está desenvolvendo incríveis soluções e serviços de ensino online, está procurando contratar um Tech Lead. O candidato selecionado será responsável pelo design, otimização, manutenção e solução de problemas das aplicações web. A empresa está criando infraestrutura digital e soluções tecnológicas capazes de tornar a tecnologia voltada à educação mais eficiente e financeiramente acessível. Ela conseguiu arrecadar mais de US$8,5 milhões em investimentos até agora. Essa é uma ótima oportunidade para desenvolvedores brasileiros experientes e que gostariam de um trabalho home office internacional.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Desenvolver, otimizar, manter e solucionar problemas com os aplicativos web</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Adaptar-se a mudanças no ambiente e ser capaz de alcançar bons resultados com o mínimo de requisitos definidos</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Liderar e coordenar as atividades de desenvolvimento de software</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Realizar revisões de código e de design simples junto aos desenvolvedores</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Codificar recursos e otimizações complexas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Trabalhar lado a lado com os desenvolvedores e a equipe de controle de qualidade (QA) para criar produtos de qualidade</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Colaborar com os outros membros das equipes de engajamento</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Demonstrar e aplicar sólidos conhecimentos sobre sistemas complexos de informação e organizações tecnológicas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Realizar outras tarefas que lhe sejam atribuídas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Elaborar o design, desenvolver e documentar aplicativos web .NET e APIs</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Oferecer liderança técnica e orientação para uma equipe Agile de desenvolvedores</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Construir componentes reutilizáveis e bibliotecas front-end para uso futuro</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Ao menos 5 anos de experiência relevante como desenvolvedor de software</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Histórico comprovado entregando projetos complexos</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência prática implementando, testando e realizando o debug de projetos, bem como participando de revisões em equipe de código/projetos</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vasta experiência com React.js</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com React e Redux</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 5 anos de experiência desenvolvendo várias aplicações baseadas no framework .NET</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimentos sobre desenvolvimento React.js, JavaScript, e de APIs REST</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência trabalhando com fluxos de trabalho React.js populares (como Flux ou Redux)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com jQuery, ASP.NET MVC, WebAPI, .Net Core, WCF, C#, MySQL e SQL Server 2015 (ou mais novo)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre otimização de performance e segurança de aplicativo para bancos de dados e aplicações</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com revisões de código, de arquitetura e funcionais</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência oferecendo estimativas para grandes projetos</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre implantação (builds .NET, IIS)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência trabalhando com microsserviços será vista como diferencial</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Sólida compreensão sobre tecnologias web e desenvolvimento de aplicativos web</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com gerenciamento de builds &amp; amp, bem como com implementação CI/CD usando TFS ou Jenkins</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre desenvolvimento front-end de aplicações web com React</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre a nuvem AWS ou Azure</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Capacidade de explicar protocolos e processos para a gerência de equipes e outros usuários</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Amplas habilidades de solução de problemas e análise de causa raíz</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Capacidade comprovada de discrição, sólida tomada de decisões e confidencialidade</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vontade e possibilidade de trabalhar com horários flexíveis</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Excelente comunicação verbal e escrita em inglês</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Sólidas habilidades de apresentação, facilitação e negociação</span></li></ul>",
          "publicTitle": "Tech Lead",
          "publishedOnJobBoard": "2022-11-28T19:17:22.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa de rápido crecimiento que desarrolla soluciones y servicios de aprendizaje en línea de primera clase busca un líder técnico. El candidato seleccionado para este trabajo remoto se encargará de diseñar, mejorar, mantener y corregir aplicaciones basadas en la web. La empresa está desarrollando una infraestructura digital y soluciones tecnológicas que hacen que la tecnología educativa sea más eficiente y fácil de usar. Ha conseguido recaudar de forma segura más de 8,5 millones de dólares de financiación hasta el momento.&nbsp;</span></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li><span style=\"background-color: transparent;\">Desarrollar, mejorar, solucionar problemas y mantener aplicaciones basadas en la web</span></li><li><span style=\"background-color: transparent;\">Ser adaptable a entornos cambiantes y capaz de tener éxito con unos requisitos mínimos definidos</span></li><li><span style=\"background-color: transparent;\">Dirigir y coordinar las actividades de desarrollo de software</span></li><li><span style=\"background-color: transparent;\">Llevar a cabo revisiones de código y de diseño de bajo nivel de los desarrolladores</span></li><li><span style=\"background-color: transparent;\">Codificar mejoras y funciones complejas</span></li><li><span style=\"background-color: transparent;\">Trabajar en estrecha colaboración con los desarrolladores y el equipo de control de QA para crear productos de calidad</span></li><li><span style=\"background-color: transparent;\">Colaborar con otros miembros de los equipos de trabajo</span></li><li><span style=\"background-color: transparent;\">Demostrar y aplicar una sólida comprensión de los sistemas de información complejos y de las organizaciones tecnológicas</span></li><li><span style=\"background-color: transparent;\">Realizar otras tareas asignadas&nbsp;</span></li><li><span style=\"background-color: transparent;\">Diseñar, desarrollar y documentar aplicaciones web basadas en .NET y desarrollo de API</span></li><li><span style=\"background-color: transparent;\">Proporcionar liderazgo técnico y orientación a un equipo ágil de desarrolladores</span></li><li><span style=\"background-color: transparent;\">Construir componentes reutilizables y librerías Front-end para su uso futuro</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requisitos:</strong></p><ul><li><span style=\"background-color: transparent;\">Licenciatura o Maestría en Ingeniería, Informática (o experiencia equivalente)</span></li><li><span style=\"background-color: transparent;\">Al menos 5 años o más de experiencia relevante como ingeniero de software&nbsp;</span></li><li><span style=\"background-color: transparent;\">Historial comprobado de entrega de proyectos complejos</span></li><li><span style=\"background-color: transparent;\">Experiencia práctica implementando, probando y depurando proyectos y participando en revisiones de código/proyectos en equipo</span></li><li><span style=\"background-color: transparent;\">Amplia experiencia con React.js</span></li><li><span style=\"background-color: transparent;\">Un mínimo de 5 años o más de experiencia en el desarrollo de diversas aplicaciones basadas en el framework .NET</span></li><li><span style=\"background-color: transparent;\">Fluidez en el desarrollo de React.js, JavaScript y REST API</span></li><li><span style=\"background-color: transparent;\">Experiencia con flujos de trabajo populares de React.js (como Flux o Redux)</span></li><li><span style=\"background-color: transparent;\">Experiencia en jQuery, ASP.NET MVC, WebAPI, .Net Core, WCF, C#, MySQL y SQL Server 2015 y superior</span></li><li><span style=\"background-color: transparent;\">Se requieren conocimientos de mejora del rendimiento de bases de datos y aplicaciones y de seguridad de aplicaciones</span></li><li><span style=\"background-color: transparent;\">Experiencia previa en revisiones de código, de arquitectura y funcionales</span></li><li><span style=\"background-color: transparent;\">Experiencia en proporcionar estimaciones para mejoras y proyectos importantes</span></li><li><span style=\"background-color: transparent;\">Conocimiento de implementación - .NET builds, IIS</span></li><li><span style=\"background-color: transparent;\">Se prefiere la experiencia trabajando con microservicios</span></li><li><span style=\"background-color: transparent;\">Sólida comprensión de las tecnologías web y el desarrollo de aplicaciones web</span></li><li><span style=\"background-color: transparent;\">Experiencia en la gestión de la construcción &amp; amp; implementación de CI/CD utilizando TFS o Jenkins</span></li><li><span style=\"background-color: transparent;\">Conocimiento de desarrollo de aplicaciones web Front-end usando React</span></li><li><span style=\"background-color: transparent;\">Conocimiento de AWS Cloud o Azure Cloud&nbsp;</span></li><li><span style=\"background-color: transparent;\">Capacidad para explicar el protocolo y los procesos con la gestión del equipo y todos los usuarios</span></li><li><span style=\"background-color: transparent;\">Sólidas habilidades de resolución de problemas y análisis de la causa raíz</span></li><li><span style=\"background-color: transparent;\">Capacidad comprobada para usar la discreción, tomar decisiones acertadas y mantener la confidencialidad</span></li><li><span style=\"background-color: transparent;\">Disposición y capacidad para trabajar en horarios flexibles</span></li><li><span style=\"background-color: transparent;\">Excelente comunicación oral y escrita en inglés</span></li><li><span style=\"background-color: transparent;\">Buenas habilidades de presentación, facilitación y negociación</span></li></ul><p><br></p>",
          "publicTitle": "Líder Técnico",
          "publishedOnJobBoard": "2022-11-28T19:17:22.000Z"
        }
      ]
    },
    {
      "jobId": "98082",
      "createdDate": "2022-11-25T18:44:09.000Z",
      "updatedDate": "2022-11-30T21:28:28.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-28T18:33:00.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 120,
          "name": "Node.js"
        },
        {
          "id": 857,
          "name": "AWS Amplify"
        },
        {
          "id": 2101,
          "name": "React Hooks"
        }
      ],
      "optionalSkills": [],
      "role": "Full-stack Developer",
      "companySize": 1,
      "publicTitle": "Full-Stack Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Uma empresa em rápido crescimento, que atualmente opera em modo furtivo, está procurando contratar um Programador Full Stack. O candidato selecionado trabalhará em colaboração com outros membros da equipe no desenvolvimento do aplicativo web. A empresa está revolucionando a indústria de apostas esportivas, facilitando a aposta em várias partidas em andamento. Esta é uma excelente oportunidade para programadores brasileiros, apaixonados pela indústria esportiva e que desejam causar impacto no setor, conquistarem uma vaga de trabalho remoto em uma empresa internacional.</span></p><p><strong style=\"color: rgb(29, 28, 29); background-color: transparent;\">&nbsp;&nbsp;</strong></p><p><strong style=\"color: rgb(29, 28, 29); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Aprender sobre a codebase e introduzir novos recursos conforme necessário</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Garantir documentação de código limpo, oferecendo comentários e seguindo as melhores práticas do Git</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Criar componentes que funcionem bem na web e em dispositivos mobile</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Identificar e resolver problemas à medida que surjam</span></li></ul><p><strong style=\"color: rgb(29, 28, 29); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">3 anos de experiência relevante como programador</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Experiência comprovada com React, Node e AWS Amplify</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Proficiência no desenvolvimento front-end</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Apaixonado por esportes, streaming e sistemas de dados para pontuação</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Experiência com desenvolvimento orientado a testes</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Fortes habilidades com JavaScript, TypeScript e CSS</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Fluência em inglês, verbal e escrito</span></li></ul>",
          "publicTitle": "Programador Full Stack",
          "publishedOnJobBoard": "2022-11-28T18:32:59.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa de rápido crecimiento que actualmente opera en modo oculto busca un desarrollador Full Stack. El candidato seleccionado para este trabajo remoto colaborará con otros miembros del equipo para contribuir al desarrollo de la aplicación web. La empresa está revolucionando la industria de las apuestas deportivas facilitando la posibilidad de apostar en numerosos partidos en curso. Esta es una gran oportunidad para desarrolladores apasionados por la industria del deporte y que quieran dejar una huella.</span></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Aprender sobre el código base e introducir nuevas características según sea necesario</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Asegurar una documentación de código limpia, comentarios y etiqueta Git</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Crear componentes que funcionen bien tanto en la web como en el móvil</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Solucionar los problemas que surjan</span></li></ul><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Licenciatura/Máster en Ingeniería, Informática (o experiencia equivalente)</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Al menos 3 o más años de experiencia relevante como ingeniero de software</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia demostrable trabajando con React, Node y AWS Amplify</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Dominio del desarrollo front-end&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Apasionado por los deportes, el streaming y los sistemas de datos de puntuación</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia con el desarrollo dirigido por pruebas</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Fuertes habilidades en JavaScript, Typescript y CSS</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Fluidez en el idioma inglés</span></li></ul><p><br></p>",
          "publicTitle": "Desarrollador Full Stack",
          "publishedOnJobBoard": "2022-11-28T18:32:59.000Z"
        }
      ]
    },
    {
      "jobId": "98046",
      "createdDate": "2022-11-23T21:55:12.000Z",
      "updatedDate": "2022-12-01T13:42:21.000Z",
      "industry": "Transportation",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-11-25T03:28:27.000Z",
      "requiredSkills": [
        {
          "id": 433,
          "name": "AWS"
        },
        {
          "id": 20,
          "name": "Python"
        },
        {
          "id": 93,
          "name": "JavaScript"
        },
        {
          "id": 63,
          "name": "CI/CD"
        }
      ],
      "optionalSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 121,
          "name": "Redux"
        }
      ],
      "role": "AWS Development Operations Engineer - Offshore",
      "companySize": 1000,
      "publicTitle": "Operations Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa listada na NASDAQ, que fabrica veículos elétricos de primeira classe e soluções de transporte, está procurando contratar um Engenheiro de Operações de Desenvolvimento AWS. O candidato selecionado será responsável por escrever códigos e realizar unit tests rapidamente, sem comprometer a qualidade. A empresa está determinada a construir soluções duradouras que reduzam a pegada de carbono e construam um mundo mais verde. Esta posição requer alguma sobreposição com o fuso horário PT e é uma excelente oportunidade para desenvolvedores brasileiros em busca de uma vaga de trabalho remoto. A empresa conseguiu arrecadar com sucesso mais de US$10 bilhões em investimentos até agora.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Automatizar processos de CI/CD para projetos no GitLab para AWS usando o AWS Amplify</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Executar e selecionar operações e acionar as compilações</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Automatizar a execução do script na AWS para oferecer suporte a implantações de produção no-touch</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Trabalhar em colaboração com desenvolvedores front-end e direcionar o produto</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 3 anos de experiência relevante como engenheiro de software</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Ampla experiência com AWS Services, Cloudwatch, DynamoDB e Gitlab</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vasta experiência com JavaScript, OpenSearch, Python e Shell</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">É recomendável ter experiência com React e Redux</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Um mínimo de 3 anos de experiência trabalhando em serviços da AWS, incluindo DynamoDB, AWS Lambda, Amplify, S3 e SNS</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Mostrar-se seguro para escrever Shell Scripts</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre Bitbucket será uma vantagem</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Fluência em inglês, verbal e escrito</span></li></ul>",
          "publicTitle": "Engenheiro de Operações de Desenvolvimento AWS",
          "publishedOnJobBoard": "2022-11-25T03:28:19.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"color: rgb(0, 0, 0);\">Una empresa que cotiza en NASDAQ que fabrica vehículos eléctricos y soluciones de transporte de clase mundial está buscando un ingeniero de operaciones de desarrollo AWS. El candidato seleccionado para este trabajo remoto será responsable de escribir códigos y realizar pruebas unitarias rápidamente sin comprometer la calidad. La empresa está decidida a crear soluciones duraderas que reduzcan la huella de carbono y construyan un mundo más verde. Ha logrado asegurar con éxito más de 10.000 millones de dólares en financiación hasta el momento. Esta posición requiere cierta superposición con la zona horaria del PT.</span></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Automatizar los procesos de CI/CD para proyectos en GitLab a AWS usando AWS Amplify</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Realizar y seleccionar operaciones y activar las compilaciones</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Automatizar la ejecución de secuencias de comandos en AWS para admitir implementaciones de producción sin contacto</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Trabajar en colaboración con los desarrolladores front-end e impulsar la dirección del producto</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li><span style=\"background-color: transparent;\">Licenciatura / Maestría en Ingeniería, Ciencias de la Computación (o experiencia equivalente)</span></li><li><span style=\"background-color: transparent;\">Al menos más de 3 años de experiencia relevante como ingeniero de software</span></li><li><span style=\"background-color: transparent;\">Amplia experiencia con los servicios de AWS, Cloudwatch, DynamoDB y Gitlab</span></li><li><span style=\"background-color: transparent;\">Experiencia prolífica con JavaScript, OpenSearch, Python y Shell</span></li><li><span style=\"background-color: transparent;\">Es bueno tener experiencia con React y Redux.</span></li><li><span style=\"background-color: transparent;\">Un mínimo de más de 3 años de experiencia trabajando en servicios de AWS, incluidos DynamoDB, AWS Lambda, Amplify, S3 y SNS</span></li><li><span style=\"background-color: transparent;\">Saber cómo escribir scripts de Shell</span></li><li><span style=\"background-color: transparent;\">El conocimiento de Bitbucket sería útil</span></li><li><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul><p><br></p>",
          "publicTitle": "Ingeniero de Operaciones de Desarrollo AWS",
          "publishedOnJobBoard": "2022-11-25T03:28:19.000Z"
        }
      ]
    },
    {
      "jobId": "98037",
      "createdDate": "2022-11-23T21:45:43.000Z",
      "updatedDate": "2022-11-25T19:49:46.000Z",
      "industry": "Transportation",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-25T03:24:17.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 433,
          "name": "AWS"
        },
        {
          "id": 121,
          "name": "Redux"
        }
      ],
      "optionalSkills": [
        {
          "id": 857,
          "name": "AWS Amplify"
        },
        {
          "id": 1013,
          "name": "AWS Lambda"
        },
        {
          "id": 232,
          "name": "DynamoDB"
        },
        {
          "id": 20,
          "name": "Python"
        },
        {
          "id": 159,
          "name": "GraphQL"
        }
      ],
      "role": "Software Engineer - Offshore",
      "companySize": 1000,
      "publicTitle": "Front-end Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Uma empresa bem estabelecida, que está determinada a criar soluções de transporte melhores e mais amigáveis para o meio-ambiente, está procurando contratar um Engenheiro de Software. O engenheiro será responsável por entender os requisitos, criar soluções relevantes e entregar funcionalidades. A empresa, listada na NASDAQ, está usando tecnologia de ponta para construir veículos elétricos que contribuam para o controle da pegada de carbono do mundo. Até agora, ela conseguiu arrecadar mais de US$10 bilhões em investimentos. Essa vaga de trabalho remoto requer certa sobreposição com o fuso horário PT e é uma ótima oportunidade para engenheiros de software brasileiros que gostariam de se juntar a uma grande empresa internacional comprometida com um futuro sustentável.</span></p><p><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">&nbsp;</span></p><p><strong style=\"background-color: transparent; color: rgb(14, 16, 26);\">Responsabilidades:</strong></p><ul><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Construir, testar e lançar aplicações complexas de missão crítica para aplicativos de software internos e externos</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Elaborar o design e implementar código e algoritmos de front-end com ReactJS e Redux</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Colaborar com equipes interfuncionais, incluindo a de controle de qualidade, gerentes técnicos de produto e equipes de design UI/UX, para definir os recursos da aplicação</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Garantir que boas práticas de arquitetura de software sejam seguidas por toda a equipe</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Contribuir ativamente para a revisão de código e de design</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Realizar unit tests e entregar software de alta qualidade</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(14, 16, 26);\">Requisitos:</strong></p><ul><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Ao menos 3 anos de experiência relevante como engenheiro de software</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Vasta experiência com React, Redux e AWS</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Será vantajoso possuir experiência com DynamoDB, GraphQL, Cloud Watch e AppSync</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Experiência com AWS Amplify, Python e AWS Lambda será vista como um diferencial</span></li><li><span style=\"background-color: transparent; color: rgb(14, 16, 26);\">Fluência em inglês, verbal e escrito</span></li></ul>",
          "publicTitle": "Engenheiro de Software",
          "publishedOnJobBoard": "2022-11-24T21:38:58.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"color: rgb(0, 0, 0);\">Una empresa bien establecida que está decidida a construir soluciones de transporte mejores y más respetuosas con el medio ambiente está buscando un ingeniero de software. El candidato seleccionado será responsable de comprender los requisitos, crear soluciones relevantes y brindar funcionalidad. La empresa que cotiza en NASDAQ está utilizando tecnología de punta para fabricar vehículos eléctricos innovadores que ayudarán a controlar la huella de carbono. Hasta el momento, ha logrado asegurar con éxito más de 10 mil millones de dólares en financiamiento. Esta posición de trabajo remoto requiere cierta superposición con la zona horaria del PT.</span></p><p><br></p><p><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Crear, probar y lanzar aplicaciones complejas de misión crítica para aplicaciones de software internas y externas</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Diseñar e implementar código frontend y algoritmos usando ReactJS y Redux</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Colaborar con equipos multifuncionales, incluidos equipos de pruebas de control de calidad, gestión técnica de productos y diseño de UI/UX, para definir las características de la aplicación</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Asegurarte de que se sigan las prácticas de arquitectura de software en todo el equipo</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Contribuir activamente a las revisiones de código y diseño</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Realizar pruebas unitarias para entregar software de alta calidad</span></li></ul><p><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">Requerimientos:</strong></p><ul><li><span style=\"background-color: transparent;\">Licenciatura / Maestría en Ingeniería, Ciencias de la Computación (o experiencia equivalente)</span></li><li><span style=\"background-color: transparent;\">Al menos más de 3 años de experiencia relevante como ingeniero de software</span></li><li><span style=\"background-color: transparent;\">Amplia experiencia con React, Redux y AWS</span></li><li><span style=\"background-color: transparent;\">Es bueno tener experiencia con DynamoDB, GraphQL, Cloud Watch y AppSync</span></li><li><span style=\"background-color: transparent;\">Se prefiere la experiencia con AWS Amplify, Python y AWS Lambda</span></li><li><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul>",
          "publicTitle": "Ingeniero de Software",
          "publishedOnJobBoard": "2022-11-24T21:38:58.000Z"
        },
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-24T21:39:25.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-24T21:39:25.000Z"
        },
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-24T21:44:42.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-24T21:44:42.000Z"
        }
      ]
    },
    {
      "jobId": "97929",
      "createdDate": "2022-11-23T18:18:36.000Z",
      "updatedDate": "2022-12-01T15:21:58.000Z",
      "industry": "Hospitality",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-25T03:16:37.000Z",
      "requiredSkills": [
        {
          "id": 2050,
          "name": "Python(Django)"
        },
        {
          "id": 2031,
          "name": "React"
        }
      ],
      "optionalSkills": [],
      "role": "Full Stack React/Python(Django) (6)",
      "companySize": 4,
      "publicTitle": "Full-Stack Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa sediada nos EUA, que está desenvolvendo um aplicativo de incentivo a empregados que encoraje sua produtividade e longevidade dentro da empresa, está procurando contratar um Desenvolvedor Full Stack. O desenvolvedor será responsável pela codebase e trabalhará com equipes interfuncionais para entregar produtos. A tecnologia avançada da empresa está ajudando outros negócios a alcançarem suas metas de performance, sua maior produtividade e a criar equipes de longa duração. A empresa conseguiu arrecadar mais de US$18 milhões durante sua rodada da Série A de investimentos. Essa é uma ótima vaga de emprego remoto para desenvolvedores brasileiros procurando por um trabalho home office internacional.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Participar dos plantões rotativos diários da equipe</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Escrever código de alta performance, fácil manutenção, fácil leitura e bem documentado</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Trabalhar de maneira independente em uma equipe dinâmica e veloz</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Criar novos aplicativos para a empresa e otimizar os já existentes</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Ao menos 3 anos de experiência relevante como desenvolvedor full stack</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vasta experiência com Python (Django) e React</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Inglês fluente, verbal e escrito</span></li></ul>",
          "publicTitle": "Desenvolvedor Full Stack",
          "publishedOnJobBoard": "2022-11-25T03:17:46.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa con sede en EE. UU. que está desarrollando una innovadora aplicación de incentivos para empleados con el fin de fomentar la productividad y la longevidad del personal está buscando un desarrollador Full Stack. El candidato seleccionado para este trabajo remoto será responsable del código base y trabajará con equipos multifuncionales para entregar los productos. La tecnología avanzada de la compañía está ayudando a las empresas a alcanzar los objetivos de rendimiento, lograr la máxima productividad y crear equipos duraderos. La empresa ha conseguido asegurar más de 18 millones de dólares durante su ronda de financiación de serie A.</span></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li><span style=\"background-color: transparent;\">Participar en la rotación de guardia del equipo diariamente</span></li><li><span style=\"background-color: transparent;\">Escribir código mantenible y de alto rendimiento que sea fácil de leer y esté bien documentado</span></li><li><span style=\"background-color: transparent;\">Trabajar de forma independiente en un equipo dinámico y de ritmo rápido</span></li><li><span style=\"background-color: transparent;\">Crear nuevas aplicaciones para la empresa y mejorar las existentes</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requisitos:</strong></p><ul><li><span style=\"background-color: transparent;\">Licenciatura o Maestría en Ingeniería, Informática (o experiencia equivalente)</span></li><li><span style=\"background-color: transparent;\">Al menos 3 años o más de experiencia relevante como desarrollador Full Stack</span></li><li><span style=\"background-color: transparent;\">Amplia experiencia con Python (Django) y React</span></li><li><span style=\"background-color: transparent;\">Dominio del inglés oral y escrito&nbsp;</span></li></ul><p><br></p>",
          "publicTitle": "Desarrollador Full Stack",
          "publishedOnJobBoard": "2022-11-25T03:17:46.000Z"
        },
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-25T03:18:09.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-25T03:18:09.000Z"
        }
      ]
    },
    {
      "jobId": "97839",
      "createdDate": "2022-11-23T14:55:57.000Z",
      "updatedDate": "2022-12-01T19:54:55.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": 20,
      "publishedOnJobBoard": "2022-11-25T02:59:52.000Z",
      "requiredSkills": [
        {
          "id": 93,
          "name": "JavaScript"
        },
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 406,
          "name": "Next.js"
        }
      ],
      "optionalSkills": [
        {
          "id": 614,
          "name": "Figma"
        }
      ],
      "role": "Front-end Engineer",
      "companySize": 11,
      "publicTitle": "Front-End Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Uma empresa em rápido crescimento, que fornece serviços de código aberto avançados para pesquisa e desenvolvimento de tratamentos de queda de cabelo, está procurando contratar um Programador Front-end. O programador será responsável por analisar e melhorar o desempenho atual do aplicativo. A empresa está empregando tecnologias robustas de blockchain para mobilizar o conhecimento, os recursos e a visão necessários para acabar com a queda de cabelo em todo o mundo. Esta vaga de trabalho remoto será inicialmente uma oportunidade de meio período com a possibilidade de uma transição futura para período integral, sendo ideal para programadores brasileiros que desejam dar o pontapé inicial em suas carreiras internacionais.</span></p><p><strong style=\"color: rgb(29, 28, 29); background-color: transparent;\">&nbsp;</strong></p><p><strong style=\"color: rgb(29, 28, 29); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Examinar os objetivos do produto e escrever a documentação relevante para desenvolver integrações e novos recursos</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Identificar, consertar bugs e resolver problemas do consumidor</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Auxiliar a equipe na definição do escopo, estimativa e planejamento do projeto</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Colaborar com equipes multifuncionais em toda a empresa</span></li></ul><p><strong style=\"color: rgb(29, 28, 29); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">3 anos de experiência relevante como programador</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Ampla experiência com JavaScript, React e Next.js</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Excelentes habilidades organizacionais e de gerenciamento de projetos</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Forte experiência com desenvolvimento de UI/UX</span></li><li><span style=\"color: rgb(29, 28, 29); background-color: transparent;\">Fluência em inglês, verbal e escrito</span></li></ul>",
          "publicTitle": "Programador Front-end",
          "publishedOnJobBoard": "2022-11-25T02:59:49.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa de rápido crecimiento que ofrece servicios avanzados de investigación y desarrollo de código abierto para tratamientos contra la caída del cabello busca un ingeniero front-end. El candidato de trabajo remoto se encargará de analizar y mejorar el rendimiento actual de la aplicación. La empresa está empleando sólidas tecnologías de cadena de bloques para movilizar la experiencia, los recursos y la visión necesarios para poner fin a la caída del cabello en todo el mundo. Este puesto será inicialmente a tiempo parcial con la posibilidad de pasar a tiempo completo en el futuro.</span></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Examinar los objetivos del producto y redactar la documentación pertinente para desarrollar integraciones y nuevas funciones</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Identificar y corregir errores y problemas de los consumidores</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Asistir al equipo en la determinación del alcance, la estimación y la planificación de los proyectos</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Colaborar con los equipos multifuncionales de toda la empresa</span></li></ul><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Licenciatura/Máster en Ingeniería, Informática (o experiencia equivalente)</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Al menos 3 o más años de experiencia relevante como ingeniero front-end</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Amplia experiencia con JavaScript, React y Next.js</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Excelentes habilidades de organización y gestión de proyectos</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Sólida experiencia en el desarrollo de UI/UX</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Fluidez en el inglés oral y escrito</span></li></ul><p><br></p>",
          "publicTitle": "Ingeniero Front-end",
          "publishedOnJobBoard": "2022-11-25T02:59:49.000Z"
        }
      ]
    },
    {
      "jobId": "97659",
      "createdDate": "2022-11-21T16:04:38.000Z",
      "updatedDate": "2022-12-02T15:37:46.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-11-24T12:37:05.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 19,
          "name": "Ruby"
        },
        {
          "id": 282,
          "name": "Express.js"
        }
      ],
      "optionalSkills": [],
      "role": "React + Ruby Developer",
      "companySize": 11,
      "publicTitle": "Software Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa dinâmica que é a maior organização socialista dos Estados Unidos, com mais de 90 mil membros, está procurando contratar um Desenvolvedor React e Ruby. O candidato selecionado será responsável por determinar quais endpoints estão gerando problemas para os consumidores. Os membros dessa organização lutam por mudanças que capacitam os trabalhadores usando uma série de estratégias, incluindo ação legislativa e ação direta. Essa é uma ótima vaga React e Ruby para desenvolvedores brasileiros em busca de um trabalho remoto e que gostariam de utilizar suas habilidades numa causa capaz que visa construir um mundo melhor.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Analisar o desempenho dos endpoints REST/Ruby on Rails existentes para geração de relatórios</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Identificar quais endpoints estão causando problemas para os clientes</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Resolver os problemas encontrados na plataforma, como tempos de resposta lentos, mensagens de erro, timeouts, problemas de relatório, etc.</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Corrigir os erros de relatório identificados, aprimorar o código do controlador Ruby on Rails e otimizar as consultas SQL</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Modificar a infraestrutura Aurora/MySQL em coordenação com a equipe SRE, se necessário, para otimizar seu desempenho</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 3 anos de experiência relevante como desenvolvedor de software</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimento sobre React</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com Ruby</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Familiaridade com Express.js</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Fluência em inglês, verbal e escrito</span></li></ul>",
          "publicTitle": "Desenvolvedor React e Ruby",
          "publishedOnJobBoard": "2022-11-23T00:50:08.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa de ritmo rápido, que con más de 90.000 miembros es la mayor organización socialista de los Estados Unidos, está buscando un Desarrollador React+Ruby. El candidato seleccionado será responsable de determinar qué puntos finales están generando problemas para los consumidores. Los miembros de la organización luchan por cambios que empoderen a los trabajadores utilizando una serie de estrategias, incluyendo la acción legislativa y la acción directa.</span></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Analizar el rendimiento de los puntos finales REST/Ruby On Rails existentes para la elaboración de informes</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Identificar qué puntos finales están causando problemas a los clientes&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Resolver los problemas encontrados en la plataforma como tiempos de respuesta lentos, mensajes de error, tiempos de espera, problemas con los informes, etc.&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Corregir los errores de informes identificados, mejorar el código del controlador Ruby on Rails y optimizar las consultas SQL</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Modificar potencialmente la infraestructura Aurora/MySQL en coordinación con el equipo SRE si es necesario para mejorar el rendimiento</span></li></ul><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Licenciatura/Máster en Ingeniería, Informática (o experiencia equivalente)</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Al menos 3 o más años de experiencia relevante como desarrollador de software</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Conocimiento de React</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia en Ruby</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Familiaridad con Express.js</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul>",
          "publicTitle": "Desarrollador React + Ruby ",
          "publishedOnJobBoard": "2022-11-23T00:50:08.000Z"
        }
      ]
    },
    {
      "jobId": "97812",
      "createdDate": "2022-11-22T18:44:32.000Z",
      "updatedDate": "2022-12-01T19:54:31.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-23T20:12:29.000Z",
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
          "id": 485,
          "name": "Jest"
        }
      ],
      "optionalSkills": [
        {
          "id": 433,
          "name": "AWS"
        }
      ],
      "role": "FE React Engineer",
      "companySize": 11,
      "publicTitle": "Front-End React Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa do Vale do Silício, que oferece uma plataforma abrangente para ajudar outras organizações a gerenciarem seus negócios de sinalização, impressão ou roupas, está procurando contratar um Desenvolvedor React Front-end. O desenvolvedor será responsável por construir interfaces de usuário atraentes e sistemas escaláveis, confiáveis e seguros. A empresa oferece a seus clientes uma solução de gerenciamento de empregos, CRM e POS feita com os seus negócios em mente. Essa vaga React requer ao menos 5 horas de sobreposição com o fuso horário PST e é uma ótima oportunidade para desenvolvedores brasileiros em busca de um trabalho home office remunerado em dólar.&nbsp;</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Trabalhar com uma pequena equipe de desenvolvedores elaborando ótimas experiências de usuário e construindo aplicações web incríveis</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Garantir que os recursos sejam entregues de maneira eficiente e dentro do prazo</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Participar da revisão e do design da arquitetura</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Trabalhar junto aos desenvolvedores back-end para definir ativamente a direção do produto</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Ao menos 5 anos de experiência relevante como desenvolvedor front-end</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Histórico comprovado de entrega de projetos de software e sucesso no lançamento de aplicativos</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 3 anos de experiência profissional com React e TypeScript</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Conhecimentos avançados sobre a escrita de testes para React (React Testing Library + Jest)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com integração contínua</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência comprovada trabalhando remotamente com uma equipe distribuída&nbsp;</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Ser detalhista com cada linha de código, cada unit test e cada mensagem de commit</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Sentir-se confortável com ciclos de desenvolvimento rápidos e prazos apertados</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Sentir-se confortável com um ambiente colaborativo e de comunicação aberta entre equipes</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Sólidas habilidades técnicas de design e desenvolvimento</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Excelentes habilidades de comunicação e resolução de problemas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Inglês fluente, verbal e escrito</span></li></ul>",
          "publicTitle": "Desenvolvedor React Front-end",
          "publishedOnJobBoard": "2022-11-23T20:13:28.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"color: rgb(0, 0, 0);\">Una compañía con sede en Silicon Valley que ofrece a las empresas una plataforma integral para ayudarlas a administrar su tienda de letreros, impresiones o prendas de vestir está buscando un ingeniero React Front-end. El candidato seleccionado será responsable de crear hermosas interfaces de usuario, así como sistemas escalables, seguros y confiables. La empresa ofrece a los clientes una solución de gestión de trabajos, CRM y POS basada en la web que está diseñada para sus negocios. Esta posición de trabajo remoto requiere más de 5 horas de superposición con la zona horaria PST.</span></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Trabajar con un pequeño equipo de desarrolladores de primer nivel que están diseñando experiencias de usuario y creando aplicaciones realmente excelentes para la web</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Asegurarte de que las características se entreguen de manera eficiente y a tiempo</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Participar en la revisión y el diseño arquitectónico</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Trabajar en colaboración con los desarrolladores de back-end e impulsar activamente la dirección del producto</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li><span style=\"background-color: transparent;\">Licenciatura / Maestría en Ingeniería, Ciencias de la Computación (o experiencia equivalente)</span></li><li><span style=\"background-color: transparent;\">Al menos 5 años o más de experiencia relevante como ingeniero front-end</span></li><li><span style=\"background-color: transparent;\">Historial comprobado de software de envío y aplicaciones lanzadas con éxito</span></li><li><span style=\"background-color: transparent;\">Un mínimo de más de 3 años de experiencia comercial usando React y TypeScript</span></li><li><span style=\"background-color: transparent;\">Conocimiento avanzado de escritura de pruebas para React (React Testing Library + Jest)</span></li><li><span style=\"background-color: transparent;\">Experiencia con integración continua</span></li><li><span style=\"background-color: transparent;\">Experiencia laboral comprobada dentro de un equipo distribuido en un entorno remoto</span></li><li><span style=\"background-color: transparent;\">Gran atención a los detalles en cada línea de código, cada prueba unitaria y cada mensaje de confirmación</span></li><li><span style=\"background-color: transparent;\">Cómodo con ciclos de desarrollo rápidos y cronogramas ajustados</span></li><li><span style=\"background-color: transparent;\">Cómodo con la colaboración y la comunicación abierta entre equipos distribuidos</span></li><li><span style=\"background-color: transparent;\">Fuertes habilidades técnicas de diseño y desarrollo</span></li><li><span style=\"background-color: transparent;\">Excelentes habilidades de resolución de problemas y comunicación</span></li><li><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul><p><br></p>",
          "publicTitle": "Ingeniero React Front-end",
          "publishedOnJobBoard": "2022-11-23T20:13:28.000Z"
        },
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-23T20:15:13.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-23T20:15:13.000Z"
        }
      ]
    },
    {
      "jobId": "97767",
      "createdDate": "2022-11-22T05:56:06.000Z",
      "updatedDate": "2022-11-25T13:17:50.000Z",
      "industry": "Healthcare",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-23T19:30:54.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 120,
          "name": "Node.js"
        },
        {
          "id": 158,
          "name": "Typescript"
        },
        {
          "id": 160,
          "name": "React Native"
        }
      ],
      "optionalSkills": [
        {
          "id": 246,
          "name": "RDBMS"
        },
        {
          "id": 249,
          "name": "Cloud"
        },
        {
          "id": 54,
          "name": "DevOps"
        }
      ],
      "role": "Founding Full Stack Engineer",
      "companySize": 1,
      "publicTitle": "Founding Full-Stack Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa sediada nos EUA, que está facilitando o rápido acesso a serviços de saúde mental de alta qualidade, está procurando contratar um Desenvolvedor Full Stack. O desenvolvedor será responsável por elaborar, desenvolver, revisar e testar o aplicativo. Através de suas soluções científicas baseadas em dados e de uma rede de terapeutas a empresa possibilita a prestação de serviços de saúde mental totalmente personalizados. Ela arrecadou mais de $5,5 milhões durante sua rodada de investimentos Semente. Essa é uma excelente oportunidade para desenvolvedores brasileiros que estão em busca de uma vaga de trabalho remoto remunerada em dólar.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Avaliar e julgar os produtos a fim de desenvolver recursos novos e iterativos</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Examinar e corrigir bugs e outros problemas do consumidor</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Auxiliar na definição do escopo do projeto, sua estimativa, planejamento e com a estruturação de roadmaps</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Colaborar com equipes multifuncionais de toda a empresa</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 3 anos de experiência relevante como desenvolvedor full stack</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 5 anos de experiência com tecnologias front-end modernas, incluindo React e React Native</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 5 anos de experiência com tecnologias back-end modernas, como Node.js</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 5 anos de experiência com linguagens de programação modernas, como TypeScript</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 5 anos de experiência com Sistemas de Gerenciamento de Banco de Dados, de preferência RDBMS</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 3 anos de experiência com Cloud e DevOps</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 1 ano de experiência em uma startup em estágio pré-Semente ou Semente</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Deve ser capaz de comunicar os principais conceitos técnicos fluentemente</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Fluência em inglês, verbal e escrito</span></li></ul>",
          "publicTitle": "Desenvolvedor Full Stack",
          "publishedOnJobBoard": "2022-11-23T19:30:55.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa estadounidense que facilita la rápida accesibilidad a servicios de salud mental de alta calidad está buscando un Ingeniero Fundador Full Stack. El candidato será responsable de diseñar, desarrollar, revisar y probar la aplicación. La prestación de servicios de salud mental totalmente personalizados es posible gracias a las soluciones científicas basadas en datos de la empresa y a una red de terapeutas. La empresa ha conseguido financiación por más de 5,5 millones de dólares durante su ronda Seed.</span></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Valorar y evaluar los productos para desarrollar características nuevas e iterativas</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Examinar y corregir los errores y los problemas de los consumidores</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Ayudar a determinar el alcance del proyecto, estimar, planificar y estructurar las hojas de ruta&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Colaborar con los equipos multifuncionales de toda la empresa</span></li></ul><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Licenciatura/Máster en Ingeniería, Informática (o experiencia equivalente)</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Al menos 3 o más años de experiencia relevante como ingeniero full-stack&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Un mínimo de 5 o más de experiencia en tecnologías modernas de front-end, incluyendo React/React Native&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Un mínimo de 5 o más años de experiencia en tecnologías modernas de back-end, como Node.js&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Un mínimo de 5 o más años de experiencia en lenguajes de programación modernos, como TypeScript&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Un mínimo de 5 o más años de experiencia en sistemas de gestión de bases de datos - preferiblemente RDBMS&nbsp;</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Un mínimo de 3 o más años de experiencia en Cloud y DevOps</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Un mínimo de 1 experiencia en start-ups pre-seed o seed-stage</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Debe tener la capacidad de comunicar conceptos técnicos básicos con fluidez</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul><p><br></p>",
          "publicTitle": "Ingeniero Fundador Full Stack",
          "publishedOnJobBoard": "2022-11-23T19:30:55.000Z"
        }
      ]
    },
    {
      "jobId": "97578",
      "createdDate": "2022-11-18T19:46:45.000Z",
      "updatedDate": "2022-12-01T15:27:38.000Z",
      "industry": "Manufacturing",
      "customerWeeklyHourEngagement": 40,
      "publishedOnJobBoard": "2022-11-23T00:42:58.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 165,
          "name": "PHP"
        },
        {
          "id": 93,
          "name": "JavaScript"
        },
        {
          "id": 258,
          "name": "Git"
        },
        {
          "id": 114,
          "name": "SQL"
        }
      ],
      "optionalSkills": [
        {
          "id": 555,
          "name": "ERP Development"
        }
      ],
      "role": "Front End-focused Full Stack Engineer",
      "companySize": 251,
      "publicTitle": "Full-Stack Engineer ",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa listada na NASDAQ, com o objetivo de estabelecer o negócio de manufatura industrial mais eficiente do mundo, está procurando contratar um Desenvolvedor Full Stack com foco em Front-end. O candidato selecionado será responsável por liderar os esforços de criação dos componentes front-end. Devido à vasta base de conhecimentos e histórico de sucesso da empresa, ela é capaz de oferecer a seus parceiros soluções customizadas e inteiramente únicas. Essa vaga de trabalho remoto requer certa sobreposição com o fuso horário CST e é excelente para desenvolvedores brasileiros que querem investir em sua carreira internacional.&nbsp;</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Liderar o desenvolvimento de componentes front-end</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Estabelecer interações baseadas no usuário através de um framework de arquitetura front-end eficiente</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Garantir a funcionalidade das soluções em múltiplos canais e codificar para diversas plataformas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Elaborar o design e criar APIs e serviços RESTful</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Desenvolver bancos de dados, aplicativos e servidores adicionais</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Ao menos 3 anos de experiência relevante como desenvolvedor de software</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vastas habilidades com React e Git</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com Vanilla JavaScript</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com PHP e SQL</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com o back-end de sistemas ERP será um diferencial</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Fluência em inglês</span></li></ul>",
          "publicTitle": "Desenvolvedor Full Stack com foco em Front-end",
          "publishedOnJobBoard": "2022-11-22T17:27:24.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Una empresa que cotiza en el NASDAQ cuyo objetivo es establecer los negocios de fabricación industrial más eficientes del mundo está buscando un ingeniero Full Stack enfocado en el Front-End. El mismo será responsable de liderar la creación del componente Front-end. Como resultado de la amplia base de conocimientos y la trayectoria probada de la empresa, puede proporcionar a sus socios soluciones únicas y a medida. Este puesto de trabajo remoto requiere coincidir con la zona horaria central.&nbsp;</span></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Asumir el liderazgo en el desarrollo del componente Front-end</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Establecer interacciones basadas en el usuario utilizando un marco de arquitectura Front-end eficaz</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Asegurar la funcionalidad a través de muchos canales y el código para múltiples plataformas</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Crear y diseñar APIs y servicios RESTful</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Desarrollar bases de datos, aplicaciones y servidores adicionales</span></li></ul><p class=\"ql-align-justify\"><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Licenciatura/Máster en Ingeniería, Informática (o experiencia equivalente)</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Al menos 3 o más años de experiencia relevante como ingeniero de software</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Habilidades prolíficas en React y Git</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia con Vanilla JavaScript</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia con PHP y SQL</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Experiencia con sistemas ERP Back-end es un plus</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul><p><br></p>",
          "publicTitle": "Ingeniero Full Stack Enfocado en el Front-end",
          "publishedOnJobBoard": "2022-11-22T17:27:24.000Z"
        },
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-22T17:28:07.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-22T17:28:07.000Z"
        }
      ]
    },
    {
      "jobId": "97758",
      "createdDate": "2022-11-22T00:03:37.000Z",
      "updatedDate": "2022-11-26T00:20:50.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-22T21:41:39.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 120,
          "name": "Node.js"
        }
      ],
      "optionalSkills": [],
      "role": "Full Stack Engineer (part of Founding Team)",
      "companySize": 1,
      "publicTitle": "Full-Stack Engineer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa em rápido crescimento, que desenvolve produtos inovadores para ajudar os negócios B2C e B2B a fornecer experiências de usuário digitais (online e mobile) satisfatórias e eficientes, está procurando contratar um Programador Full Stack. O programador se juntará à equipe fundadora e será responsável por configurar a arquitetura com base nos requisitos de negócios. Com a ajuda dos algoritmos proprietários da empresa, organizações podem se expandir rapidamente e entender o modelo de transição de um aplicativo e os comportamentos de seus usuários. Esta posição requer entre 4 e 6 horas, ou mais, de sobreposição com o fuso horário PST e é uma excelente oportunidade para programadores brasileiros que estão em busca de uma vaga de trabalho remoto.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Trabalhar em colaboração com a liderança para resolver problemas complexos</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Avaliar e identificar soluções para problemas desafiadores</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Manter-se atualizado sobre os avanços mais recentes em linguagens de programação e aplicações web</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Fazer sugestões criativas e altamente escaláveis para garantir a eficácia da plataforma</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Pelo menos 3 anos de experiência relevante como programador full stack</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Entre 3 e 5 anos de experiência com desenvolvimento web</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vasta experiência educacional com CS/ML/Estatística</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Mostrar-se um profissional versátil e com capacidade de aprender rapidamente</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Fluência em inglês, verbal e escrito</span></li></ul>",
          "publicTitle": "Programador Full Stack",
          "publishedOnJobBoard": "2022-11-22T21:41:35.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"color: rgb(0, 0, 0);\">Una empresa de rápido crecimiento que desarrolla productos innovadores para ayudar a las empresas B2C y B2B a proporcionar experiencias de usuario móviles y en línea digitales, satisfactorias y eficientes está buscando un ingeniero Full Stack. El candidato seleccionado para este trabajo remoto se unirá al equipo fundador y estará a cargo de configurar la arquitectura en función de los requisitos comerciales. Con la ayuda de los algoritmos patentados de la compañía, las empresas pueden expandirse rápidamente mientras comprenden el modelo de transición de una aplicación y los comportamientos de los usuarios de la aplicación. Esta posición requiere de 4 a 6 horas o más de superposición con la zona horaria PST.</span></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Trabajar en colaboración con el rol de liderazgo para abordar problemas complejos</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Evaluar e identificar soluciones a problemas desafiantes</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Mantenerte al día con los últimos avances en lenguajes de programación y aplicaciones web</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Hacer sugerencias creativas y altamente escalables para asegurar la efectividad de la plataforma</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li><span style=\"background-color: transparent;\">Licenciatura / Maestría en Ingeniería, Ciencias de la Computación (o experiencia equivalente)</span></li><li><span style=\"background-color: transparent;\">Al menos más de 3 años de experiencia relevante como ingeniero Full Stack</span></li><li><span style=\"background-color: transparent;\">Un mínimo de 3 a 5 años o más de experiencia en desarrollo web</span></li><li><span style=\"background-color: transparent;\">Sólidos antecedentes educativos en CS/ML/Estadísticas</span></li><li><span style=\"background-color: transparent;\">Versátil y con capacidad para aprender rápidamente</span></li><li><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul><p><br></p>",
          "publicTitle": "Ingeniero Full Stack",
          "publishedOnJobBoard": "2022-11-22T21:41:35.000Z"
        }
      ]
    },
    {
      "jobId": "61758",
      "createdDate": "2022-04-06T20:55:44.000Z",
      "updatedDate": "2022-11-21T17:19:41.000Z",
      "industry": "Other",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-21T17:19:41.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 406,
          "name": "Next.js"
        },
        {
          "id": 116,
          "name": "MongoDB"
        },
        {
          "id": 159,
          "name": "GraphQL"
        },
        {
          "id": 120,
          "name": "Node.js"
        }
      ],
      "optionalSkills": [
        {
          "id": 183,
          "name": "Stripe"
        }
      ],
      "role": "Full Stack Developer",
      "companySize": 1,
      "publicTitle": "Full-Stack Developer",
      "isActive": false,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-21T17:19:37.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": null,
          "publicTitle": null,
          "publishedOnJobBoard": "2022-11-21T17:19:37.000Z"
        }
      ]
    },
    {
      "jobId": "97623",
      "createdDate": "2022-11-18T21:19:59.000Z",
      "updatedDate": "2022-11-22T14:15:41.000Z",
      "industry": "Technology",
      "customerWeeklyHourEngagement": null,
      "publishedOnJobBoard": "2022-11-21T17:09:33.000Z",
      "requiredSkills": [
        {
          "id": 2031,
          "name": "React"
        },
        {
          "id": 30,
          "name": "Ruby on Rails"
        }
      ],
      "optionalSkills": [
        {
          "id": 284,
          "name": "jQuery"
        },
        {
          "id": 61,
          "name": "Kubernetes"
        },
        {
          "id": 55,
          "name": "Docker"
        },
        {
          "id": 2139,
          "name": "Google API"
        },
        {
          "id": 70,
          "name": "GCP"
        },
        {
          "id": 86,
          "name": "PostgreSQL"
        }
      ],
      "role": "FE React Developer",
      "companySize": 11,
      "publicTitle": "Front-End React Developer",
      "isActive": true,
      "jobLanguageContent": [
        {
          "languageId": 2,
          "abbreviation": "PT",
          "language": "Portuguese",
          "publicDescription": "<p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Uma empresa sediada nos EUA, que está desenvolvendo um software de gerenciamento para escritórios de advocacia que ajude na administração, identificação de processos duplicados e análise comercial, está procurando contratar um Desenvolvedor React Front-end. O desenvolvedor será responsável por construir, manter e implementar recursos de ponta a ponta. A empresa está desenvolvendo uma tecnologia moderna de gerenciamento de casos para ajudar escritórios de advocacia a ganharem mais disputas de maneira eficiente. Essa é uma vaga React excelente para desenvolvedores brasileiros que gostam de aprender e querem construir uma carreira lucrativa em um trabalho home office junto a veteranos da indústria.</span></p><p><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">&nbsp;</span></p><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Responsabilidades:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Codificar e criar a aplicação da empresa com React</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Criar um web design bem estruturado que leve a interfaces de usuário robustas</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Escrever código robusto e de alta qualidade segundo as melhores práticas de desenvolvimento de software da indústria</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Orientar membros juniores da equipe e mostrar a eles as práticas padrão de desenvolvimento</span></li></ul><p><strong style=\"color: rgb(14, 16, 26); background-color: transparent;\">Requisitos:</strong></p><ul><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Bacharelado ou Mestrado em Engenharia ou Ciência da Computação (ou experiência equivalente)</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Ao menos 3 anos de experiência relevante como desenvolvedor de software</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vasta experiência com React&nbsp;</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Vasta experiência com Ruby on Rails</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Será vantajoso possuir experiência com Kubernetes e Docker junto à GCP</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com jQuery e APIs será vista como um diferencial</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Experiência com Stimulus será benéfico</span></li><li><span style=\"color: rgb(14, 16, 26); background-color: transparent;\">Inglês fluente, verbal e escrito</span></li></ul>",
          "publicTitle": "Desenvolvedor React Front-end",
          "publishedOnJobBoard": "2022-11-21T17:10:58.000Z"
        },
        {
          "languageId": 3,
          "abbreviation": "ES",
          "language": "Spanish",
          "publicDescription": "<p class=\"ql-align-justify\"><span style=\"color: rgb(0, 0, 0);\">Una empresa con sede en los EE. UU. que está desarrollando un software de gestión de bufetes de abogados para abordar la gestión de casos, los procesos duplicados y el análisis empresarial está buscando un desarrollador Front-end React. El programador estará a cargo de crear, mantener e implementar funciones de principio a fin. La empresa está desarrollando tecnología moderna de gestión de casos que ayudará a los bufetes de abogados a ganar más casos de manera eficiente. Esta es una oportunidad de trabajo remoto increíble para los desarrolladores que están ansiosos por aprender y construir una carrera lucrativa mientras trabajan con expertos de la industria.</span></p><p><br></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Responsabilidades:</strong></p><ul><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Codificar y crear la aplicación de la empresa en React</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Crear un diseño web bien estructurado para crear interfaces de usuario robustas</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Escribir código robusto y de alta calidad que se adhiera a las mejores prácticas de la industria de la ingeniería</span></li><li class=\"ql-align-justify\"><span style=\"background-color: transparent;\">Asesorar a ingenieros </span>junior<span style=\"background-color: transparent;\"> y guiarlos a través de prácticas de desarrollo estándar</span></li></ul><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Requerimientos:</strong></p><ul><li><span style=\"background-color: transparent;\">Licenciatura / Maestría en Ingeniería, Ciencias de la Computación (o experiencia equivalente)</span></li><li><span style=\"background-color: transparent;\">Al menos más de 3 años de experiencia relevante como ingeniero de software</span></li><li><span style=\"background-color: transparent;\">Prolífica experiencia en React</span></li><li><span style=\"background-color: transparent;\">Amplia experiencia en Ruby on Rails</span></li><li><span style=\"background-color: transparent;\">Es bueno tener experiencia con Kubernetes y Docker con GCP</span></li><li><span style=\"background-color: transparent;\">La experiencia previa con jQuery y API es una ventaja</span></li><li><span style=\"background-color: transparent;\">Preferiblemente experiencia con Estímulo</span></li><li><span style=\"background-color: transparent;\">Dominio del inglés</span></li></ul><p><br></p>",
          "publicTitle": "Desarrollador Front-end React",
          "publishedOnJobBoard": "2022-11-21T17:10:58.000Z"
        }
      ]
    }
  ];

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
  private selectedTypes: Set<string> = new Set();

  constructor(private http: HttpClient) { }

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

  getJobList(): Observable<Job[]> {
    return this.http.get<Job[]>(this.getJobListUrl());
  }

  private getJobListUrl() {
    return "https://works-api.vercel.app/api/getJobList?sortBy=publishedOnJobBoard%2Cdesc&skillIds=158&limit=30&locale=en";
  }

  getJobDetail(): Observable<JobDetail> {
    return this.http.get<JobDetail>(this.getJobDetailUrl());
  }

  private getJobDetailUrl() {
    return "https://works-api.vercel.app/api/getJobDetail?id=98460";
  }
}
