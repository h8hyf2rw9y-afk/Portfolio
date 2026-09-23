export type CertificationLanguage = "en" | "es";
type Localized = { en: string; es: string };

export type Certification = {
  title: Localized;
  issuer: string;
  issued: Localized;
  type: Localized;
  description: Localized;
  credentialUrl?: string;
  featured?: boolean;
};

const l = (en: string, es: string): Localized => ({ en, es });

export const certifications: Certification[] = [
  {
    title:l("McKinsey Forward Program","Programa McKinsey Forward"),
    issuer:"McKinsey & Company",
    issued:l("December 2025","Diciembre 2025"),
    type:l("Professional development","Desarrollo profesional"),
    description:l("Structured problem-solving, data-driven decision making, communication, adaptability, and digital literacy.","Resolución estructurada de problemas, decisiones basadas en datos, comunicación, adaptabilidad y alfabetización digital."),
    credentialUrl:"https://www.credly.com/badges/c1e509ab-5453-414c-add2-bdb2003cca10/public_url",
    featured:true
  },
  {
    title:l("Digital Transformation Specialist","Especialista en Transformación Digital"),
    issuer:"MIT Professional Education",
    issued:l("August 2025","Agosto 2025"),
    type:l("Professional certificate","Certificado profesional"),
    description:l("Digital transformation through AI, cloud, blockchain, IoT, cybersecurity, innovation, and organizational change.","Transformación digital mediante IA, nube, blockchain, IoT, ciberseguridad, innovación y cambio organizacional."),
    featured:true
  },
  {
    title:l("Setting Up Your Sale","Setting Up Your Sale"),
    issuer:"Dell Technologies",
    issued:l("January 2026","Enero 2026"),
    type:l("Sales certification","Certificación en ventas"),
    description:l("Professional sales structure, strategic preparation, communication, and business-development fundamentals.","Estructura profesional de ventas, preparación estratégica, comunicación y fundamentos de desarrollo de negocio."),
    credentialUrl:"https://www.coursera.org/account/accomplishments/records/NDXNUI87JN0W",
    featured:true
  },
  {
    title:l("CAPM Exam Prep Course — 25 PDUs","Curso de preparación CAPM — 25 PDUs"),
    issuer:"Udemy · PMI-aligned preparation",
    issued:l("September 2025","Septiembre 2025"),
    type:l("Exam preparation","Preparación para examen"),
    description:l("Project-management fundamentals, processes, and practices aligned with the CAPM exam. This is exam preparation, not the CAPM credential.","Fundamentos, procesos y prácticas de gestión de proyectos alineados con el examen CAPM. Es preparación, no la credencial CAPM."),
    featured:true
  },
  {
    title:l("Become a Data Analyst","Conviértete en Data Analyst"),
    issuer:"LinkedIn Learning",
    issued:l("August 2025","Agosto 2025"),
    type:l("Learning path","Ruta de aprendizaje"),
    description:l("Data analysis, statistical reasoning, and practical tools for turning data into business insights.","Análisis de datos, razonamiento estadístico y herramientas prácticas para convertir datos en información de negocio."),
    credentialUrl:"https://www.linkedin.com/learning/certificates/d9bcd4b4672855f5c04c37c24ffd5ee5f6bfb9c3bcddea3ffb6ff1cc118e5a6e/"
  },
  {
    title:l("Generative AI Overview for Project Managers","Panorama de IA generativa para Project Managers"),
    issuer:"Project Management Institute",
    issued:l("August 2025","Agosto 2025"),
    type:l("AI and project management","IA y gestión de proyectos"),
    description:l("Practical foundations for understanding generative AI in project-management contexts.","Fundamentos prácticos para comprender la IA generativa dentro de la gestión de proyectos."),
    credentialUrl:"https://www.credly.com/badges/30f7403a-447c-4e09-8afb-f2eb6e1cdd95/linked_in_profile"
  },
  {
    title:l("Flutter & Dart Knowledge","Conocimientos de Flutter y Dart"),
    issuer:"Udemy",
    issued:l("August 2025","Agosto 2025"),
    type:l("Technical course","Curso técnico"),
    description:l("Flutter, Dart, Firebase integration, and mobile-application development foundations.","Flutter, Dart, integración con Firebase y fundamentos de desarrollo de aplicaciones móviles.")
  },
  {
    title:l("Introduction to Generative AI","Introducción a la IA generativa"),
    issuer:"MIT Professional Education",
    issued:l("August 2025","Agosto 2025"),
    type:l("AI certificate","Certificado de IA"),
    description:l("Generative AI, democratized data access, sentiment analysis, and innovation across business contexts.","IA generativa, democratización del acceso a datos, análisis de sentimiento e innovación en contextos empresariales.")
  },
  {
    title:l("Project Management with Jira","Gestión de proyectos con Jira"),
    issuer:"LinkedIn Learning",
    issued:l("August 2025","Agosto 2025"),
    type:l("Project management","Gestión de proyectos"),
    description:l("Jira workflows and practical project-management organization.","Flujos de Jira y organización práctica de la gestión de proyectos."),
    credentialUrl:"https://www.linkedin.com/learning/certificates/cc8cacc0c311738e174a52ab3b18ca5ca771dc4687ac9840f969befce1adae77/"
  },
  {
    title:l("Generative AI for Business Leaders","IA generativa para líderes empresariales"),
    issuer:"LinkedIn Learning",
    issued:l("August 2025","Agosto 2025"),
    type:l("AI strategy","Estrategia de IA"),
    description:l("Generative-AI strategy, leadership considerations, and business applications.","Estrategia de IA generativa, consideraciones de liderazgo y aplicaciones empresariales."),
    credentialUrl:"https://www.linkedin.com/learning/certificates/39f018a6f6a6ed548f9e994867692b4dc4da025dcc7e58d2318a3e1657e40de1/"
  },
  {
    title:l("Digital Age and Big Data Microcertificate","Microcertificado Digital Age and Big Data"),
    issuer:"Tecnológico de Monterrey",
    issued:l("June 2024","Junio 2024"),
    type:l("Microcertificate","Microcertificado"),
    description:l("Business intelligence, big data, digital-era planning, and data-informed business thinking.","Business intelligence, big data, planeación para la era digital y pensamiento empresarial basado en datos."),
    credentialUrl:"https://www.credential.net/14480d2e-81f0-4567-aee0-3bd48146c5f2?record_view=true"
  }
];

export const certificationText = {
  en:{kicker:"Credentials",title:"Certifications and continuous learning",intro:"Selected programs supporting my work across technology, business, sales, AI, data, and project delivery.",showAll:"View all credentials",showLess:"Show selected credentials",verify:"Verify credential"},
  es:{kicker:"Credenciales",title:"Certificaciones y aprendizaje continuo",intro:"Programas seleccionados que respaldan mi trabajo en tecnología, negocio, ventas, IA, datos y ejecución de proyectos.",showAll:"Ver todas las credenciales",showLess:"Mostrar credenciales principales",verify:"Verificar credencial"}
};
