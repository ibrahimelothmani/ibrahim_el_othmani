
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'fullstack' | 'cloud-devops';
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // Cloud & DevOps Projects (From Resume)
  {
    id: 'eks-microservices',
    title: 'Deploying microservices architecture on AWS EKS',
    description: 'Designed and deployed a scalable microservices-based application on AWS EKS using Terraform for Infrastructure as Code. Implemented CI/CD pipelines for automated builds and deployments, leveraging Docker, GitHub Actions, and Helm to manage Kubernetes manifests.',
    tags: ['AWS', 'EKS', 'Terraform', 'Docker', 'Helm', 'GitHub Actions', 'Kubernetes'],
    category: 'cloud-devops',
    imageUrl: '/assets/devops/WhatsApp Image 2025-10-18 at 17.33.14_9e7c8581.jpg',
    featured: true
  },
  {
    id: 'multicloud-iac',
    title: 'Automated Multi-Cloud IaC Setup',
    description: 'Built a fully automated multi-cloud provisioning pipeline to deploy infrastructure across AWS and Azure using Ansible and Terraform. Reduced manual setup time and improved environment consistency with parameterized playbooks and reusable Terraform modules.',
    tags: ['AWS', 'Azure', 'Ansible', 'Terraform', 'GitHub Actions', 'Linux'],
    category: 'cloud-devops',
    imageUrl: '/assets/devops/WhatsApp Image 2025-10-18 at 17.36.27_8a539f7d.jpg',
    featured: true
  },
  {
    id: 'monitoring-stack',
    title: 'Monitoring Stack Setup (Grafana + Prometheus + Loki)',
    description: 'Implemented a complete monitoring and observability solution for containerized workloads using Prometheus for metrics collection, Loki for log aggregation, and Grafana for visualization and alerting. Enhanced system reliability through centralized dashboards.',
    tags: ['Grafana', 'Prometheus', 'Loki', 'Docker', 'Kubernetes', 'Linux'],
    category: 'cloud-devops',
    imageUrl: '/assets/devops/WhatsApp Image 2025-10-18 at 17.36.27_f41b99db.jpg',
    featured: true
  },

  // Full Stack Projects (Existing)
  {
    id: 'job-search',
    title: 'Job Search Platform',
    description: 'A modern job search platform connecting employers and job seekers with advanced filtering, application tracking, and real-time notifications.',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
    category: 'fullstack',
    imageUrl: '/assets/img/jobs.png',
    githubUrl: 'https://github.com/ibrahimelothmani/SportsStore',
    featured: true
  },
  {
    id: 'ai-cybersec',
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced cybersecurity system using machine learning to detect and prevent threats, vulnerabilities, and unusual patterns.',
    tags: ['Python', 'Machine Learning', 'FastAPI'],
    category: 'fullstack',
    imageUrl: '/assets/img/web_analyzer.png',
    githubUrl: 'https://github.com/ibrahimelothmani/AI-Powered-Cybersecurity-Threat-Detection-System',
    featured: true
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'Personal finance application to track expenses, set budgets, and visualize spending habits through interactive charts.',
    tags: ['React', 'Firebase', 'Chart.js'],
    category: 'fullstack',
    imageUrl: '/assets/img/expense.png',
    githubUrl: 'https://github.com/ibrahimelothmani/Expense-Tracker',
    featured: false
  },
  {
    id: 'reeling-it',
    title: 'ReelingIt',
    description: 'A movie discovery platform featuring comprehensive movie browsing and personalized user experience with watchlists and ratings.',
    tags: ['Golang', 'Vanilla JS', 'PostgreSQL'],
    category: 'fullstack',
    imageUrl: '/assets/img/reelingIT.png',
    githubUrl: 'https://github.com/ibrahimelothmani/ReelingIt',
    featured: false
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A modern blogging platform with user authentication, content management, and responsive design for creating and sharing articles.',
    tags: ['Spring Boot', 'NextJS', 'JWT'],
    category: 'fullstack',
    imageUrl: '/assets/img/blog.png',
    githubUrl: 'https://github.com/ibrahimelothmani/Blog-Platform',
    featured: false
  },
  {
    id: 'car-rental',
    title: 'Car Rental',
    description: 'A comprehensive car rental management system with booking functionality, vehicle inventory tracking, and customer management features.',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL'],
    category: 'fullstack',
    imageUrl: '/assets/img/car.png',
    githubUrl: 'https://github.com/ibrahimelothmani/Car-Management',
    featured: false
  }
];
