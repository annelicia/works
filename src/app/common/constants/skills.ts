export interface Skill {
    id: string;
    label: string;
    skillIds: number[];
}

export const SKILLS = [
    {
        id: "1",
        label: "React",
        skillIds: [2031, 2101],
    }, {
        id: "3",
        label: "AWS",
        skillIds: [433, 1827, 857, 1012, 1403, 836, 234, 1013, 720],
    }, {
        id: "5",
        label: "Python",
        skillIds: [25, 20, 1466, 710, 1467, 2050],
    }, {
        id: "2",
        label: "Node.js",
        skillIds: [120],
    }, {
        id: "6",
        label: "Typescript",
        skillIds: [158],
    }, {
        id: "4",
        label: "JavaScript",
        skillIds: [452, 93, 598, 314],
    }, {
        id: "23",
        label: "SQL",
        skillIds: [1946, 1821, 2061, 1185, 1186, 114, 1595, 115, 470, 1436],
    }, {
        id: "18",
        label: "CSS",
        skillIds: [107, 597, 309, 591, 590, 589, 592, 594],
    }, {
        id: "7",
        label: "Java",
        skillIds: [2068, 567, 800, 29, 1688, 1609, 89],
    }, {
        id: "24",
        label: "HTML",
        skillIds: [387, 588, 308, 313],
    }, {
        id: "9",
        label: "Docker",
        skillIds: [55],
    }, {
        id: "13",
        label: "Kubernetes",
        skillIds: [61],
    }, {
        id: "8",
        label: "PostgreSQL",
        skillIds: [86],
    }, {
        id: "10",
        label: "React Native",
        skillIds: [160],
    }, {
        id: "11",
        label: "GraphQL",
        skillIds: [159],
    }, {
        id: "12",
        label: "MongoDB",
        skillIds: [116],
    }, {
        id: "14",
        label: "PHP",
        skillIds: [939, 358, 165, 2087, 2049],
    }, {
        id: "15",
        label: "Go/Golang",
        skillIds: [2096, 26],
    }, {
        id: "16",
        label: "Ruby on Rails",
        skillIds: [30],
    }, {
        id: "20",
        label: "Angular",
        skillIds: [2036, 1855, 1873, 1397],
    }, {
        id: "21",
        label: "DevOps",
        skillIds: [836, 1943, 54],
    },
];

export const SKILLS_MAP: Map<string, Skill> = SKILLS.reduce((prev, skill) => {
    prev.set(skill.id, skill);
    return prev;
}, new Map());