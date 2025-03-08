import { motion } from 'framer-motion';

const AnimatedToggleIcon = ({ icon }) => {
  return (
    <motion.span
      className="absolute block rounded-full bg-zinc-50 p-1 text-4xl left-[-15px]"
    >
      {icon}
    </motion.span>
  );
}

export default AnimatedToggleIcon;
