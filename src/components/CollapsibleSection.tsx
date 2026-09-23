import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

type CollapsibleSectionProps = {
  id: string;
  kicker: string;
  title: string;
  language: "en" | "es";
  defaultOpen?: boolean;
  children: ReactNode;
};

export function CollapsibleSection({
  id,
  kicker,
  title,
  language,
  defaultOpen = true,
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const label = open
    ? language === "en" ? "Collapse section" : "Contraer sección"
    : language === "en" ? "Expand section" : "Expandir sección";

  return (
    <section id={id} className="collapsible-section">
      <div className="section-heading">
        <div>
          <p className="kicker">{kicker}</p>
          <h2>{title}</h2>
        </div>
        <button
          className="section-collapse-button"
          type="button"
          onClick={() => setOpen(value => !value)}
          aria-expanded={open}
          aria-controls={`${id}-content`}
          aria-label={label}
          title={label}
        >
          <ChevronDown className={open ? "rotated" : ""} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-content`}
            className="section-content"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
