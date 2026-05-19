/**
 * Single source of truth for everything the site renders.
 *
 * Edit this file to update the live site — no component changes needed.
 * Each export below corresponds to a section component in `components/`:
 *
 *   profile        → Hero (name, title, tagline) + Contact + Footer
 *   certifications → Certifications (Credly badge + verify link per card)
 *   experience     → Experience (timeline entries)
 *   skillGroups    → Skills (grouped chips)
 *   projects       → Projects (case cards)
 *   approach       → About (the four "How I work" principles)
 *
 * Credly badge fields are taken from the public badge page on credly.com:
 *   `badge`  → the 340x340 image URL from `images.credly.com`
 *   `credly` → the public verification page (used as the "verify" link)
 */

export const profile = {
  name: 'Leonardo Gonzalez',
  title: 'Google Cloud Architect · Workspace Specialist',
  location: 'El Salvador',
  languages: 'English · Spanish',
  yearsExperience: '5+',
  projectsCount: '80+',
  tagline:
    'Designing GCP infrastructure, running Workspace at scale, and wiring automation and AI into real business workflows.',
  shortBio:
    'Google Cloud certified engineer with 5+ years building and operating cloud and collaboration systems for businesses across the Americas.',
  longBio:
    "I'm a Google Cloud certified engineer working at the intersection of cloud infrastructure and the Google ecosystem. My day-to-day is GCP architecture, Workspace administration, and stitching automation and AI into business workflows that have to keep running. Most of what I deliver is invisible until it isn't — clean migrations, healthy mail systems, reliable backends, and integrations you don't have to think about.",
  email: 'info@leonardojaaziel.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/leonardojaaziel',
    github: 'https://github.com/leonardojaaziel',
    fiverr: 'https://www.fiverr.com/leonardojaaziel',
    upwork: 'https://www.upwork.com/freelancers/leonardojaaziel',
  },
};

export const certifications = [
  {
    name: 'Google Cloud Professional Cloud Architect',
    short: 'Professional Cloud Architect',
    level: 'Professional',
    issuer: 'Google Cloud',
    description:
      'Designs scalable, secure, and reliable architectures on Google Cloud Platform.',
    skills: [
      'Cloud solution design',
      'Infrastructure architecture',
      'Security & compliance',
      'Reliability engineering',
      'Cost optimization',
      'Hybrid & multi-cloud',
    ],
    badge:
      'https://images.credly.com/size/340x340/images/16d3e89c-4af5-47d8-a502-2a93b02c26d4/image.png',
    credly: 'https://www.credly.com/badges/24d8d4da-fd4a-4318-9d25-f1003dc9133d',
  },
  {
    name: 'Google Professional Google Workspace Administrator',
    short: 'Professional Workspace Administrator',
    level: 'Professional',
    issuer: 'Google Cloud',
    description:
      'Manages Google Workspace at production scale — identity, security, mail flow, and Chrome enterprise.',
    skills: [
      'Admin Console',
      'Identity management',
      'Security & compliance',
      'Mail flow & routing',
      'Chrome Enterprise',
      'Endpoint management',
    ],
    badge:
      'https://images.credly.com/size/340x340/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png',
    credly: 'https://www.credly.com/badges/513e12fe-7927-4ad0-98fa-c4ecdc957818',
  },
  {
    name: 'Google Cloud Associate Cloud Engineer',
    short: 'Associate Cloud Engineer',
    level: 'Associate',
    issuer: 'Google Cloud',
    description:
      'Deploys, operates, and maintains production workloads on Google Cloud Platform.',
    skills: [
      'Compute Engine',
      'IAM & permissions',
      'Networking',
      'Kubernetes basics',
      'Cloud Storage',
      'Monitoring & logging',
    ],
    badge:
      'https://images.credly.com/size/340x340/images/44994cda-b5b0-44cb-9a6d-d29b57163073/image.png',
    credly: 'https://www.credly.com/badges/64438ff5-daf2-44ea-b275-ec7924554dbd',
  },
  {
    name: 'Google Cloud Digital Leader',
    short: 'Cloud Digital Leader',
    level: 'Foundational',
    issuer: 'Google Cloud',
    description:
      'Validates fluency in cloud concepts, GCP services, and how they enable business transformation.',
    skills: [
      'Cloud fundamentals',
      'GCP service catalog',
      'Digital transformation',
      'Data & AI literacy',
      'Cost & operations',
    ],
    badge:
      'https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png',
    credly: 'https://www.credly.com/badges/e6778acd-0575-4064-92c5-3a06caf07fd2',
  },
];

export const experience = [
  {
    role: 'Google Workspace Specialist · Support Engineer',
    period: '5+ years',
    summary:
      'Deployed, migrated, and administered Workspace environments for SMBs and multi-domain organizations.',
    points: [
      'Workspace deployments and Microsoft 365 → Workspace migrations',
      'SPF, DKIM, DMARC, and Gmail deliverability remediation',
      'Identity management, Admin Console, Chrome OS device management',
      'Shared drives, multi-domain setups, and collaboration architecture',
    ],
  },
  {
    role: 'Cloud Engineer · Google Cloud Platform',
    period: 'Ongoing',
    summary:
      'Hands-on engineering across compute, networking, and serverless on GCP.',
    points: [
      'VM deployments, Linux administration, firewall and networking',
      'Cloud Functions, Firebase, Firestore, and BigQuery pipelines',
      'API integrations and cost-conscious infrastructure design',
      'Production monitoring and troubleshooting',
    ],
  },
  {
    role: 'AI & Automation Engineer',
    period: 'Project-based',
    summary:
      'Wires conversational interfaces to data and AI through serverless backends.',
    points: [
      'Dialogflow → Cloud Functions → BigQuery → Gemini workflows',
      'Firestore ingestion and transformation pipelines',
      'AI-assisted analytics responses returned to chat surfaces',
    ],
  },
  {
    role: 'Infrastructure Consulting',
    period: 'Project-based',
    summary:
      'Advises SMBs on cloud-native solutions, automation, and Google ecosystem adoption.',
    points: [
      'Migration planning and execution',
      'Identity, security, and compliance posture reviews',
      'Workspace + GCP architecture for collaboration and data',
    ],
  },
];

export const skillGroups = [
  {
    name: 'Cloud Platforms',
    icon: 'cloud',
    items: ['Google Cloud Platform', 'Firebase', 'Firestore', 'BigQuery'],
  },
  {
    name: 'Google Ecosystem',
    icon: 'globe',
    items: [
      'Google Workspace',
      'Gmail Administration',
      'Admin Console',
      'Chrome Enterprise / Chrome OS',
    ],
  },
  {
    name: 'Infrastructure · DevOps',
    icon: 'server',
    items: [
      'Linux Administration',
      'DNS Management',
      'Email Authentication',
      'Cloud Networking',
      'VM Management',
      'Automation',
    ],
  },
  {
    name: 'Programming · Scripting',
    icon: 'code',
    items: ['Python', 'SQL', 'JavaScript', 'API Integrations'],
  },
  {
    name: 'AI · Automation',
    icon: 'sparkles',
    items: ['Gemini AI', 'Dialogflow', 'Cloud Functions', 'AI-assisted workflows'],
  },
];

export const projects = [
  {
    title: 'Dialogflow + BigQuery + Gemini Assistant',
    blurb:
      'Conversational analytics assistant. User prompts hit Cloud Functions, run SQL against BigQuery, and return Gemini-generated analysis to the chat surface.',
    tags: ['Dialogflow', 'Cloud Functions', 'BigQuery', 'Gemini'],
  },
  {
    title: 'Workspace Migration Engagements',
    blurb:
      'Microsoft 365 → Google Workspace migrations including DNS, mail flow, identity, and Chrome OS rollout.',
    tags: ['Workspace', 'M365', 'DNS', 'SPF/DKIM/DMARC'],
  },
  {
    title: 'GCP-Hosted Game Servers',
    blurb:
      'Dedicated Minecraft Fabric server on Compute Engine with cost-aware sizing, automated backups, and clean operational tooling.',
    tags: ['Compute Engine', 'Linux', 'Networking'],
  },
  {
    title: 'Firestore → BigQuery Pipeline',
    blurb:
      'Ingestion and transformation flow turning Firestore documents into queryable analytics datasets in BigQuery.',
    tags: ['Firestore', 'BigQuery', 'Cloud Functions'],
  },
  {
    title: 'Email Deliverability Remediation',
    blurb:
      'Diagnoses and fixes spam, authentication, and reputation issues for production email systems.',
    tags: ['Gmail', 'SPF', 'DKIM', 'DMARC'],
  },
  {
    title: 'iPSE Activity Logger',
    blurb:
      'Apps Script web app for documenting partner engagement reviews into Salesforce — built and maintained in production.',
    tags: ['Apps Script', 'Salesforce', 'Workspace'],
  },
];

export const approach = [
  {
    n: '01',
    title: 'Working systems, not slide decks',
    body: 'Deliverables are infrastructure that runs, migrations that validate, and runbooks your team can actually use the day I rotate off.',
  },
  {
    n: '02',
    title: 'Scoped pricing up front',
    body: 'You see the number before I start. Hourly engagements are rare and always bounded explicitly in writing.',
  },
  {
    n: '03',
    title: 'Bilingual operations',
    body: 'English, Spanish, or mixed — same response time across LATAM and North American timezones.',
  },
  {
    n: '04',
    title: 'Built to outlast me',
    body: 'Documented, observable, and operable by your team. I leave systems easier to run than I found them.',
  },
];
