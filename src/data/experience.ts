export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: 'cloudsynk',
    role: 'Cloud & DevOps Engineer',
    company: 'CloudSynk',
    period: 'Jan 2023 – Present',
    description: [
      'Designed and automated end-to-end CI/CD pipelines using Jenkins and GitHub Actions, streamlining testing, deployment, and delivery.',
      'Managed multi-cloud infrastructure on AWS and Azure with Terraform and Ansible, enhancing scalability and reliability.',
      'Containerized and orchestrated microservices with Docker and Kubernetes, improving performance and maintainability.',
      'Strengthened system observability using Prometheus, Grafana, and the ELK Stack, and integrated SonarQube and Trivy for secure, compliant releases.',
      'Automated routine operations with Linux scripting, boosting team efficiency and deployment consistency.'
    ],
    logo: '/assets/exp/upwork.jpg' // Using placeholder/existing logo if specific one not available, or generic
  },
  {
    id: 'nexacore',
    role: 'Full-Stack Engineer',
    company: 'NexaCore Solutions',
    period: 'Feb 2021 – Aug 2022',
    description: [
      'Designed and implemented Spring Boot microservices (REST APIs, JWT auth, PostgreSQL integration).',
      'Built an Angular-based admin portal with role-based access and realtime charts.',
      'Created CI/CD pipelines (build, test, deploy) and automated database migrations.',
      'Improved API response time by 35% through query optimization and caching.'
    ],
    logo: '/assets/exp/ibh.png' // Using placeholder/existing logo
  }
];

export const education = [
  {
    id: 'bachelors',
    degree: "Bachelor’s Degree in Computer Science",
    school: 'Higher Institute of Technological Studies',
    period: 'Sep 2017 – Aug 2020',
    description: 'Nabeul, Tunisia',
    logo: '/assets/img/isetN.jpg'
  }
];
