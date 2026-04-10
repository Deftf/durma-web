import { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const links = [
  { name: "Inicio",    id: "inicio"    },
  { name: "Nosotros",  id: "nosotros"  },
  { name: "Servicios", id: "servicios" },
  { name: "Contacto",  id: "contacto"  },
];

export default function Navbar() {
  const [active,   setActive]   = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── Logo desktop ─────────────────────────────────────────── */}
      <motion.div
        animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -20 : 0 }}
        transition={{ duration: 0.4 }}
        className="hidden md:block fixed top-4 left-20 z-50"
        style={{ pointerEvents: scrolled ? "none" : "auto" }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/etc/logo.png`}
          alt="logo"
          className="h-28 no-filter drop-shadow-[0_0_28px_rgba(32,150,166,0.45)]"
        />
      </motion.div>

      {/* ── Navbar ───────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 flex flex-col items-center z-50 pointer-events-none pt-3">

        {/* Logo móvil — se encoge y sube al hacer scroll */}
        <motion.div
          animate={{
            opacity: scrolled ? 0 : 1,
            y:       scrolled ? -8 : 0,
            scale:   scrolled ? 0.8 : 1,
            // cuando scrolled, colapsa el espacio que ocupa
            marginBottom: scrolled ? "-60px" : "8px",
          }}
          transition={{ duration: 0.35 }}
          className="md:hidden pointer-events-auto overflow-hidden"
          style={{ pointerEvents: scrolled ? "none" : "auto" }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/etc/logo.png`}
            alt="logo"
            className="h-15 no-filter drop-shadow-[0_0_20px_rgba(32,150,166,0.4)]"
          />
        </motion.div>

        {/* ── Pill ─────────────────────────────────────────────── */}
        <LayoutGroup>
          <div
            className="flex items-center gap-3 md:gap-8 px-4 md:px-12 rounded-full backdrop-blur-xl pointer-events-auto transition-all duration-300 w-max"
            style={{
              background: scrolled
                ? "hsl(205 20% 96% / 0.97)"
                : "hsl(205 18% 95% / 0.75)",
              border: `1px solid hsl(188 68% 39% / ${scrolled ? "0.32" : "0.20"})`,
              boxShadow: scrolled
                ? "0 4px 24px hsl(200 20% 30% / 0.14), 0 1px 0 hsl(188 68% 39% / 0.18) inset"
                : "0 2px 12px hsl(200 20% 30% / 0.07)",
              paddingTop:    scrolled ? "0.4rem" : "0.65rem",
              paddingBottom: scrolled ? "0.4rem" : "0.65rem",
            }}
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
                  className="relative px-3 md:px-5 py-1 whitespace-nowrap"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "hsl(188 68% 39%)",
                        boxShadow: "0 2px 12px hsl(188 68% 39% / 0.38)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span
                    className="relative z-10 text-[10px] md:text-sm tracking-widest uppercase font-medium transition-colors duration-300"
                    style={{
                      color: isActive
                        ? "hsl(0 0% 99%)"
                        : "hsl(200 20% 32%)",
                    }}
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
