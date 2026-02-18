const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'VS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Varun Rishwandh Sekar',
  role: "Software Engineer | Distributed Systems & ML",
  description:" Hi! I'm pursuing my Master's in Computer Science at Northeastern University (GPA 4.0). I have professional experience building scalable backend systems, distributed architectures, and AI-powered applications using Go, Java, and Python. I'm currently a Software Engineer Co-op at Dell Technologies. I will be graduating in Summer 2026 and am actively seeking full-time Software Engineer opportunities.",
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/varunrishwandh/',
    github: 'https://github.com/vaarunx',
    leetcode: "https://leetcode.com/u/vaarunx/"
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AudioSeek | 2nd Place, MLOps Expo @ Google Cambridge',
    description:
      'Architected microservices on GKE with Terraform IaC, implementing VPC isolation, Secret Manager integration, and horizontal pod autoscaling handling 500+ hours of audio processing workloads. Designed an event-driven pipeline orchestrating parallel transcription jobs with automated validation checks and failure recovery, achieving 95% accuracy. Built monitoring with MLFlow, implemented CI/CD via Cloud Build, and deployed across GKE and Cloud Run.',
    stack: ["GCP", "GKE", "Terraform", "Airflow", "Docker", "Python"],
    sourceCode: '#',
  },
  {
    name: 'Distributed AI Inference System',
    description:
      'Designed an event-driven inference platform processing 5000+ concurrent ML jobs using Go microservices on ECS Fargate with auto-scaling tied to SQS queue depth and fault-tolerant worker pools. Ran scalability experiments with k6/Locust demonstrating linear scaling to 16 workers, sub-second p95 latency under 200 req/s, and automatic recovery from 50% worker failure.',
    stack: ["Go", "AWS ECS", "SQS", "DynamoDB", "Docker", "k6"],
    sourceCode: '#',
  },
  {
    name: 'Real-Time Content Filtering',
    description:
      'A cross-browser extension that redacts or blurs NSFW content in the form of images and text displayed in the website. This is achieved by scraping the content and sending the content to an ExpressJS server where the content is passed onto a classifier model to determine if the content is Safe or NSFW.',
    stack: ["Javascript", "Flask", "ExpressJS", "Transformers", "CNN", "Azure"],
    sourceCode: 'https://github.com/vaarunx/realtime-censorship',
  },
  {
    name: 'Web-app to share Cooking recipes',
    description:
      'Designed and developed a Recipe sharing and food media platform for users to store and share recipes. Added CRUD operations and allowed the users to either share the recipes either publicly or to privately store them. Implemented an email authentication system and the ability to reset passwords through OTPs',
    stack: ["Python" , "Django" , "MySQL", "HTML", "CSS", "Javascript"],
    sourceCode: 'https://github.com/vaarunx/CookingApp',
  },
  {
    name: 'Popularity Sentiment Index of World Leaders',
    description:
      'This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning models',
    stack: ["Python", "Keras", "MongoDB", "NLP", "Transformers"],
    sourceCode: 'https://github.com/thuhinkhanna/PoliticalLikeability',
  },
  {
    name: 'My Locality!',
    description:
      'Designed and built a web app that gathers the user’s location and presents the nearby attractions or events along with the optimized route and timings from the location using Google API.',
    stack: ["Google Maps API", "Google Events API", "Firebase", "Django", "React"],
    sourceCode: 'https://github.com/vaarunx/mylocality',
  },
  {
    name: 'A Personal News Feed',
    description:
      'Developed a personalized newsletter that presents the top news in various categories and locations. Used news.org’s news API and other news agencies RSS feeds to search for news articles for each category, and stored them in a local database.',
    stack: ["React" , "FastAPI" , "MySQL"],
    sourceCode: 'https://github.com/thuhinkhanna/when-where-what',
  },
]

const publications = [
  {
    name: 'Hybrid Perception Analysis of World Leaders in Reddit using Sentiment Analysis',
    authors: ['Varun Rishwandh Sekar', 'Thuhin Khanna R', 'Suraj N', 'Priya Vijay' ],
    livePreview: 'https://doi.org/10.1109/AICAPS57044.2023.10074005',
    isPublication: true,
    
  }
]

const workExperience = [
  {
    name: 'Software Engineer Co-op',
    company: "Dell Technologies",
    work_years: 'Jan 2026 - June 2026',
    workExperiencePoints: [
      "Building the document ingestion backbone for an Agentic AI platform, enabling RAG-powered market research through automated extraction, summarization, chunking, and embedding stages across financial datasets.",
      "Architected a modular extraction framework for 7 data sources, replacing brute-force document scanning with targeted rule-based extractors in a plug-and-play architecture with legacy fallback for backward compatibility.",
      "Consolidated 8 sequential Airflow DAGs into a parent-child architecture with parallel execution, cutting pipeline redundancy and improving orchestration throughput across the entire ingestion layer."
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Software Engineer',
    company: "Mr. Cooper",
    work_years: 'Nov 2022 - August 2024',
    workExperiencePoints: [
      "Designed and shipped core backend services (rule engine, matching service, data APIs) for a loan audit platform that automated document verification using semantic similarity, cutting manual processing from weeks to hours.",
      "Architected a plugin-based system for dynamic document type configuration via database, eliminating 20+ hours/month of developer effort and reducing deployment cycles from days to minutes.",
      "Integrated LLMs for automated document annotation with human-in-the-loop verification controls, reducing dataset curation time by 70% while maintaining financial compliance standards.",
      "Drove test coverage from 0% to 70% across production services handling millions of documents monthly. Recognized as 'Rookie of the Year' out of 100+ new hires."
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Java Development Intern',
    company: "Ziroh Labs",
    work_years: 'Jan 2022 - March 2022',
    workExperiencePoints: [
      "Designed and developed a Java application to present historical facts based on date and location using Wikimedia and the Bing Search API.",
      "Implemented caching to avoid redundant API calls and secured data storage with 256-bit AES encryption."
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Backend Developer Intern',
    company: "Grey Scientific Labs",
    work_years: 'Aug 2021 – Dec 2021',
    workExperiencePoints: [
      "Built RESTful APIs using Django Rest Framework for a hospital platform enabling 500+ doctors to view patient records and annotate medical images, with passwordless JWT/OTP authentication and 99.9% uptime."
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  }
]

const education = [
  {
    name: 'Northeastern University',
    description: "Master's in Computer Science",
    gpa: "4.00 / 4 GPA",
    years: 'Sept 2024 - June 2026',
    isPublication: true,
    isEducation: true,
  },
  {
    name: 'Anna University',
    description: 'B.E in Computer Science and Engineering',
    gpa: "3.84 / 4 GPA",
    years: 'June 2019 - April 2023',
    isPublication: true,
    isEducation: true,
  }
]

const skills = {
  "Python": 90, 
  "Java": 80, 
  "JavaScript": 75,
  "C/C++": 60,
  "Go": 80,
  "Spring Boot": 80,
  "FastAPI": 90,
  "Django": 85,
  "Flask": 80,
  "Node.js": 75,
  "React": 70,
  "Unit Tests": 80,
  "AWS (ECS, SQS, DynamoDB, S3)": 80,
  "GCP (GKE, Cloud Run, Composer)": 80,
  "Docker": 85,
  "Kubernetes": 80,
  "Terraform": 75,
  "Airflow": 75,
  "Git": 80,
  "CI/CD": 75,
  "PostgreSQL": 80,
  "MySQL": 80,
  "MongoDB": 65,
  "BigQuery": 70,
  "Firebase": 65,
  "Machine / Deep Learning": 65,
  "CSS": 60,
  "HTML": 80,
  "Kotlin": 35,
  "Rust": 35,
  "Bash": 60,
  "Nginx": 60,
  "gRPC": 60,
  "GraphQL": 60
}

// const skills = [
//   // skills can be added or removed
//   // if there are no skills, Skills section won't show up
//   "Java",
//   "Python",
//   "C",
//   "JavaScript",
//   "SpringBoot",
//   "FastAPI",
//   "Flask",
//   "Django",
//   "ReactJS",
//   "VueJS",
//   "ExpressJS",
//   "NodeJS",
//   "Git",
//   "Google Cloud",
//   "Microsoft Azure",
//   ""

// ]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'varunrishwandh10@gmail.com',
}

export { header, about, projects, skills, contact, publications, education, workExperience }
