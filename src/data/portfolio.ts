export type NavItem = {
  label: string;
  href: string;
};

export type ActionLink = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  result: string;
  focus: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

export type ProfileLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type ResearchProfile = {
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
};

export type Publication = {
  title: string;
  publisher: string;
  href: string;
  ariaLabel: string;
  description: string;
  details: string[];
};

export type ResearchProject = {
  title: string;
  description: string;
  highlights: string[];
};

export const portfolio = {
  name: "Fahim Ashab",
  role: "Software Developer - AWS Cloud Engineer",
  positioning:
    "Software Developer with an Electrical and Electronic Engineering background.",
  intro:
    "I work on Next.js applications, AWS-backed product features, and cloud-connected systems across frontend development, serverless APIs, authentication, notifications, and IoT-oriented workflows.",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  heroActions: [
    {
      label: "View Projects",
      href: "#projects",
      external: false,
      ariaLabel: "View Fahim Ashab's projects section",
    },
    {
      label: "Contact Me",
      href: "#contact",
      external: false,
      ariaLabel: "Go to Fahim Ashab's contact section",
    },
    {
      label: "Download CV",
      href: "/resume.txt",
      external: false,
      download: true,
      ariaLabel: "Download Fahim Ashab's CV",
    },
  ] satisfies ActionLink[],
  profileLinks: [
    {
      label: "GitHub",
      href: "https://github.com/fahimashab-code",
      ariaLabel: "Visit Fahim Ashab's GitHub profile",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fahim-ashab-8294b3213/?skipRedirect=true",
      ariaLabel: "Visit Fahim Ashab's LinkedIn profile",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&user=0d27i7EAAAAJ",
      ariaLabel: "Visit Fahim Ashab's Google Scholar profile",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0000-9869-4781",
      ariaLabel: "Visit Fahim Ashab's ORCID profile",
    },
  ] satisfies ProfileLink[],
  highlights: [
    "Next.js, React, and TypeScript product development",
    "AWS Lambda, API Gateway, DynamoDB, and Cognito",
    "IoT and cloud-connected product systems",
    "Chattogram, Bangladesh",
  ],
  about:
    "Electrical and Electronic Engineering graduate with practical experience in software, cloud-connected systems, and product-focused development. I am most comfortable working on web applications, AWS services, technical problem solving and cross-functional delivery. My recent work has focused on building software that connects users, devices, and cloud workflows in a way that is reliable and easy to maintain.",
  coreAreas: [
    "Product-facing web application development",
    "AWS serverless and cloud operations support",
    "IoT and device-to-cloud integration",
    "Technical documentation and cross-functional teamwork",
  ],
  education: [
    {
      degree: "MS in Electrical and Electronic Engineering",
      institution: "University of Chittagong",
      location: "Chattogram, Bangladesh",
      period: "September 2023 - March 2025",
      result: "CGPA: 3.39 / 4.00",
      focus:
        "Thesis: LLM-Enhanced Security Framework for IoT Network: Anomaly Detection and Malicious Devices Identification",
    },
    {
      degree: "BSc in Electrical and Electronic Engineering",
      institution: "University of Chittagong",
      location: "Chattogram, Bangladesh",
      period: "January 2018 - May 2023",
      result: "CGPA: 3.18 / 4.00",
      focus: "Project: Inventory Monitoring App for Coffee Distributor",
    },
  ] satisfies Education[],
  skillGroups: [
    {
      title: "Frontend",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Responsive UI",
        "Frontend Implementation",
      ],
    },
    {
      title: "Cloud & Backend",
      skills: [
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "Cognito",
        "AWS IoT Core",
        "SES",
        "S3",
        "CloudWatch",
        "EventBridge",
        "EC2",
        "IAM",
      ],
    },
    {
      title: "Data, IoT & Engineering",
      skills: [
        "Python",
        "OpenWrt",
        "Scapy",
        "dpkt",
        "scikit-learn",
        "InfluxDB",
        "Amazon Timestream",
        "MATLAB",
      ],
    },
    {
      title: "Workflow & Tools",
      skills: [
        "Git",
        "Bitbucket",
        "Postman",
        "Jira",
        "Confluence",
        "Slack",
        "Figma",
        "VS Code",
      ],
    },
  ] satisfies SkillGroup[],
  experiences: [
    {
      title: "Remote Cloud Developer / Backend Developer",
      organization: "SenseMinder LLC",
      period: "April 2025 - Present",
      location: "Remote",
      description:
        "Working on production software systems that connect users, cloud desktop workflows, and backend services across a cloud-based product environment.",
      highlights: [
        "Built and improved features in Next.js applications for user-facing and admin workflows.",
        "Worked on AWS Cognito-based authentication, internal user management, and protected product flows.",
        "Implemented notification features with AWS Lambda and SES templates, along with billing and promotional balance related work.",
        "Supported AWS DCV, EventBridge scheduling, file management, QA collaboration, and production debugging.",
      ],
    },
    {
      title: "Freelance IoT & Cloud Developer",
      organization: "Fiverr",
      period: "2024 - Present",
      location: "Remote",
      description:
        "Built small-scale device-to-cloud and monitoring solutions for clients, focused on practical data visibility, automation, and software integration.",
      highlights: [
        "Integrated sensor and machine data with AWS IoT Core and related cloud services.",
        "Created monitoring and visualization flows to make live device data easier to track and understand.",
        "Worked on cloud-backed automation and troubleshooting for IoT-oriented client projects.",
        "Translated practical client requirements into simple software and cloud workflows.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: "Cloud Desktop Platform",
      description:
        "Worked on a cloud desktop product covering authentication, billing-related workflows, notifications, internal tools, and user-facing desktop flows.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "AWS Lambda",
        "DynamoDB",
        "Cognito",
        "API Gateway",
      ],
    },
    {
      title: "Notification & Email Template System",
      description:
        "Built notification and email workflows with AWS services, including SES templates, backend event handling, and real-time product notifications.",
      tech: [
        "AWS Lambda",
        "SES",
        "DynamoDB",
        "DynamoDB Streams",
        "WebSocket",
        "Handlebars",
      ],
    },
    {
      title: "Business Account Management System",
      description:
        "Worked on account separation, protected APIs, and business-specific cloud configuration flows for organization-focused product access.",
      tech: [
        "Next.js",
        "Cognito",
        "AWS Lambda",
        "DynamoDB",
        "API Gateway",
      ],
    },
  ] satisfies Project[],
  publications: [
    {
      title:
        "LLM-Enhanced Security Framework for IoT Network: Anomaly Detection and Malicious Devices Identification",
      publisher: "IEEE Access - 2025",
      href: "https://ieeexplore.ieee.org/document/11175688",
      ariaLabel: "Read Fahim Ashab's IEEE Access publication on IEEE Xplore",
      description:
        "First Co-author of this IEEE Access paper. The work focuses on IoT security by combining anomaly detection, malicious device identification, and LLM-assisted explanations.",
      details: [
        "Captured real IoT network traffic through an OpenWrt-based router and transferred packet data for analysis.",
        "Processed PCAP traffic into structured features using Python tools such as Scapy and dpkt.",
        "Applied Isolation Forest for anomaly detection and Random Forest for malicious device identification.",
        "Integrated GPT-4o mini to generate statistical summaries, risk-aware insights, and human-readable explanations.",
        "The paper notes equal contribution between Mohammed Arif Iftakher Mahmood and Fahim Ashab.",
      ],
    },
  ] satisfies Publication[],
  researchProjects: [
    {
      title: "Device-to-Cloud Monitoring and Visualization System",
      description:
        "Built a monitoring-oriented academic project focused on collecting, processing, and visualizing real-time device or machine data through cloud-connected workflows.",
      highlights: [
        "Integrated sensor and machine data with cloud services for real-time monitoring.",
        "Created dashboards and monitoring flows to track device status and alerts.",
        "Organized cloud-based data views to support troubleshooting and operational decisions.",
      ],
    },
  ] satisfies ResearchProject[],
  researchProfiles: [
    {
      label: "ORCID iD",
      value: "0009-0000-9869-4781",
      href: "https://orcid.org/0009-0000-9869-4781",
      ariaLabel: "Visit Fahim Ashab's ORCID profile",
    },
    {
      label: "Google Scholar",
      value: "Fahim Ashab",
      href: "https://scholar.google.com/citations?hl=en&user=0d27i7EAAAAJ",
      ariaLabel: "Visit Fahim Ashab's Google Scholar profile",
    },
  ] satisfies ResearchProfile[],
  contactLinks: [
    {
      label: "Email",
      value: "fahim.ashab.eee@gmail.com",
      href: "mailto:fahim.ashab.eee@gmail.com",
    },
    {
      label: "Phone",
      value: "+880 1334-859278",
      href: "tel:+8801334859278",
    },
    {
      label: "GitHub",
      value: "github.com/fahimashab-code",
      href: "https://github.com/fahimashab-code",
      external: true,
      ariaLabel: "Visit Fahim Ashab's GitHub profile",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/fahim-ashab-8294b3213",
      href: "https://www.linkedin.com/in/fahim-ashab-8294b3213/?skipRedirect=true",
      external: true,
      ariaLabel: "Visit Fahim Ashab's LinkedIn profile",
    },
  ] satisfies ContactLink[],
  footer: "Fahim Ashab - Software Developer portfolio.",
};
