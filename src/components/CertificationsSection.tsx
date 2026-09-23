import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Award, ChevronDown, ExternalLink } from "lucide-react";
import { certificationText, certifications, type CertificationLanguage } from "../data/certifications";

type CertificationsSectionProps = { language: CertificationLanguage };

export function CertificationsSection({ language }: CertificationsSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const t = certificationText[language];
  const visible = expanded ? certifications : certifications.filter(item => item.featured);

  return (
    <section id="certifications">
      <p className="kicker">{t.kicker}</p>
      <h2>{t.title}</h2>
      <p className="body-copy certifications-intro">{t.intro}</p>
      <motion.div className="certification-grid" layout>
        <AnimatePresence initial={false}>
          {visible.map((certificate, index) => (
            <motion.article
              className="certification-card"
              key={certificate.title.en}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: Math.min(index, 4) * 0.04 }}
            >
              <div className="certification-icon"><Award /></div>
              <span className="certification-type">{certificate.type[language]}</span>
              <h3>{certificate.title[language]}</h3>
              <p className="certification-issuer">{certificate.issuer}</p>
              <p>{certificate.description[language]}</p>
              <footer>
                <time>{certificate.issued[language]}</time>
                {certificate.credentialUrl && (
                  <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                    {t.verify}<ExternalLink />
                  </a>
                )}
              </footer>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <button className="certification-toggle" type="button" onClick={() => setExpanded(value => !value)} aria-expanded={expanded}>
        {expanded ? t.showLess : t.showAll}
        <ChevronDown className={expanded ? "rotated" : ""} />
      </button>
    </section>
  );
}
