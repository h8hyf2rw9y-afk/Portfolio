import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Github, Home, Mail, Moon, PanelsTopLeft, Sun, X } from "lucide-react";
import { motion } from "motion/react";
import "./styles.css";

const projects = [
  {
    label: "AI-first CRM · In development",
    title: "State AI / PropPilot",
    description: "A real-estate CRM that connects leads, properties, appointments, opportunities, and AI recommendations through shared context.",
    stack: "FastAPI · PostgreSQL · Supabase · React · AI agents",
    tone: "violet",
    problem: "Real-estate teams lose context across leads, properties, appointments, follow-ups, and transactions.",
    solution: "A shared operating layer where CRM records and AI recommendations use the same customer and pipeline context.",
    contribution: "Product definition, domain modeling, backend architecture, API design, authentication flows, and AI-agent foundations.",
    highlights: ["FastAPI service architecture", "Supabase authentication", "Opportunity pipeline", "Buyer requirements and matching", "AI recommendations with human control"],
    status: "Active development",
  },
  {
    label: "Operations system",
    title: "Crestify",
    description: "A workspace for owners, buyers, documents, urgent follow-ups, property visits, and closings.",
    stack: "CRM design · Process mapping · Real-estate operations",
    tone: "cyan",
    problem: "Property information, client follow-up, documentation, and next actions were fragmented across separate tools.",
    solution: "A centralized workspace for daily priorities, owners, buyers, documents, visits, tasks, and closings.",
    contribution: "Workflow research, information architecture, CRM structure, pipeline design, and operational use in real-estate work.",
    highlights: ["Lead and property organization", "Urgent follow-up dashboard", "Task and visit tracking", "Document control", "Closing pipeline"],
    status: "Operational case study",
  },
];

const capabilities = [
  "Applied AI", "AI agents", "Business development", "Customer discovery",
  "CRM workflows", "Pipeline management", "Business analysis",
  "Process improvement", "FastAPI", "PostgreSQL", "Supabase", "React",
];

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if (!selectedProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <main className="shell">
        <header className="hero" id="home">
          <div className="availability"><span /> Open to opportunities · Monterrey / Remote</div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            Emiliano<br />González Romo
          </motion.h1>
          <p className="lede">Computer Science graduate working at the intersection of applied AI, customer problems, and business operations. I turn ambiguous workflows into practical systems people can use.</p>
          <div className="actions">
            <a className="button primary" href="#work">View selected work <ArrowUpRight size={16} /></a>
            <a className="button" href="https://github.com/h8hyf2rw9y-afk" target="_blank" rel="noopener noreferrer">GitHub <Github size={16} /></a>
          </div>
        </header>

        <section id="about">
          <p className="kicker">About</p>
          <h2>Technical enough to build. Commercial enough to understand why.</h2>
          <p className="body-copy">My work connects software, sales, and operations. I have designed CRM workflows for real-estate teams, explored AI agents that share context and take useful actions, and worked directly with leads, properties, follow-up, and customer decisions.</p>
        </section>

        <section id="experience">
          <p className="kicker">Experience</p><h2>Where I create value</h2>
          <div className="timeline">
            <article><time>2025 — Present</time><div><h3>Independent Real Estate Advisor</h3><p>Lead qualification, comparative market analysis, pipeline management, property visits, negotiation, and transaction documentation.</p></div></article>
            <article><time>Selected experience</time><div><h3>Technology & business projects</h3><p>Product work and experience connected to State AI, Crestify, Nodoo, Wizeline, Softtek, and Arca Continental. Verified scope and outcomes will be added from the final résumé source.</p></div></article>
          </div>
        </section>

        <section id="work">
          <p className="kicker">Selected work</p><h2>Projects built around real workflows</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.button type="button" className={`project-card ${project.tone}`} key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} onClick={() => setSelectedProject(project)} aria-label={`View details for ${project.title}`}>
                <span className="tag">{project.label}</span>
                <div><h3>{project.title}</h3><p>{project.description}</p><small>{project.stack}</small><span className="view-project">Explore project <ArrowUpRight size={15} /></span></div>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="skills">
          <p className="kicker">Capabilities</p><h2>What I bring to a team</h2>
          <div className="pills">{capabilities.map(item => <span key={item}>{item}</span>)}</div>
        </section>

        <section id="education">
          <p className="kicker">Education</p><h2>Foundation and continuous learning</h2>
          <div className="timeline">
            <article><time>Graduated 2025</time><div><h3>B.S. in Computer Science and Technology</h3><p>Tecnológico de Monterrey · Monterrey Campus</p></div></article>
            <article><time>Professional learning</time><div><h3>Selected programs</h3><p>McKinsey Forward · AWS Cloud Foundations · Dell Setting Up Your Sale · Introduction to Generative AI · Jira · CAPM preparation</p></div></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="kicker">Contact</p>
          <h2>Have a customer problem that needs technical and business thinking?</h2>
          <p className="body-copy">I am exploring Sales/GTM, Solutions & Applied AI, and Business Operations roles.</p>
          <div className="contact-card">
            <div><span>Private contact</span><strong>em••••••@gmail.com</strong><p>Your message can reach me without exposing my personal address.</p></div>
            <button type="button" disabled title="Secure contact form is being configured">Secure contact coming soon <Mail size={16} /></button>
          </div>
        </section>
        <footer>© 2026 Emiliano González Romo · Built to show the work behind the résumé.</footer>
      </main>

      {selectedProject && (
        <motion.div className="project-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null);
        }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" initial={{ opacity: 0, y: 36, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 280, damping: 28 }}>
            <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X /></button>
            <span className="tag">{selectedProject.label}</span>
            <h2 id="project-title">{selectedProject.title}</h2>
            <p className="modal-intro">{selectedProject.description}</p>
            <div className="detail-grid">
              <div><span>Problem</span><p>{selectedProject.problem}</p></div>
              <div><span>Solution</span><p>{selectedProject.solution}</p></div>
            </div>
            <div className="detail-block"><span>My contribution</span><p>{selectedProject.contribution}</p></div>
            <div className="detail-block"><span>Key capabilities</span><ul>{selectedProject.highlights.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="modal-footer"><div><span>Status</span><strong>{selectedProject.status}</strong></div><small>{selectedProject.stack}</small></div>
          </motion.section>
        </motion.div>
      )}

      <nav className="dock" aria-label="Portfolio navigation">
        <a href="#home" aria-label="Home"><Home /></a>
        <a href="#work" aria-label="Projects"><PanelsTopLeft /></a>
        <a href="#experience" aria-label="Experience"><BriefcaseBusiness /></a>
        <a href="#contact" aria-label="Contact"><Mail /></a>
        <button onClick={() => setDark(value => !value)} aria-label="Toggle color theme">{dark ? <Sun /> : <Moon />}</button>
      </nav>
    </>
  );
}
