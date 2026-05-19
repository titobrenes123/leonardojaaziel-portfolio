/**
 * Shape of every locale dictionary. Both `en.ts` and `es.ts` MUST
 * satisfy this exact type — if a key exists in one, it must exist in
 * the other. The translator agent uses this file as ground truth.
 */

export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    role: string;
    about: string;
    stack: string;
    experience: string;
    certifications: string;
    projects: string;
    contact: string;
    hireMe: string;
    switchToOther: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    statusAvailable: string;
    location: string;
    titleLine1: string;
    titleAmpersand: string;
    titleLine2: string;
    titleBuildingOn: string;
    bio: string;
    bioName: string;
    ctaProjects: string;
    ctaContact: string;
    ctaResume: string;
    stats: {
      years: string;
      certs: string;
      projects: string;
      bilingual: string;
      bilingualValue: string;
    };
    whoamiTab: string;
    portraitTab: string;
  };
  about: {
    section: string;
    headingPart1: string;
    headingPart2: string;
    longBio: string;
    paragraph2Prefix: string;
    paragraph2Region1: string;
    paragraph2And: string;
    paragraph2Region2: string;
    paragraph2Suffix: string;
    currently: string;
    profileTab: string;
    colophonRoleKey: string;
    colophonRoleVal: string;
    colophonStackKey: string;
    colophonStackVal: string;
    colophonLocationKey: string;
    colophonLocationVal: string;
    colophonLanguagesKey: string;
    colophonExperienceKey: string;
    colophonExperienceComment: string;
    colophonProjectsKey: string;
    colophonProjectsComment: string;
    colophonStyleKey: string;
    colophonStyleVal: string;
    colophonStatusKey: string;
    colophonStatusVal: string;
    approachEyebrow: string;
    approachHeading: string;
    approach: {
      n: string;
      title: string;
      body: string;
    }[];
  };
  skills: {
    section: string;
    headingPart1: string;
    headingTools: string;
    headingPart2: string;
    groups: {
      name: string;
      items: string[];
    }[];
  };
  experience: {
    section: string;
    headingPart1: string;
    headingShipped: string;
    roles: {
      role: string;
      period: string;
      summary: string;
      points: string[];
    }[];
  };
  certifications: {
    section: string;
    headingPart1: string;
    headingPart2: string;
    headingPart3: string;
    intro: string;
    verifyLink: string;
    verifyAriaPrefix: string;
    levels: {
      Professional: string;
      Associate: string;
      Foundational: string;
    };
    // Item-level translations matched by index against `data.certifications`
    items: {
      short: string;
      description: string;
      skills: string[];
    }[];
  };
  projects: {
    section: string;
    headingPart1: string;
    headingWork: string;
    statLabel: string;
    statSubLabel: string;
    intro: string;
    items: {
      title: string;
      blurb: string;
    }[];
  };
  contact: {
    section: string;
    headingPart1: string;
    headingPart2: string;
    eyebrow: string;
    leadHeading: string;
    leadBody: string;
    reachMe: string;
  };
  footer: {
    tagline: string;
    chipVibe: string;
    chipRole: string;
    chipLocation: string;
    reachMe: string;
    copyrightSuffix: string;
    handcrafted: string;
    systemsOperational: string;
  };
};

export type Locale = 'en' | 'es';
