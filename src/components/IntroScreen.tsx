import { AnimatePresence, motion } from "motion/react";
import "@fontsource-variable/caveat";

type IntroScreenProps = { visible: boolean };

export function IntroScreen({ visible }: IntroScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.48, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className="intro-mark">
            <svg className="intro-signature-svg" viewBox="0 0 760 190" role="presentation">
              <defs>
                <clipPath id="signature-reveal">
                  <motion.rect
                    x="0"
                    y="0"
                    height="190"
                    initial={{ width: 0 }}
                    animate={{ width: 760 }}
                    transition={{ delay: 0.12, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                </clipPath>
              </defs>
              <motion.text
                x="380"
                y="132"
                textAnchor="middle"
                clipPath="url(#signature-reveal)"
                initial={{ strokeDashoffset: 900, fillOpacity: 0 }}
                animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
                transition={{ strokeDashoffset: { duration: 1.05 }, fillOpacity: { delay: 0.72, duration: 0.3 } }}
                strokeDasharray="900"
              >
                Emiliano
              </motion.text>
            </svg>
            <motion.i initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.48, duration: 0.66 }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
