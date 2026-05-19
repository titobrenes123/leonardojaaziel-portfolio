import type { Dict } from './types';

const es: Dict = {
  meta: {
    title: 'Leonardo Gonzalez — Arquitecto de Google Cloud · Especialista en Workspace',
    description:
      'Arquitecto e Ingeniero certificado en Google Cloud. Más de 80 proyectos entregados en GKE, Cloud Run, BigQuery, Vertex AI y Workspace.',
  },
  nav: {
    role: 'Arquitecto Cloud',
    about: 'Sobre mí',
    stack: 'Stack',
    experience: 'Experiencia',
    certifications: 'Certificaciones',
    projects: 'Proyectos',
    contact: 'Contacto',
    hireMe: 'Contrátame',
    switchToOther: 'English',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    statusAvailable: 'DISPONIBLE PARA PROYECTOS',
    location: 'desde El Salvador',
    titleLine1: 'Arquitecto Cloud',
    titleAmpersand: 'e',
    titleLine2: 'Ingeniero',
    titleBuildingOn: 'construyendo en',
    bio: 'Diseño infraestructura en GCP, administro Google Workspace a gran escala, y conecto automatización e IA en flujos de trabajo que tienen que seguir funcionando.',
    bioName: 'Leonardo Gonzalez',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Conversemos',
    ctaResume: 'CV',
    stats: {
      years: 'Años de experiencia',
      certs: 'Certificaciones GC',
      projects: 'Proyectos entregados',
      bilingual: 'Bilingüe',
      bilingualValue: 'EN · ES',
    },
    whoamiTab: '~/whoami',
    portraitTab: 'leonardo.jpg — ~/portafolio',
  },
  about: {
    section: '01 // sobre mí',
    headingPart1: 'Primero ingeniero.',
    headingPart2: 'Después consultor.',
    longBio:
      'Soy un ingeniero certificado de Google Cloud trabajando en la intersección entre la infraestructura cloud y el ecosistema de Google. Mi día a día es arquitectura en GCP, administración de Workspace, y conectar automatización e IA en flujos de trabajo de negocio que tienen que seguir funcionando. La mayoría de lo que entrego es invisible hasta que deja de serlo — migraciones limpias, sistemas de correo saludables, backends confiables, e integraciones en las que no tienes que pensar.',
    paragraph2Prefix: 'Trabajo de manera bilingüe en ',
    paragraph2Region1: 'Norteamérica',
    paragraph2And: ' y ',
    paragraph2Region2: 'Latinoamérica',
    paragraph2Suffix:
      ' — diagnosticando lo que realmente está roto, arreglándolo de manera limpia, y devolviendo sistemas que son más fáciles de operar que como los encontré.',
    currently: 'enfoque',
    profileTab: 'profile.yaml',
    colophonRoleKey: 'rol',
    colophonRoleVal: 'Arquitecto Cloud · Workspace',
    colophonStackKey: 'stack',
    colophonStackVal: 'GCP · Workspace · Gemini',
    colophonLocationKey: 'ubicación',
    colophonLocationVal: 'El Salvador',
    colophonLanguagesKey: 'idiomas',
    colophonExperienceKey: 'experiencia',
    colophonExperienceComment: '# años',
    colophonProjectsKey: 'proyectos',
    colophonProjectsComment: '# entregados',
    colophonStyleKey: 'estilo',
    colophonStyleVal: 'vibe coder',
    colophonStatusKey: 'estado',
    colophonStatusVal: 'disponible para proyectos',
    approachEyebrow: 'enfoque',
    approachHeading: 'Cómo trabajo.',
    approach: [
      {
        n: '01',
        title: 'Sistemas que funcionan, no presentaciones',
        body: 'Lo que entrego es infraestructura que corre, migraciones validadas, y manuales que tu equipo puede usar el día que salgo del proyecto.',
      },
      {
        n: '02',
        title: 'Precio definido desde el inicio',
        body: 'Sabes el número antes de que empiece. Los proyectos por hora son raros y siempre están delimitados explícitamente por escrito.',
      },
      {
        n: '03',
        title: 'Operación bilingüe',
        body: 'Inglés, español, o mezcla — mismo tiempo de respuesta entre husos horarios de LATAM y Norteamérica.',
      },
      {
        n: '04',
        title: 'Construido para durar más que yo',
        body: 'Documentado, observable, y operable por tu equipo. Dejo los sistemas más fáciles de operar de como los encontré.',
      },
    ],
  },
  skills: {
    section: '02 // stack',
    headingPart1: 'Las ',
    headingTools: 'herramientas',
    headingPart2: ' que uso a diario.',
    groups: [
      {
        name: 'Plataformas Cloud',
        items: ['Google Cloud Platform', 'Firebase', 'Firestore', 'BigQuery'],
      },
      {
        name: 'Ecosistema Google',
        items: [
          'Google Workspace',
          'Administración de Gmail',
          'Admin Console',
          'Chrome Enterprise / Chrome OS',
        ],
      },
      {
        name: 'Infraestructura · DevOps',
        items: [
          'Administración de Linux',
          'Gestión de DNS',
          'Autenticación de correo',
          'Redes en la nube',
          'Gestión de VMs',
          'Automatización',
        ],
      },
      {
        name: 'Programación · Scripting',
        items: ['Python', 'SQL', 'JavaScript', 'Integraciones de API'],
      },
      {
        name: 'IA · Automatización',
        items: ['Gemini AI', 'Dialogflow', 'Cloud Functions', 'Flujos asistidos por IA'],
      },
    ],
  },
  experience: {
    section: '03 // experiencia',
    headingPart1: 'Dónde he ',
    headingShipped: 'entregado.',
    roles: [
      {
        role: 'Especialista en Google Workspace · Ingeniero de Soporte',
        period: '5+ años',
        summary:
          'Desplegué, migré y administré entornos de Workspace para PYMEs y organizaciones con múltiples dominios.',
        points: [
          'Despliegues de Workspace y migraciones desde Microsoft 365 → Workspace',
          'Remediación de entregabilidad en Gmail con SPF, DKIM y DMARC',
          'Gestión de identidad, Admin Console, y administración de dispositivos Chrome OS',
          'Unidades compartidas, configuraciones multi-dominio, y arquitectura de colaboración',
        ],
      },
      {
        role: 'Ingeniero Cloud · Google Cloud Platform',
        period: 'En curso',
        summary:
          'Ingeniería práctica en compute, redes y serverless sobre GCP.',
        points: [
          'Despliegues de VMs, administración de Linux, firewall y redes',
          'Pipelines con Cloud Functions, Firebase, Firestore y BigQuery',
          'Integraciones de API y diseño de infraestructura consciente del costo',
          'Monitoreo y diagnóstico en producción',
        ],
      },
      {
        role: 'Ingeniero de IA y Automatización',
        period: 'Por proyecto',
        summary:
          'Conecta interfaces conversacionales con datos e IA a través de backends serverless.',
        points: [
          'Flujos Dialogflow → Cloud Functions → BigQuery → Gemini',
          'Pipelines de ingesta y transformación desde Firestore',
          'Respuestas analíticas asistidas por IA devueltas a interfaces de chat',
        ],
      },
      {
        role: 'Consultoría en Infraestructura',
        period: 'Por proyecto',
        summary:
          'Asesoro a PYMEs en soluciones cloud-native, automatización y adopción del ecosistema Google.',
        points: [
          'Planeación y ejecución de migraciones',
          'Revisiones de postura de identidad, seguridad y cumplimiento',
          'Arquitectura Workspace + GCP para colaboración y datos',
        ],
      },
    ],
  },
  certifications: {
    section: '04 // certificaciones',
    headingPart1: 'Certificado en la plataforma ',
    headingPart2: 'sobre la que construyo.',
    headingPart3: '',
    intro:
      'Cuatro credenciales de Google Cloud detrás de cada proyecto — cubriendo arquitectura cloud, operaciones, administración de Workspace y las bases que las sostienen. Cada insignia enlaza a su verificación pública en Credly.',
    verifyLink: 'verificar en credly',
    verifyAriaPrefix: 'Verificar',
    levels: {
      Professional: 'Profesional',
      Associate: 'Asociado',
      Foundational: 'Fundamental',
    },
    items: [
      {
        short: 'Arquitecto Cloud Profesional',
        description:
          'Diseña arquitecturas escalables, seguras y confiables sobre Google Cloud Platform.',
        skills: [
          'Diseño de soluciones cloud',
          'Arquitectura de infraestructura',
          'Seguridad y cumplimiento',
          'Ingeniería de confiabilidad',
          'Optimización de costos',
          'Híbrido y multi-cloud',
        ],
      },
      {
        short: 'Administrador Profesional de Workspace',
        description:
          'Administra Google Workspace a escala productiva — identidad, seguridad, flujo de correo y Chrome Enterprise.',
        skills: [
          'Admin Console',
          'Gestión de identidad',
          'Seguridad y cumplimiento',
          'Flujo y enrutamiento de correo',
          'Chrome Enterprise',
          'Gestión de endpoints',
        ],
      },
      {
        short: 'Ingeniero Cloud Asociado',
        description:
          'Despliega, opera y mantiene cargas de trabajo en producción sobre Google Cloud Platform.',
        skills: [
          'Compute Engine',
          'IAM y permisos',
          'Redes',
          'Fundamentos de Kubernetes',
          'Cloud Storage',
          'Monitoreo y logging',
        ],
      },
      {
        short: 'Cloud Digital Leader',
        description:
          'Valida fluidez en conceptos cloud, servicios de GCP, y cómo habilitan la transformación de negocio.',
        skills: [
          'Fundamentos cloud',
          'Catálogo de servicios GCP',
          'Transformación digital',
          'Alfabetización en datos e IA',
          'Costos y operaciones',
        ],
      },
    ],
  },
  projects: {
    section: '05 // proyectos',
    headingPart1: 'Trabajos ',
    headingWork: 'seleccionados.',
    statLabel: 'Proyectos entregados',
    statSubLabel: 'a la fecha',
    intro:
      'Algunos proyectos que destacan — la mayoría de mi trabajo es infraestructura silenciosa y continua, y administración de Workspace que nunca aparece en una página de casos de estudio.',
    items: [
      {
        title: 'Asistente Dialogflow · BigQuery · Gemini',
        blurb:
          'Asistente analítico conversacional. Las consultas del usuario llegan a Cloud Functions, ejecutan SQL contra BigQuery, y devuelven análisis generado por Gemini al chat.',
      },
      {
        title: 'Migraciones a Workspace',
        blurb:
          'Migraciones desde Microsoft 365 → Google Workspace incluyendo DNS, flujo de correo, identidad, y despliegue de Chrome OS.',
      },
      {
        title: 'Servidores de juego en GCP',
        blurb:
          'Servidor dedicado de Minecraft Fabric en Compute Engine con tamaño consciente del costo, respaldos automáticos, y herramientas operativas limpias.',
      },
      {
        title: 'Pipeline Firestore → BigQuery',
        blurb:
          'Flujo de ingesta y transformación que convierte documentos de Firestore en datasets analíticos consultables en BigQuery.',
      },
      {
        title: 'Remediación de entregabilidad de correo',
        blurb:
          'Diagnóstico y resolución de problemas de spam, autenticación y reputación en sistemas de correo en producción.',
      },
      {
        title: 'Salesforce Activity Logger',
        blurb:
          'App web en Apps Script + Firebase que documenta revisiones de actividad con clientes en Salesforce, con asistencia de Gemini para pulir el contenido — construida y mantenida en producción.',
      },
    ],
  },
  contact: {
    section: '06 // contacto',
    headingPart1: '¿Tienes un proyecto cloud? ',
    headingPart2: 'Conversemos.',
    eyebrow: 'llamada de descubrimiento · gratis · 30 minutos',
    leadHeading: 'Cuéntame en qué estás trabajando.',
    leadBody:
      'Migración, revisión de arquitectura GCP, problemas de entregabilidad, o un flujo de IA que quieres conectar — escríbeme. Suelo responder dentro del día hábil en español o inglés.',
    reachMe: 'Escríbeme',
  },
  footer: {
    tagline:
      'Hecho con cuidado en El Salvador. Desplegado a donde sea que viva tu cloud. Abierto a nuevas arquitecturas, migraciones, y el ocasional incendio de entregabilidad a las 3 a.m.',
    chipVibe: 'Vibe Coder',
    chipRole: 'Arquitecto de Google Cloud',
    chipLocation: 'El Salvador · LATAM',
    reachMe: 'Escríbeme',
    copyrightSuffix: 'Todos los sistemas son suyos',
    handcrafted: 'hecho a mano con',
    systemsOperational: 'Todos los sistemas operativos',
  },
};

export default es;
