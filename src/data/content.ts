export type Language = "en" | "es";
export type Localized = { en: string; es: string };
export type Project = {
  label: Localized; title: string; description: Localized; inspiration: Localized;
  stack: string; tone: "violet" | "cyan"; problem: Localized; solution: Localized;
  contribution: Localized; highlights: { en: string[]; es: string[] }; status: Localized;
  repositoryUrl?: string; liveUrl?: string;
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
  {
    label:l("Hackathon · Team project","Hackathon · Proyecto en equipo"), title:"HackMTY · Capital One Challenge",
    description:l("A financial-literacy and customer-engagement prototype delivered during HackMTY 2023 for the Capital One challenge.","Un prototipo de educación financiera y engagement creado durante HackMTY 2023 para el reto de Capital One."),
    inspiration:l("The challenge was to turn an open financial-services brief into a useful product under a 48-hour deadline.","El reto fue convertir un brief abierto de servicios financieros en un producto útil en menos de 48 horas."),
    stack:"T3 Stack · Next.js · TypeScript · Tailwind CSS · API integration", tone:"violet",
    problem:l("Financial information can feel fragmented and difficult for customers to understand or act on.","La información financiera puede sentirse fragmentada y difícil de entender o aprovechar."),
    solution:l("A web prototype designed to make financial interactions clearer and more engaging.","Un prototipo web diseñado para hacer las interacciones financieras más claras y atractivas."),
    contribution:l("Frontend development, interaction design, and integration work within a time-constrained team environment.","Desarrollo frontend, diseño de interacción y trabajo de integración dentro de un equipo con tiempo limitado."),
    highlights:{en:["48-hour delivery","Team collaboration","API-driven product","Rapid prototyping","Financial-services challenge"],es:["Entrega en 48 horas","Colaboración en equipo","Producto conectado a APIs","Prototipado rápido","Reto de servicios financieros"]},
    status:l("Completed team project","Proyecto colaborativo finalizado"),
    repositoryUrl:"https://github.com/EstebanAleman21/404_NOTFOUND"
  },
  {
    label:l("Accessibility · Team project","Accesibilidad · Proyecto en equipo"), title:"Dilo en Señas",
    description:l("A cross-platform mobile experience designed to support communication with the deaf community through text-to-sign-language translation.","Una experiencia móvil multiplataforma diseñada para apoyar la comunicación con la comunidad sorda mediante traducción de texto a lengua de señas."),
    inspiration:l("Accessible software can remove everyday communication barriers when it is designed around the people who need it.","El software accesible puede reducir barreras cotidianas cuando se diseña alrededor de las personas que lo necesitan."),
    stack:"React Native · Mobile UI · API integration · Accessibility", tone:"cyan",
    problem:l("Everyday communication can exclude deaf users when information is available only as written or spoken language.","La comunicación cotidiana puede excluir a personas sordas cuando la información existe únicamente de forma escrita o hablada."),
    solution:l("A mobile interface that translates text into sign-language content through an accessible workflow.","Una interfaz móvil que convierte texto en contenido de lengua de señas mediante un flujo accesible."),
    contribution:l("Accessible UI development, API integration, and a focus on clear, security-conscious interaction design.","Desarrollo de UI accesible, integración de APIs y enfoque en una experiencia clara y consciente de la seguridad."),
    highlights:{en:["Inclusive product thinking","React Native UI","Real-time interaction","API integration","Accessibility principles"],es:["Diseño inclusivo","UI con React Native","Interacción en tiempo real","Integración de APIs","Principios de accesibilidad"]},
    status:l("Completed team project","Proyecto colaborativo finalizado"),
    repositoryUrl:"https://github.com/AlonsoM207/Reto_Equipo1"
  },
  {
    label:l("Document intelligence · Team project","Inteligencia documental · Proyecto en equipo"), title:"FRIDA PDF Analyst",
    description:l("A React interface for uploading and analyzing documents through summaries, indexes, figures, word frequency, and related terms.","Una interfaz React para subir y analizar documentos mediante resúmenes, índices, figuras, frecuencia de palabras y términos relacionados."),
    inspiration:l("Long documents become easier to explore when analysis is divided into focused, navigable views.","Los documentos extensos son más fáciles de explorar cuando el análisis se divide en vistas claras y navegables."),
    stack:"React · Tailwind CSS · REST APIs · Firebase · Authentication", tone:"violet",
    problem:l("Reviewing long documents manually makes it difficult to locate structure, patterns, and relevant information quickly.","Revisar documentos largos manualmente dificulta encontrar estructura, patrones e información relevante con rapidez."),
    solution:l("A multi-step document-analysis workflow that organizes extracted insights into dedicated views.","Un flujo de análisis documental que organiza los resultados extraídos en vistas especializadas."),
    contribution:l("Frontend workflow design for file upload, analysis navigation, authentication, and structured result presentation.","Diseño del flujo frontend para carga de archivos, navegación del análisis, autenticación y presentación estructurada de resultados."),
    highlights:{en:["File-upload UX","Analysis dashboard","Authentication flows","API-connected interface","Structured results"],es:["UX de carga de archivos","Dashboard de análisis","Flujos de autenticación","Interfaz conectada a APIs","Resultados estructurados"]},
    status:l("Completed team project","Proyecto colaborativo finalizado"),
    repositoryUrl:"https://github.com/Spooderman0/pdf-reader"
  },
  {
    label:l("Compiler · Academic project","Compilador · Proyecto académico"), title:"BabyDuck Compiler",
    description:l("A multi-stage compiler covering parsing, semantic validation, intermediate code, virtual memory, and execution through a custom virtual machine.","Un compilador multietapa con parsing, validación semántica, código intermedio, memoria virtual y ejecución mediante una máquina virtual propia."),
    inspiration:l("Building a language from grammar to execution was a way to understand what happens beneath application code.","Construir un lenguaje desde su gramática hasta su ejecución fue una forma de comprender lo que ocurre debajo del código de aplicación."),
    stack:"Java · Maven · ANTLR4 · Virtual machine", tone:"cyan",
    problem:l("A programming language needs a reliable path from source text to validated, executable instructions.","Un lenguaje necesita una ruta confiable desde el código fuente hasta instrucciones validadas y ejecutables."),
    solution:l("A compiler pipeline with lexical, syntactic, and semantic analysis, quadruple generation, memory management, and virtual execution.","Un pipeline con análisis léxico, sintáctico y semántico, generación de cuádruplos, memoria y ejecución virtual."),
    contribution:l("Individual implementation of the compiler architecture, validation stages, intermediate representation, and virtual machine.","Implementación individual de la arquitectura, etapas de validación, representación intermedia y máquina virtual."),
    highlights:{en:["Language grammar","Semantic analysis","Intermediate representation","Virtual memory","Custom VM"],es:["Gramática de lenguaje","Análisis semántico","Representación intermedia","Memoria virtual","Máquina virtual propia"]},
    status:l("Completed academic project","Proyecto académico finalizado"),
    repositoryUrl:"https://github.com/MasterZendika/BabyDuck-Compiler"
  },
  {
    label:l("AI simulation · Academic project","Simulación de IA · Proyecto académico"), title:"Autonomous Harvest Simulation",
    description:l("A 2D agricultural simulation exploring autonomous tractor agents for corn harvesting with Unity ML-Agents.","Una simulación agrícola 2D que explora agentes autónomos para cosecha de maíz con Unity ML-Agents."),
    inspiration:l("Simulation makes it possible to study autonomous behavior, rewards, and failure safely before considering real environments.","La simulación permite estudiar comportamiento autónomo, recompensas y fallos antes de pensar en entornos reales."),
    stack:"Unity · C# · Python · ML-Agents", tone:"violet",
    problem:l("Autonomous harvesting behavior is expensive and risky to test directly in a physical environment.","El comportamiento autónomo de cosecha es costoso y riesgoso de probar directamente en un entorno físico."),
    solution:l("A controlled simulation for modeling the agent, environment, objectives, and reward-driven behavior.","Una simulación controlada para modelar agente, entorno, objetivos y comportamiento basado en recompensas."),
    contribution:l("Agent/environment modeling, simulation design, experimentation, and integration between Unity and the ML workflow.","Modelado de agente y entorno, diseño de simulación, experimentación e integración entre Unity y el flujo de ML."),
    highlights:{en:["Agent modeling","Reward design","Simulation","Unity/Python workflow","Experimentation"],es:["Modelado de agentes","Diseño de recompensas","Simulación","Flujo Unity/Python","Experimentación"]},
    status:l("Completed academic project","Proyecto académico finalizado"),
    repositoryUrl:"https://github.com/MasterZendika/REVISION"
  },
  {
    label:l("Interactive storytelling · Personal project","Narrativa interactiva · Proyecto personal"), title:"Raíces",
    description:l("An interactive visual story about dance, identity, learning, and the idea that art is the anthology of a life.","Una historia visual e interactiva sobre danza, identidad, aprendizaje y la idea de que el arte es la antología de una vida."),
    inspiration:l("Ten years of dance taught me that art is not only the stage; it is every rehearsal, mistake, relationship, and lesson along the way.","Diez años de danza me enseñaron que el arte no es solo el escenario; también es cada ensayo, error, vínculo y aprendizaje del camino."),
    stack:"HTML · CSS · JavaScript · Vercel", tone:"cyan",
    problem:l("A personal artistic journey can lose its emotional meaning when reduced to a static gallery.","Una trayectoria artística puede perder su significado emocional cuando se reduce a una galería estática."),
    solution:l("A cinematic, responsive narrative combining chapters, photography, motion, audio, and visitor reflection.","Una narrativa cinematográfica y adaptable que combina capítulos, fotografía, movimiento, audio y reflexión del visitante."),
    contribution:l("Story structure, interaction design, responsive implementation, gallery behavior, narration, and privacy-conscious visitor messaging.","Estructura narrativa, diseño de interacción, implementación responsive, galería, narración y mensajes de visitantes con privacidad."),
    highlights:{en:["Visual storytelling","Responsive design","Accessible motion","Interactive gallery","Privacy-conscious form"],es:["Narrativa visual","Diseño responsive","Movimiento accesible","Galería interactiva","Formulario con privacidad"]},
    status:l("Published personal project","Proyecto personal publicado"),
    repositoryUrl:"https://github.com/MasterZendika/raices",
    liveUrl:"https://raices-six.vercel.app/"
  }
];

export type Experience = { company: string; period: Localized; role: Localized; meta: Localized; summary: Localized; overview: Localized; responsibilities: { en: string[]; es: string[] }; tools: string; };

export const experiences: Experience[] = [
  {
    company:"Oniria",
    period:l("2026 — Present","2026 — actualidad"),
    role:l("Founder","Fundador"),
    meta:l("Independent software studio · Monterrey, Mexico","Estudio de software independiente · Monterrey, México"),
    summary:l("Building an early-stage software consultancy that turns operational problems into useful digital products.","Construyendo una consultoría de software en etapa inicial que convierte problemas operativos en productos digitales útiles."),
    overview:l("Oniria is an emerging software studio focused on helping teams clarify operational problems, design practical systems, and deliver maintainable web, mobile, data, and AI-enabled solutions. PropPilot is its first vertical product and proving ground.","Oniria es un estudio de software emergente enfocado en ayudar a equipos a entender problemas operativos, diseñar sistemas prácticos y entregar soluciones web, móviles, de datos y con IA que sean mantenibles. PropPilot es su primer producto vertical y campo de validación."),
    responsibilities:{
      en:["Define the studio's positioning, service model, and product direction around software that solves real operating problems.","Lead discovery, product definition, architecture, implementation, and delivery for early projects.","Develop PropPilot as Oniria's first vertical SaaS product for real-estate acquisition and property-flipping operations.","Establish security, privacy, documentation, testing, and human-control principles for AI-enabled systems."],
      es:["Definir el posicionamiento, modelo de servicio y dirección de producto alrededor de software que resuelve problemas operativos reales.","Liderar descubrimiento, definición de producto, arquitectura, implementación y entrega de los primeros proyectos.","Desarrollar PropPilot como el primer producto SaaS vertical de Oniria para adquisición y flipping inmobiliario.","Establecer principios de seguridad, privacidad, documentación, pruebas y control humano para sistemas con IA."]
    },
    tools:"Product discovery · Software consulting · Full-stack delivery · Applied AI · Security · CI/CD"
  },
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

