import type { Dict } from './types';

const en: Dict = {
  meta: {
    title: 'Leonardo Gonzalez — Google Cloud Architect · Workspace Specialist',
    description:
      'Google Cloud certified Architect & Engineer. 80+ projects shipped across GKE, Cloud Run, BigQuery, Vertex AI, and Workspace.',
  },
  nav: {
    role: 'Cloud Architect',
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    certifications: 'Certifications',
    projects: 'Projects',
    contact: 'Contact',
    hireMe: 'Hire Me',
    switchToOther: 'Español',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    statusAvailable: 'AVAILABLE FOR PROJECTS',
    location: 'based in El Salvador',
    titleLine1: 'Cloud Architect',
    titleAmpersand: '&',
    titleLine2: 'Engineer',
    titleBuildingOn: 'building on',
    bio: 'I design GCP infrastructure, run Google Workspace at scale, and wire automation and AI into business workflows that have to keep working.',
    bioName: 'Leonardo Gonzalez',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    ctaResume: 'Resume',
    stats: {
      years: 'Years experience',
      certs: 'GC certifications',
      projects: 'Projects shipped',
      bilingual: 'Bilingual',
      bilingualValue: 'EN · ES',
    },
    whoamiTab: '~/whoami',
    portraitTab: 'leonardo.jpg — ~/portfolio',
  },
  about: {
    section: '01 // about',
    headingPart1: 'Engineer first.',
    headingPart2: 'Consultant second.',
    longBio:
      "I'm a Google Cloud certified engineer working at the intersection of cloud infrastructure and the Google ecosystem. My day-to-day is GCP architecture, Workspace administration, and stitching automation and AI into business workflows that have to keep running. Most of what I deliver is invisible until it isn't — clean migrations, healthy mail systems, reliable backends, and integrations you don't have to think about.",
    paragraph2Prefix: 'I work bilingually across ',
    paragraph2Region1: 'North America',
    paragraph2And: ' and ',
    paragraph2Region2: 'LATAM',
    paragraph2Suffix:
      " — diagnosing what's actually broken, fixing it cleanly, and handing back systems that are easier to operate than the way I found them.",
    currently: 'approach',
    profileTab: 'profile.yaml',
    colophonRoleKey: 'role',
    colophonRoleVal: 'Cloud Architect · Workspace',
    colophonStackKey: 'stack',
    colophonStackVal: 'GCP · Workspace · Gemini',
    colophonLocationKey: 'location',
    colophonLocationVal: 'El Salvador',
    colophonLanguagesKey: 'languages',
    colophonExperienceKey: 'experience',
    colophonExperienceComment: '# years',
    colophonProjectsKey: 'projects',
    colophonProjectsComment: '# shipped',
    colophonStyleKey: 'style',
    colophonStyleVal: 'vibe coder',
    colophonStatusKey: 'status',
    colophonStatusVal: 'open to engagements',
    approachEyebrow: 'approach',
    approachHeading: 'How I work.',
    approach: [
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
    ],
  },
  skills: {
    section: '02 // stack',
    headingPart1: 'The ',
    headingTools: 'tools',
    headingPart2: ' I use daily.',
    groups: [
      {
        name: 'Cloud Platforms',
        items: ['Google Cloud Platform', 'Firebase', 'Firestore', 'BigQuery'],
      },
      {
        name: 'Google Ecosystem',
        items: [
          'Google Workspace',
          'Gmail Administration',
          'Admin Console',
          'Chrome Enterprise / Chrome OS',
        ],
      },
      {
        name: 'Infrastructure · DevOps',
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
        items: ['Python', 'SQL', 'JavaScript', 'API Integrations'],
      },
      {
        name: 'AI · Automation',
        items: ['Gemini AI', 'Dialogflow', 'Cloud Functions', 'AI-assisted workflows'],
      },
    ],
  },
  experience: {
    section: '03 // experience',
    headingPart1: "Where I've ",
    headingShipped: 'shipped.',
    roles: [
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
    ],
  },
  certifications: {
    section: '04 // certifications',
    headingPart1: 'Certified on the platform ',
    headingPart2: 'I build on.',
    headingPart3: '',
    intro:
      'Four Google Cloud credentials underneath every engagement — covering cloud architecture, operations, Workspace administration, and the foundations underneath them. Each badge links to its public Credly verification.',
    verifyLink: 'verify on credly',
    verifyAriaPrefix: 'Verify',
    levels: {
      Professional: 'Professional',
      Associate: 'Associate',
      Foundational: 'Foundational',
    },
    items: [
      {
        short: 'Professional Cloud Architect',
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
      },
      {
        short: 'Professional Workspace Administrator',
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
      },
      {
        short: 'Associate Cloud Engineer',
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
      },
      {
        short: 'Cloud Digital Leader',
        description:
          'Validates fluency in cloud concepts, GCP services, and how they enable business transformation.',
        skills: [
          'Cloud fundamentals',
          'GCP service catalog',
          'Digital transformation',
          'Data & AI literacy',
          'Cost & operations',
        ],
      },
    ],
  },
  projects: {
    section: '05 // projects',
    headingPart1: 'Selected ',
    headingWork: 'work.',
    statLabel: 'Projects shipped',
    statSubLabel: 'to date',
    intro:
      'A few engagements that stand out — most of my work is quiet, ongoing infrastructure and Workspace administration that never appears on a case-study page.',
    items: [
      {
        title: 'Dialogflow · BigQuery · Gemini Assistant',
        blurb:
          'Conversational analytics assistant. User prompts hit Cloud Functions, run SQL against BigQuery, and return Gemini-generated analysis to the chat surface.',
      },
      {
        title: 'Workspace Migration Engagements',
        blurb:
          'Microsoft 365 → Google Workspace migrations including DNS, mail flow, identity, and Chrome OS rollout.',
      },
      {
        title: 'GCP-Hosted Game Servers',
        blurb:
          'Dedicated Minecraft Fabric server on Compute Engine with cost-aware sizing, automated backups, and clean operational tooling.',
      },
      {
        title: 'Firestore → BigQuery Pipeline',
        blurb:
          'Ingestion and transformation flow turning Firestore documents into queryable analytics datasets in BigQuery.',
      },
      {
        title: 'Email Deliverability Remediation',
        blurb:
          'Diagnoses and fixes spam, authentication, and reputation issues for production email systems.',
      },
      {
        title: 'Salesforce Activity Logger',
        blurb:
          'Apps Script + Firebase web app that documents client engagement reviews into Salesforce, with Gemini-assisted content polishing — built and maintained in production.',
      },
    ],
  },
  contact: {
    section: '06 // contact',
    headingPart1: 'Have a cloud project? ',
    headingPart2: "Let's talk.",
    eyebrow: 'discovery call · free · 30 minutes',
    leadHeading: "Send me what you're working on.",
    leadBody:
      'Migration, GCP architecture review, deliverability mess, or an AI workflow you want wired up — drop me a line. I usually answer within a business day in EN or ES.',
    reachMe: 'Reach me',
  },
  footer: {
    tagline:
      "Crafted with care in El Salvador. Shipped to wherever your cloud happens to live. Open to new architectures, migrations, and the occasional 3 a.m. deliverability fire.",
    chipVibe: 'Vibe Coder',
    chipRole: 'Google Cloud Architect',
    chipLocation: 'El Salvador · LATAM',
    reachMe: 'Reach me',
    copyrightSuffix: 'All systems his own',
    handcrafted: 'handcrafted with',
    systemsOperational: 'All systems operational',
  },
};

export default en;
