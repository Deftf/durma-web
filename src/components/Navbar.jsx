import { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const links = [
  { name: "Inicio", id: "inicio" },
  { name: "Nosotros", id: "nosotros" },
  { name: "Servicios", id: "servicios" },
  { name: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 1. Manejo del estado "scrolled" para efectos visuales
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // 2. Lógica de Scroll Spy (La que te funcionó)
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Activa la sección cuando está al centro
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Logo desktop - RESTAURADO */}
      <motion.div
        animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -20 : 0 }}
        transition={{ duration: 0.4 }}
        className="hidden md:block fixed top-4 left-20 z-50 pointer-events-auto"
        style={{ pointerEvents: scrolled ? "none" : "auto" }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/etc/logo.png`}
          alt="logo"
          className="h-28 drop-shadow-[0_0_24px_rgba(255,140,0,0.8)]"
        />
      </motion.div>

      <nav className="fixed top-0 left-0 right-0 flex flex-col items-center z-50 pointer-events-none pt-3">
        
        {/* Logo móvil - RESTAURADO */}
        <motion.div
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -8 : 0, scale: scrolled ? 0.8 : 1 }}
          transition={{ duration: 0.35 }}
          className="md:hidden mb-2 pointer-events-auto"
          style={{ pointerEvents: scrolled ? "none" : "auto" }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/etc/logo.png`}
            alt="logo"
            className="h-15 drop-shadow-[0_0_24px_rgba(255,140,0,0.8)]"
          />
        </motion.div>

        {/* Pill (Burbuja blanca) */}
        <LayoutGroup>
          <div
            className={`
              flex items-center gap-3 md:gap-8
              px-4 md:px-12
              rounded-full
              border border-white/10
              backdrop-blur-2xl
              pointer-events-auto
              transition-all duration-300
              w-max
              ${scrolled ? "bg-black/85 shadow-2xl py-2" : "bg-black/60 py-3"}
            `}
          >
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActive(link.id)}
                  className="relative px-3 md:px-5 py-1 whitespace-nowrap group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`
                      relative z-10 text-[10px] md:text-sm tracking-widest uppercase font-medium
                      transition-colors duration-300
                      ${isActive ? "text-black" : "text-white/70 group-hover:text-white"}
                    `}
                  >
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </LayoutGroup>
      </nav>
    </>
  );
}