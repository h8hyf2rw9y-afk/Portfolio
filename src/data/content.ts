export type Language = "en" | "es";
export type Localized = { en: string; es: string };
export type Project = {
  label: Localized; title: string; description: Localized; inspiration: Localized;
  stack: string; tone: "violet" | "cyan"; problem: Localized; solution: Localized;
  contribution: Localized; highlights: { en: string[]; es: string[] }; status: Localized;
};
const l = (en: string, es: string): Localized => ({ en, es });

export const projects: Project[] = [
  {
    label:l("AI-first CRM · In development","CRM AI-first · En desarrollo"), title:"State AI / PropPilot",
    description:l("A real-estate CRM connecting leads, properties, appointments, opportunities, and AI recommendations through shared context.","Un CRM inmobiliario que conecta prospectos, propiedades, citas, oportunidades y recomendaciones de IA mediante contexto compartido."),
    inspiration:l("I was inspired by seeing how easily an agent loses context when clients, properties, appointments, and follow-ups live in separate places.","Me inspiró ver lo fácil que un asesor pierde contexto cuando clientes, propiedades, citas y seguimientos viven en lugares separados."),
    stack:"FastAPI · PostgreSQL · Supabase · React · AI agents", tone:"violet",
    problem:l("Real-estate teams lose context across leads, properties, appointments, follow-ups, and transactions.","Los equipos inmobiliarios pierden contexto entre prospectos, propiedades, citas, seguimientos y operaciones."),
    solution:l("A shared operating layer where CRM records and AI recommendations use the same customer and pipeline context.","Una capa operativa compartida donde los registros del CRM y las recomendaciones de IA usan el mismo contexto."),
    contribution:l("Product definition, domain modeling, backend architecture, API design, authentication flows, and AI-agent foundations.","Definición de producto, modelado de dominio, arquitectura backend, APIs, autenticación y bases de agentes de IA."),
    highlights:{en:["FastAPI architecture","Supabase authentication","Opportunity pipeline","Buyer matching","Human-controlled AI"],es:["Arquitectura FastAPI","Autenticación Supabase","Pipeline de oportunidades","Matching de compradores","IA bajo control humano"]},
    status:l("Active development","Desarrollo activo")
  },
  {
    label:l("Operations system","Sistema de operaciones"), title:"Crestify",
    description:l("A workspace for owners, buyers, documents, urgent follow-ups, property visits, and closings.","Un espacio de trabajo para propietarios, compradores, documentos, seguimientos urgentes, visitas y cierres."),
    inspiration:l("I created it from my own need to organize daily real-estate work and know exactly what required attention next.","Lo creé por mi propia necesidad de organizar el trabajo inmobiliario diario y saber exactamente qué requería atención."),
    stack:"CRM design · Process mapping · Real-estate operations", tone:"cyan",
    problem:l("Property information, client follow-up, documentation, and next actions were fragmented across separate tools.","La información de propiedades, seguimiento, documentos y próximas acciones estaba fragmentada."),
    solution:l("A centralized workspace for priorities, clients, documents, visits, tasks, and closings.","Un espacio centralizado para prioridades, clientes, documentos, visitas, tareas y cierres."),
    contribution:l("Workflow research, information architecture, CRM structure, pipeline design, and operational use.","Investigación de flujos, arquitectura de información, estructura CRM, diseño de pipeline y uso operativo."),
    highlights:{en:["Lead organization","Urgent follow-up","Task tracking","Document control","Closing pipeline"],es:["Organización de prospectos","Seguimiento urgente","Control de tareas","Control documental","Pipeline de cierres"]},
    status:l("Operational case study","Caso de estudio operativo")
  },
  ...[
    ["Lead Signal","Señales de prospectos","A qualification workspace that turns inbound signals into a prioritized queue.","Un espacio de calificación que convierte señales entrantes en una fila priorizada.","Deciding which lead deserves attention first.","Decidir qué prospecto merece atención primero.","Lead scoring · CRM workflows","A consistent way to identify urgency was missing.","Faltaba una forma consistente de identificar urgencia.","An explainable priority and next-action queue.","Una fila explicable de prioridad y próxima acción."],
    ["Showing Brief","Resumen de visita","A mobile property briefing with essential client and property context.","Un resumen móvil con el contexto esencial del cliente y la propiedad.","Preparing quickly between property appointments.","Prepararse rápidamente entre citas de propiedades.","Mobile UX · Property data","Requirements and details were scattered before showings.","Los requisitos y detalles estaban dispersos antes de las visitas.","A concise brief with facts, questions, and objectives.","Un resumen conciso con datos, preguntas y objetivos."],
    ["Pipeline Pulse","Pulso del pipeline","A weekly view of stalled opportunities, overdue actions, and movement.","Una vista semanal de oportunidades detenidas, acciones vencidas y movimiento.","Understanding pipeline health without opening every record.","Entender la salud del pipeline sin abrir cada registro.","Analytics · Sales operations","Totals hid where work was becoming stuck.","Los totales ocultaban dónde se detenía el trabajo.","A view connecting movement, inactivity, risk, and actions.","Una vista que conecta movimiento, inactividad, riesgo y acciones."],
    ["Client Handoff","Entrega de cliente","A structured handoff between sales, implementation, and support.","Una entrega estructurada entre ventas, implementación y soporte.","Preventing customer expectations from disappearing between teams.","Evitar que las expectativas del cliente se pierdan entre equipos.","Customer operations · Automation","Teams repeated discovery and lost commitments.","Los equipos repetían el descubrimiento y perdían compromisos.","A shared record of goals, decisions, risks, and owners.","Un registro compartido de objetivos, decisiones, riesgos y responsables."],
    ["Deal Room","Sala de operación","A secure checklist and document workspace for transaction closing.","Un espacio seguro de listas y documentos para el cierre de operaciones.","Coordinating people, files, dates, and decisions in a closing.","Coordinar personas, archivos, fechas y decisiones en un cierre.","Documents · Task coordination","Closing work was disconnected across messages and folders.","El trabajo de cierre estaba desconectado entre mensajes y carpetas.","One checklist showing what is complete, blocked, and owned.","Una lista que muestra qué está completo, bloqueado y asignado."],
    ["Market Lens","Perspectiva de mercado","A comparative property analysis that explains pricing decisions.","Un análisis comparativo que explica decisiones de precio.","Turning market information into a clear client recommendation.","Convertir información de mercado en una recomendación clara.","Data visualization · CMA","Comparable data overwhelmed clients without a narrative.","Los comparables abrumaban al cliente sin una narrativa.","A guided comparison of evidence and pricing scenarios.","Una comparación guiada de evidencia y escenarios de precio."],
    ["Follow-up Studio","Estudio de seguimiento","A human-controlled assistant for contextual follow-up drafts.","Un asistente bajo control humano para redactar seguimientos con contexto.","Saving time without making messages feel generic.","Ahorrar tiempo sin hacer que los mensajes se sientan genéricos.","Applied AI · Messaging","Generic automation lacked context and trust.","La automatización genérica carecía de contexto y confianza.","Context-aware drafts reviewed by the advisor.","Borradores con contexto revisados por el asesor."],
    ["Workday Score","Puntaje diario","A dashboard balancing focused work, clients, learning, and wellbeing.","Un tablero que equilibra trabajo enfocado, clientes, aprendizaje y bienestar.","Measuring progress without treating every day as identical.","Medir progreso sin tratar todos los días como idénticos.","Personal analytics · Habit systems","Rigid systems punished necessary schedule changes.","Los sistemas rígidos castigaban cambios necesarios.","Flexible scores, area streaks, and weekly reflection.","Puntajes flexibles, rachas por área y reflexión semanal."]
  ].map(([title,titleEs,desc,descEs,insp,inspEs,stack,problem,problemEs,solution,solutionEs], index): Project => ({
    label:l("Layout demo · Concept","Demo de diseño · Concepto"), title,
    description:l(desc,descEs), inspiration:l(insp,inspEs), stack,
    tone:index % 2 === 0 ? "violet" : "cyan",
    problem:l(problem,problemEs), solution:l(solution,solutionEs),
    contribution:l("Concept definition, workflow mapping, and experience design.","Definición del concepto, mapeo del flujo y diseño de experiencia."),
    highlights:{en:["Workflow concept","Information design","User context","Clear next actions","Responsive experience"],es:["Concepto de flujo","Diseño de información","Contexto del usuario","Próximas acciones claras","Experiencia adaptable"]},
    status:l("Layout demonstration","Demostración de diseño")
  }))
];

export type Experience = { company: string; period: Localized; role: Localized; meta: Localized; summary: Localized; overview: Localized; responsibilities: { en: string[]; es: string[] }; tools: string; };

export const experiences: Experience[] = [
  {
    company:"Crestify",
    period:l("Feb 2025 — Present","feb. 2025 — actualidad"),
    role:l("Founding Engineer","Founding Engineer"),
    meta:l("Full-time · Monterrey, Nuevo León, Mexico","Jornada completa · Monterrey, Nuevo León, México"),
    summary:l("Own product roadmap, technical architecture, client requirements, and hands-on development of Crestify's core platform.","Responsable del roadmap, arquitectura técnica, requisitos con clientes y desarrollo directo de la plataforma central de Crestify."),
    overview:l("Launched Crestify's MVP while completing the final year of my B.S. and scaled the platform after graduation, combining product ownership, architecture, development, operations, and team leadership.","Lancé el MVP de Crestify durante el último año de mi carrera y escalé la plataforma después de graduarme, combinando producto, arquitectura, desarrollo, operaciones y liderazgo."),
    responsibilities:{
      en:[
        "Owned the product roadmap, technical architecture, and requirements gathered directly from clients and investors.",
        "Closed property deals and helped secure an outside investment round while owning product design and MVP development.",
        "Recruited, onboarded, and managed a five-person prospecting team through weekly coaching and performance follow-up.",
        "Managed an approximately $10,000 MXN monthly cloud and marketing budget, reducing estimated operating costs by 20–25%.",
        "Designed the data model and built the core property-flipping CRM with React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Supabase, and PostgreSQL.",
        "Implemented Supabase Authentication and Row Level Security across core CRM tables for role-based access to client and deal data."
      ],
      es:[
        "Dirigí el roadmap, la arquitectura técnica y el levantamiento de requisitos directamente con clientes e inversionistas.",
        "Cerré operaciones inmobiliarias y apoyé una ronda de inversión externa mientras lideraba diseño de producto y desarrollo del MVP.",
        "Recluté, incorporé y gestioné un equipo de prospección de cinco personas mediante coaching semanal y seguimiento de desempeño.",
        "Administré un presupuesto aproximado de $10,000 MXN mensuales en nube y marketing, reduciendo costos operativos estimados entre 20–25%.",
        "Diseñé el modelo de datos y construí el CRM central de flipping con React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Supabase y PostgreSQL.",
        "Implementé autenticación de Supabase y Row Level Security en las tablas centrales para controlar datos de clientes y operaciones por rol."
      ]
    },
    tools:"React · TypeScript · Vite · Tailwind CSS · shadcn/ui · Supabase · PostgreSQL · Google Cloud"
  },
  {
    company:"Crestify",
    period:l("Feb 2023 — Jan 2025 · 2 years","feb. 2023 — ene. 2025 · 2 años"),
    role:l("Co-Founder","Co-Founder"),
    meta:l("Self-employed · On-site · Monterrey, Mexico","Autónomo · Presencial · Monterrey, México"),
    summary:l("Co-founded Crestify and led the market, property-data, and business groundwork that preceded the platform.","Cofundé Crestify y lideré la base de mercado, datos inmobiliarios y planeación que antecedió a la plataforma."),
    overview:l("Built the early foundation for Crestify before the formal Founding Engineer stage, combining real-estate research with business and product planning.","Construí la base inicial de Crestify antes de la etapa formal como Founding Engineer, combinando investigación inmobiliaria con planeación de negocio y producto."),
    responsibilities:{
      en:["Conducted market analysis and property-data research for the property-flipping model.","Worked with a co-founder to structure the business and define the initial operating model.","Translated early operational needs into the product direction later formalized as Crestify's CRM."],
      es:["Realicé análisis de mercado e investigación de datos de propiedades para el modelo de flipping.","Trabajé con un cofundador para estructurar el negocio y definir el modelo operativo inicial.","Convertí necesidades operativas tempranas en la dirección de producto que posteriormente se formalizó como el CRM de Crestify."]
    },
    tools:"Market analysis · Property research · Business planning · Product planning"
  },
  {
    company:"Wizeline",
    period:l("Aug 2024 — Jan 2025 · 6 months","ago. 2024 — ene. 2025 · 6 meses"),
    role:l("Full-Stack Developer Intern","Practicante Full-Stack Developer"),
    meta:l("Internship · Remote · Monterrey, Mexico","Prácticas · Remoto · Monterrey, México"),
    summary:l("Built backend and mobile features for an internal employee-learning platform.","Construí funcionalidades backend y móviles para una plataforma interna de aprendizaje."),
    overview:l("Contributed across backend, mobile, infrastructure, testing, and documentation within a Scrum delivery environment.","Contribuí en backend, móvil, infraestructura, pruebas y documentación dentro de un entorno Scrum."),
    responsibilities:{
      en:["Built backend features in Odoo's Python/XML framework, with light Java integration work.","Containerized the platform with Docker and supported deployment on AWS EC2 and Lambda-based functions.","Built a React Native companion app including UI, visual design, and animations.","Used GitHub Actions CI/CD pipelines for automated builds and deployment.","Worked in Scrum sprints and performed technical documentation, functional testing, and debugging."],
      es:["Construí funcionalidades backend en Odoo con Python/XML y apoyo ligero en integraciones Java.","Contenericé la plataforma con Docker y apoyé el despliegue en AWS EC2 y funciones Lambda.","Construí una aplicación complementaria en React Native, incluyendo UI, diseño visual y animaciones.","Utilicé pipelines CI/CD de GitHub Actions para builds y despliegues automatizados.","Trabajé en sprints Scrum y realicé documentación técnica, pruebas funcionales y debugging."]
    },
    tools:"Python · XML · Odoo · React Native · Docker · AWS EC2 · AWS Lambda · GitHub Actions"
  },
  {
    company:"Nodoo",
    period:l("Feb 2023 — Jul 2024 · 1 year 6 months","feb. 2023 — jul. 2024 · 1 año 6 meses"),
    role:l("Sales Engineer","Sales Engineer"),
    meta:l("Full-time · Hybrid","Jornada completa · Híbrido"),
    summary:l("Managed B2B prospecting and onboarding across fintech, e-commerce, and digital-services accounts.","Gestioné prospección y onboarding B2B para cuentas fintech, e-commerce y servicios digitales."),
    overview:l("Connected commercial discovery with technical solution framing and used adoption and revenue signals to support go-to-market decisions.","Conecté el descubrimiento comercial con propuestas técnicas y utilicé señales de adopción e ingresos para apoyar decisiones go-to-market."),
    responsibilities:{
      en:["Translated client requirements into tailored technical proposals.","Managed B2B prospecting and onboarding across multiple digital industries.","Tracked engagement, retention, and revenue KPIs with sales, product, and marketing."],
      es:["Traduje requisitos del cliente en propuestas técnicas personalizadas.","Gestioné prospección y onboarding B2B en distintas industrias digitales.","Di seguimiento a KPIs de engagement, retención e ingresos con ventas, producto y marketing."]
    },
    tools:"B2B sales · Technical proposals · Client onboarding · Commercial KPIs · Go-to-market"
  },
  {
    company:"Softtek",
    period:l("Aug 2022 — Jan 2023 · 6 months","ago. 2022 — ene. 2023 · 6 meses"),
    role:l("Technology & Business Project Analyst","Analista de Proyectos de Tecnología y Negocio"),
    meta:l("Part-time · Hybrid · Mexico","Jornada parcial · Híbrido · México"),
    summary:l("Built an LLM-assisted research workflow and collaborated across engineering and business teams.","Construí un flujo de investigación asistido por un LLM y colaboré entre equipos técnicos y de negocio."),
    overview:l("Combined Python development, structured data extraction, product measurement, and cross-functional requirements work.","Combiné desarrollo en Python, extracción estructurada de datos, medición de producto y levantamiento de requisitos."),
    responsibilities:{
      en:["Built Python backend scripts integrating ChatGPT to interpret and summarize research papers into structured database records.","Measured a 35% improvement in product efficiency and helped increase paper-review throughput by 33%.","Gathered requirements, prioritized features, validated solution design, and created a communication framework that reduced decision delays."],
      es:["Construí scripts backend en Python integrando ChatGPT para interpretar y resumir papers en registros estructurados.","Medí una mejora de 35% en la eficiencia del producto y un aumento de 33% en la capacidad de revisión de papers.","Levanté requisitos, prioricé funciones, validé el diseño y establecí un marco de comunicación que redujo demoras."]
    },
    tools:"Python · LLM integration · Structured data · Agile/Scrum · Product measurement"
  },
  {
    company:"Arca Continental",
    period:l("Jan 2022 — Jun 2022 · 6 months","ene. 2022 — jun. 2022 · 6 meses"),
    role:l("Jr. Special Project Manager Intern","Practicante Jr. Special Project Manager"),
    meta:l("Internship · On-site · Mexico","Prácticas · Presencial · México"),
    summary:l("Defined a VR-based internal-training solution aligned with operational requirements.","Definí una solución de capacitación interna basada en realidad virtual y alineada con requisitos operativos."),
    overview:l("Translated an operational training challenge into technical and business specifications and measurable outcomes.","Convertí un reto operativo de capacitación en especificaciones técnicas, de negocio y resultados medibles."),
    responsibilities:{
      en:["Analyzed and defined a VR solution to modernize internal training.","Translated operational needs into technical and business specifications.","Helped reduce average training time by 25% by aligning design decisions with measurable outcomes."],
      es:["Analicé y definí una solución de realidad virtual para modernizar la capacitación interna.","Traduje necesidades operativas en especificaciones técnicas y de negocio.","Ayudé a reducir 25% el tiempo promedio de capacitación alineando el diseño con resultados medibles."]
    },
    tools:"Project analysis · VR · Requirements · Business specifications · Outcome measurement"
  }
];

export const copy = {
  en:{available:"Open to opportunities · Monterrey / Remote",hero:"Computer Science graduate working at the intersection of applied AI, customer problems, and business operations. I turn ambiguous workflows into practical systems people can use.",view:"View selected work",about:"About",aboutTitle:"Technical enough to build. Commercial enough to understand why.",aboutBody:"My work connects software, sales, and operations. I design CRM workflows, explore AI agents that share context and take useful actions, and work directly with leads, properties, follow-up, and customer decisions.",experience:"Experience",value:"Where I create value",realEstate:"Independent Real Estate Advisor",realEstateBody:"Lead qualification, comparative market analysis, pipeline management, property visits, negotiation, and transaction documentation.",selected:"Selected experience",tech:"Technology & business projects",techBody:"Product work connected to State AI, Crestify, Nodoo, Wizeline, Softtek, and Arca Continental. Verified scope and outcomes will be added from the final résumé.",work:"Selected work",workTitle:"Projects built around real workflows",inspired:"What inspired me",explore:"Explore project",skills:"Capabilities",skillsTitle:"What I bring to a team",education:"Education",educationTitle:"Foundation and continuous learning",degree:"B.S. in Computer Science and Technology",graduated:"Graduated 2025",learning:"Professional learning",programs:"Selected programs",contact:"Contact",contactTitle:"Have a customer problem that needs technical and business thinking?",contactBody:"I am exploring Sales/GTM, Solutions & Applied AI, and Business Operations roles.",privateContact:"Private contact",privateBody:"Your message can reach me without exposing my personal address.",coming:"Secure contact coming soon",problem:"Problem",solution:"Solution",contribution:"My contribution",capabilities:"Key capabilities",status:"Status",close:"Close project details",copyright:"Built to show the work behind the résumé.",github:"GitHub"},
  es:{available:"Disponible para oportunidades · Monterrey / Remoto",hero:"Egresado de Ciencias Computacionales trabajando en la intersección de IA aplicada, problemas del cliente y operaciones. Convierto flujos ambiguos en sistemas prácticos que las personas pueden usar.",view:"Ver proyectos",about:"Sobre mí",aboutTitle:"Con capacidad técnica para construir y visión comercial para entender por qué.",aboutBody:"Mi trabajo conecta software, ventas y operaciones. Diseño flujos de CRM, exploro agentes de IA que comparten contexto y toman acciones útiles, y trabajo directamente con prospectos, propiedades, seguimiento y decisiones del cliente.",experience:"Experiencia",value:"Dónde genero valor",realEstate:"Asesor inmobiliario independiente",realEstateBody:"Calificación de prospectos, análisis comparativo de mercado, gestión de pipeline, visitas, negociación y documentación de operaciones.",selected:"Experiencia seleccionada",tech:"Proyectos de tecnología y negocio",techBody:"Trabajo de producto relacionado con State AI, Crestify, Nodoo, Wizeline, Softtek y Arca Continental. El alcance y los resultados verificados se agregarán desde el CV final.",work:"Trabajo seleccionado",workTitle:"Proyectos construidos alrededor de flujos reales",inspired:"Qué me inspiró",explore:"Explorar proyecto",skills:"Capacidades",skillsTitle:"Lo que aporto a un equipo",education:"Educación",educationTitle:"Base profesional y aprendizaje continuo",degree:"Ingeniería en Tecnologías Computacionales",graduated:"Graduado en 2025",learning:"Aprendizaje profesional",programs:"Programas seleccionados",contact:"Contacto",contactTitle:"¿Tienes un problema de cliente que requiere pensamiento técnico y de negocio?",contactBody:"Estoy explorando puestos en Sales/GTM, Solutions & Applied AI y Business Operations.",privateContact:"Contacto privado",privateBody:"Tu mensaje puede llegarme sin exponer mi dirección personal.",coming:"Contacto seguro próximamente",problem:"Problema",solution:"Solución",contribution:"Mi contribución",capabilities:"Capacidades principales",status:"Estado",close:"Cerrar detalles del proyecto",copyright:"Creado para mostrar el trabajo detrás del currículum.",github:"GitHub"}
};

