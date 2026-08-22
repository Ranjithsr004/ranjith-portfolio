export const PROFILE = {
  name: 'Ranjith Subramanian',
  role: 'Software Engineer | Java Backend Developer',
  tagline: 'Building scalable backend systems, microservices and cloud-ready applications.',
  email: 'ranjith.subramanian@example.com',
  linkedin: 'https://www.linkedin.com/in/ranjith-subramanian',
  github: 'https://github.com/ranjith-subramanian',
  portfolio: 'https://ranjith-subramanian.dev',
  resumePath: '/Ranjith-Subramanian-Resume.pdf',
};

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Tech' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'contact', label: 'Contact' },
];

export const ABOUT_SKILLS = [
  'Java 17 / 21',
  'Spring Boot',
  'Microservices',
  'REST APIs',
  'PostgreSQL',
  'Oracle',
  'AWS ECS / EC2',
  'CI/CD',
  'Liquibase',
  'Grafana',
  'OpenSearch',
  'Perl-to-Java Migration',
];

type TechItem = { name: string; note: string; featured?: boolean };
type TechGroup = {
  label: string;
  icon: string;
  primary: boolean;
  items: TechItem[];
};

export const TECH_GROUPS: TechGroup[] = [
  {
    label: 'Backend',
    icon: 'Server',
    primary: true,
    items: [
      { name: 'Java 17 / 21', note: 'Core', featured: true },
      { name: 'Spring Boot', note: 'Primary', featured: true },
      { name: 'Spring Framework', note: '' },
      { name: 'Microservices', note: '' },
      { name: 'REST APIs', note: '' },
      { name: 'Hibernate / JPA', note: '' },
      { name: 'Maven / Gradle', note: '' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    icon: 'Cloud',
    primary: false,
    items: [
      { name: 'AWS ECS', note: '' },
      { name: 'AWS EC2', note: '' },
      { name: 'CI/CD Pipelines', note: '' },
      { name: 'Docker', note: '' },
      { name: 'Liquibase', note: '' },
    ],
  },
  {
    label: 'Databases',
    icon: 'Database',
    primary: false,
    items: [
      { name: 'PostgreSQL', note: '' },
      { name: 'Oracle', note: '' },
      { name: 'SQL', note: '' },
      { name: 'Database Migrations', note: '' },
    ],
  },
  {
    label: 'Tools',
    icon: 'Wrench',
    primary: false,
    items: [
      { name: 'Grafana', note: 'Monitoring' },
      { name: 'OpenSearch', note: 'Logging' },
      { name: 'Git', note: '' },
      { name: 'Jira', note: '' },
      { name: 'Postman', note: '' },
    ],
  },
  {
    label: 'Frontend',
    icon: 'Layout',
    primary: false,
    items: [
      { name: 'HTML5', note: '' },
      { name: 'CSS3', note: '' },
      { name: 'JavaScript', note: '' },
      { name: 'React', note: 'Basics' },
    ],
  },
];

export const EXPERIENCE = [
  {
    current: true,
    role: 'Software Engineer',
    company: 'CitiusTech Healthcare Technology',
    client: 'Client: Athenahealth',
    period: 'July 2024 — Present',
    summary:
      'Full-cycle Java backend engineering for healthcare platform services — from development and migration to deployment and production support.',
    points: [
      'Java / Spring Boot microservices development',
      'Perl-to-Java migration of legacy services',
      'REST API development and integration',
      'Business logic implementation',
      'Bug fixing and code stabilization',
      'Production troubleshooting and incident support',
      'AWS ECS deployments',
      'CI/CD pipeline builds and releases',
      'Liquibase-driven database changes',
      'Grafana and OpenSearch monitoring',
      'End-to-end development, deployment and production support',
    ],
  },
];

export const PROJECTS = [
  {
    name: 'Distributed Job Scheduler',
    description:
      'A Spring Boot microservice for scheduling and distributing background jobs across workers, with retry policies and observability hooks.',
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/ranjith-subramanian',
    demo: '',
  },
  {
    name: 'REST API Template',
    description:
      'Production-ready Spring Boot starter with layered architecture, Liquibase migrations, global exception handling and OpenAPI docs.',
    tech: ['Java 17', 'Spring Boot', 'Liquibase', 'PostgreSQL', 'OpenAPI'],
    github: 'https://github.com/ranjith-subramanian',
    demo: '',
  },
  {
    name: 'Perl-to-Java Migration Toolkit',
    description:
      'Tooling and reference patterns for migrating legacy Perl services to idiomatic Java/Spring Boot while preserving behavior.',
    tech: ['Java', 'Spring Boot', 'Maven', 'CI/CD'],
    github: 'https://github.com/ranjith-subramanian',
    demo: '',
  },
  {
    name: 'Observability Lab',
    description:
      'A sandbox wiring Grafana dashboards and OpenSearch log pipelines to a sample microservice for end-to-end monitoring.',
    tech: ['Grafana', 'OpenSearch', 'Spring Boot', 'Docker'],
    github: 'https://github.com/ranjith-subramanian',
    demo: '',
  },
];

export const ENGINEERING_ITEMS = [
  {
    title: 'Open-Source & Tooling',
    body: 'Building reusable Spring Boot starters, API templates and migration tooling — shared to help other backend teams move faster.',
    tags: ['Spring Boot', 'Tooling', 'DX'],
  },
  {
    title: 'Backend Deep Dives',
    body: 'Studying JVM internals, concurrency patterns and distributed system design — translating theory into production-ready services.',
    tags: ['JVM', 'Concurrency', 'Distributed Systems'],
  },
  {
    title: 'Cloud & DevOps Practice',
    body: 'Hands-on with AWS ECS, CI/CD pipelines and Infrastructure-as-Code to ship and operate services reliably.',
    tags: ['AWS', 'CI/CD', 'Liquibase'],
  },
  {
    title: 'Continuous Learning',
    body: 'Tracking modern Java (17 / 21), observability with Grafana and OpenSearch, and clean architecture principles.',
    tags: ['Java 21', 'Observability', 'Architecture'],
  },
];

export const STATS = [
  { value: '2+', label: 'Years professional experience' },
  { value: '11+', label: 'Core technologies in production' },
  { value: 'E2E', label: 'Dev → deploy → support ownership' },
];
