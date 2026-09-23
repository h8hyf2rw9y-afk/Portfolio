import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Languages } from "lucide-react";
import type { Language } from "../data/content";

type LanguageSelectorProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageSelector({ language, onChange }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", close);
    return () => window.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="language-control" ref={containerRef}>
      <button className="language-trigger" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-haspopup="listbox">
        <Languages /><span>{language.toUpperCase()}</span><ChevronDown className={open ? "rotated" : ""} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="language-menu" role="listbox" initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ duration: 0.18 }}>
            {(["en", "es"] as Language[]).map(code => (
              <button key={code} role="option" aria-selected={language === code} className={language === code ? "active" : ""} onClick={() => { onChange(code); setOpen(false); }}>
                <span>{code === "en" ? "English" : "Español"}</span><small>{code.toUpperCase()}</small>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
