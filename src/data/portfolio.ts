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
  location: string;
  description: string;
  highlights: string[];
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
};

export const portfolio = {
  name: "Fahim Ashab",
  role: "Software Developer",
  positioning: "Building web products with Next.js and AWS.",
  intro:
    "I build clean frontend experiences and cloud-backed product features using Next.js, React, TypeScript, AWS Lambda, DynamoDB, Cognito, and API Gateway.",
  navigation: [
    { label: "About", href: "#about" },
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
    "Next.js and React frontend development",
    "AWS Lambda and API Gateway integration",
    "DynamoDB and Cognito-based product flows",
    "Production debugging and feature delivery",
  ],
  about:
    "I work on product-facing web applications with a focus on frontend development, cloud integration, and day-to-day software delivery. Most of my recent work has involved building and improving Next.js applications, connecting them to AWS serverless services, and shipping production features that are clear, maintainable, and reliable.",
  coreAreas: [
    "Frontend development with Next.js, React, and TypeScript",
    "Serverless APIs and cloud workflows on AWS",
    "Authentication, notifications, and admin-facing features",
    "Performance work, debugging, and production support",
  ],
  skillGroups: [
    {
      title: "Frontend",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Responsive UI",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend & Cloud",
      skills: [
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "Cognito",
        "SES",
        "S3",
        "CloudWatch",
        "IAM",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "Bitbucket",
        "Postman",
        "Jira",
        "Cloudflare Tunnel",
        "VS Code",
      ],
    },
  ] satisfies SkillGroup[],
  experience: {
    title: "Software Developer",
    location: "Remote",
    description:
      "Worked on cloud-based product features across the frontend and serverless backend, with a strong focus on usability, reliability, and maintainable delivery.",
    highlights: [
      "Built and improved features in Next.js applications used in production.",
      "Worked with AWS Lambda, DynamoDB, Cognito, API Gateway, and SES.",
      "Contributed to authentication, notifications, billing workflows, admin tools, and debugging.",
    ],
  } satisfies Experience,
  projects: [
    {
      title: "Cloud Desktop Platform",
      description:
        "Worked on user-facing and admin-side features for a cloud desktop platform, including authentication, billing flows, notifications, and core product interactions.",
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
        "Built notification and email flows with AWS services, covering template-based emails, real-time updates, and backend logic for product events.",
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
        "Worked on business account separation, protected APIs, and cloud configuration flows designed for organization-specific access and setup.",
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
      publisher: "IEEE Access · 2025",
      href: "https://ieeexplore.ieee.org/document/11175688",
      ariaLabel: "Read Fahim Ashab's IEEE Access publication on IEEE Xplore",
      description:
        "Fahim Ashab is a co-author of this IEEE Access paper. The work focuses on IoT security, combining anomaly detection, device integrity assessment, and LLM-assisted explanations to help identify malicious devices and make results easier to interpret.",
    },
  ] satisfies Publication[],
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
      value: "hello@example.com",
      href: "mailto:hello@example.com",
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
    {
      label: "Resume / CV",
      value: "/resume.txt",
      href: "/resume.txt",
    },
  ] satisfies ContactLink[],
  footer: "Fahim Ashab. Built with Next.js, TypeScript, and Tailwind CSS.",
};
