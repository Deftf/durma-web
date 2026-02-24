import { motion } from "framer-motion";

export default function IntroScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <img
        src="/init1.jpg"
        alt="Metal industrial"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
