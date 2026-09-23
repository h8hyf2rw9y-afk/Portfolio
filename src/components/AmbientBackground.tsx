import { motion, useScroll, useTransform } from "motion/react";

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const orbOneY = useTransform(scrollYProgress, [0, 1], [-80, 420]);
  const orbOneX = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [120, -360]);
  const orbTwoX = useTransform(scrollYProgress, [0, 1], [-80, 220]);
  const orbThreeY = useTransform(scrollYProgress, [0, 1], [160, -460]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.28, 0.92]);

  return (
    <div className="ambient-background" aria-hidden="true">
      <motion.span className="ambient-orb orb-one" style={{ x: orbOneX, y: orbOneY, scale: orbScale }} />
      <motion.span className="ambient-orb orb-two" style={{ x: orbTwoX, y: orbTwoY, scale: orbScale }} />
      <motion.span className="ambient-orb orb-three" style={{ y: orbThreeY, scale: orbScale }} />
      <span className="ambient-grid" />
    </div>
  );
}
