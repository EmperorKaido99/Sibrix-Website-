import { motion } from "framer-motion";
import { ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimateOnScroll = memo(({ children, className = "", delay = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ 
      duration: 0.5, 
      delay, 
      ease: [0.25, 0.1, 0.25, 1] // Smooth easing
    }}
    className={className}
  >
    {children}
  </motion.div>
));

AnimateOnScroll.displayName = "AnimateOnScroll";

export default AnimateOnScroll;
