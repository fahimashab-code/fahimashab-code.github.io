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
  role: "Full Stack Developer",
  positioning:
    "Full Stack Developer focused on Next.js, AWS Serverless, and cloud-based web applications.",
  intro:
    "I build modern web applications, serverless APIs, and cloud-based product features using Next.js, React, TypeScript, AWS Lambda, DynamoDB, Cognito, and API Gateway.",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
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
      href: "https://www.linkedin.com/in/ADD_LINKEDIN_URL_HERE",
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
    "Building production UI with Next.js, React, TypeScript, and Tailwind CSS.",
    "Designing AWS serverless workflows with Lambda, DynamoDB, Cognito, and API Gateway.",
    "Improving product reliability through debugging, performance work, and maintainable delivery.",
  ],
  about:
    "I work across frontend engineering and full-stack product development, with a strong focus on production-grade cloud applications. My experience spans responsive user interfaces, serverless backend integration, AWS-based authentication and data flows, and shipping features that balance usability, maintainability, and operational reliability.",
  coreAreas: [
    "Frontend engineering for responsive product interfaces",
    "Full-stack feature development across UI and serverless services",
    "AWS serverless architecture and cloud application workflows",
    "Production debugging, performance tuning, and iterative delivery",
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
      "Worked on cloud-based web application features using Next.js, AWS Lambda, DynamoDB, Cognito, API Gateway, and SES. Contributed to authentication flows, notification systems, billing-related workflows, admin features, frontend performance, and production debugging.",
  } satisfies Experience,
  projects: [
    {
      title: "Cloud Desktop Platform",
      description:
        "Worked on frontend and serverless backend features for a cloud desktop platform, including authentication, billing-related workflows, notifications, admin tools, and user-facing cloud desktop flows.",
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
        "Built and improved notification and email workflows using AWS Lambda, DynamoDB, SES templates, and real-time notification logic.",
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
        "Worked on business account separation, Cognito custom attributes, protected APIs, and business-specific cloud configuration flows.",
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
        "IEEE Access Paper",
      publisher: "IEEE Access",
      href: "https://ieeexplore.ieee.org/document/11175688",
      ariaLabel: "Read Fahim Ashab's IEEE Access publication on IEEE Xplore",
      description:
        "Fahim Ashab is a co-author of this IEEE Access paper. The publication notes equal contribution between Mohammed Arif Iftakher Mahmood and Fahim Ashab.",
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
      value: "linkedin.com/in/your-profile",
      href: "https://www.linkedin.com/in/ADD_LINKEDIN_URL_HERE",
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
