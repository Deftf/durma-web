import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

const links = [
  { name: "Inicio",    id: "inicio"    },
  { name: "Nosotros",  id: "nosotros"  },
  { name: "Servicios", id: "servicios" },
  { name: "Contacto",  id: "contacto"  },
];

export default function Navbar() {
  const [active,   setActive]   = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
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
  }, [menuOpen]);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          NAVBAR PRINCIPAL
      ══════════════════════════════════════════════════════════ */}
      <motion.header
        animate={{
          paddingTop:    scrolled ? "0.5rem" : "1rem",
          paddingBottom: scrolled ? "0.5rem" : "1rem",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-14 flex items-center justify-between"
        style={{
          background: scrolled
            ? "hsl(205 20% 96% / 0.97)"
            : "hsl(205 18% 95% / 0.60)",
          backdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? "1px solid hsl(188 68% 39% / 0.18)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 24px hsl(200 20% 30% / 0.10)"
            : "none",
          transition: "background 0.35s, border 0.35s, box-shadow 0.35s",
        }}
      >
        {/* ── LOGO ─────────────────────────────────────────────── */}
        <motion.a
          href="#inicio"
          onClick={() => setActive("inicio")}
          className="flex-shrink-0 md:ml-16"
          style={{ textDecoration: "none" }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/etc/logo.png`}
            alt="logo"
            className="no-filter drop-shadow-[0_0_22px_rgba(32,150,166,0.40)]"
            style={{
              height: scrolled ? "2.8rem" : "4.5rem",
              transition: "height 0.35s ease",
            }}
          />
        </motion.a>

        {/* ── LINKS DESKTOP ────────────────────────────────────── */}
        <LayoutGroup>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActive(link.id)}
                  className="relative px-5 py-2 whitespace-nowrap"
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
                    className="relative z-10 text-sm tracking-widest uppercase font-medium transition-colors duration-300"
                    style={{
                      color: isActive ? "hsl(0 0% 99%)" : "hsl(200 20% 32%)",
                    }}
                  >
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </nav>
        </LayoutGroup>

        {/* ── HAMBURGER MÓVIL ──────────────────────────────────── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-xl"
          style={{
            background: "hsl(188 68% 39% / 0.10)",
            border: "1px solid hsl(188 68% 39% / 0.25)",
            boxShadow: "none",
          }}
          aria-label="Menú"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-[2px] rounded-full"
            style={{ background: "hsl(188 68% 39%)" }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-[2px] rounded-full"
            style={{ background: "hsl(188 68% 39%)" }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-[2px] rounded-full"
            style={{ background: "hsl(188 68% 39%)" }}
          />
        </button>
      </motion.header>

      {/* ══════════════════════════════════════════════════════════
          MENÚ MÓVIL DESPLEGABLE
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1,  y: 0,   scale: 1    }}
            exit={{   opacity: 0,  y: -12, scale: 0.97  }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed z-40 left-4 right-4 rounded-2xl overflow-hidden md:hidden"
            style={{
              top: scrolled ? "4rem" : "5.6rem",
              background: "hsl(205 20% 96% / 0.98)",
              border: "1px solid hsl(188 68% 39% / 0.18)",
              boxShadow: "0 8px 32px hsl(200 20% 30% / 0.14)",
              backdropFilter: "blur(20px)",
            }}
          >
            {links.map((link, i) => {
              const isActive = active === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1,  x: 0   }}
                  transition={{ delay: i * 0.06  }}
                  onClick={() => { setActive(link.id); setMenuOpen(false); }}
                  className="flex items-center gap-3 px-6 py-4"
                  style={{
                    textDecoration: "none",
                    borderBottom: i < links.length - 1
                      ? "1px solid hsl(188 68% 39% / 0.08)"
                      : "none",
                    background: isActive
                      ? "hsl(188 68% 39% / 0.08)"
                      : "transparent",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isActive ? "hsl(188 68% 39%)" : "hsl(200 20% 75%)",
                      boxShadow:  isActive ? "0 0 6px hsl(188 68% 39% / 0.5)" : "none",
                    }}
                  />
                  <span
                    className="text-sm tracking-widest uppercase font-medium"
                    style={{
                      color: isActive ? "hsl(188 68% 39%)" : "hsl(200 20% 32%)",
                    }}
                  >
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
