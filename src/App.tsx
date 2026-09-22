import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Github, Home, Mail, Moon, PanelsTopLeft, Sun } from "lucide-react";
import { motion } from "motion/react";
import "./styles.css";

const projects = [
  {
    label: "AI-first CRM · In development",
    title: "State AI / PropPilot",
    description: "A real-estate CRM that connects leads, properties, appointments, opportunities, and AI recommendations through shared context.",
    stack: "FastAPI · PostgreSQL · Supabase · React · AI agents",
    tone: "violet",
  },
  {
    label: "Operations system",
    title: "Crestify",
    description: "A workspace for owners, buyers, documents, urgent follow-ups, property visits, and closings.",
    stack: "CRM design · Process mapping · Real-estate operations",
    tone: "cyan",
  },
];

const capabilities = [
  "Applied AI", "AI agents", "Business development", "Customer discovery",
  "CRM workflows", "Pipeline management", "Business analysis",
  "Process improvement", "FastAPI", "PostgreSQL", "Supabase", "React",
];

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

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
              <motion.article className={`project-card ${project.tone}`} key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
                <span className="tag">{project.label}</span>
                <div><h3>{project.title}</h3><p>{project.description}</p><small>{project.stack}</small></div>
              </motion.article>
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
