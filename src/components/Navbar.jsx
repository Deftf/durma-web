import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Inicio", id: "inicio" },
  { name: "Nosotros", id: "nosotros" },
  { name: "Servicios", id: "servicios" },
  { name: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeElement = document.querySelector(
      `[data-id="${active}"]`
    );
    if (activeElement && containerRef.current) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto"
    >
      <motion.div
        ref={containerRef}
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
          scale: scrolled ? 0.96 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`
          relative flex items-center gap-6 md:gap-10
          px-6 md:px-10
          rounded-full
          border border-white/10
          backdrop-blur-2xl
          overflow-x-auto scrollbar-hide
          ${scrolled ? "bg-black/80 shadow-2xl" : "bg-black/60"}
        `}
      >
        {links.map((link) => {
          const isActive = active === link.id;

          return (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              key={link.id}
              href={`#${link.id}`}
              data-id={link.id}
              className="relative px-4 py-1 whitespace-nowrap group"
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span
                className={`
                  relative z-10 text-xs md:text-sm tracking-widest uppercase
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-black"
                      : "text-white/70 group-hover:text-white"
                  }
                `}
              >
                {link.name}
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.nav>
  );
}