import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="5" y="2" width="14" height="20" rx="3" ry="3"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.076-1.12l-.292-.173-3.032.862.877-3.032-.19-.31A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.1 24 12.073z"/>
  </svg>
);

const IconMaps = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="#EA4335"/>
  </svg>
);

const IconEmail = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);

const cards = [
  {
    title: "Teléfono",
    value: "+51 931 383 988",
    link: "tel:+51931383988",
    Icon: IconPhone,
    color: "hsl(188 68% 39%)",
    glow:  "hsl(188 68% 39% / 0.18)",
    highlight: true,
  },
  {
    title: "WhatsApp",
    value: "Escribir ahora",
    link: "https://wa.me/51931383988",
    Icon: IconWhatsApp,
    color: "#25D366",
    glow:  "rgba(37,211,102,0.18)",
    highlight: true,
  },
  {
    title: "Correo",
    value: "serviciospanccaeirl@gmail.com",
    link: "mailto:serviciospanccaeirl@gmail.com",
    Icon: IconEmail,
    color: "#EA4335",
    glow:  "rgba(234,67,53,0.18)",
    highlight: true,
  },
  {
    title: "Facebook",
    value: "Visitar página",
    link: "https://www.facebook.com/friends/suggestions/?profile_id=61588279504363",
    Icon: IconFacebook,
    color: "#1877F2",
    glow:  "rgba(24,119,242,0.18)",
    highlight: true,
  },
  {
    title: "Ubicación",
    value: "Juliaca, Perú",
    link: "https://www.google.com/maps?q=-15.53926689730432, -70.1123940542245",
    Icon: IconMaps,
    color: "#EA4335",
    glow:  "rgba(234,67,53,0.18)",
    highlight: true,
  },
];

const serviciosFooter = [
  "Rolado de Planchas y Perfiles",
  "Plegado de Planchas",
  "Corte en Guillotina / Cizalla",
  "Oxicorte y Punzonado",
  "Soldadura (MIG, TIG, SMAW)",
  "Arenado y Pintado Epóxico",
  "Armado y Montaje de Estructuras",
  "Reconstrucción de Cucharones",
  "Servicio de Grúa",
  "Importación de Maquinaria",
];

export default function Contacto() {
  const ref    = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <section
      id="contacto"
      className="relative py-32 px-6 md:px-20 overflow-hidden"
    >
      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 80 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-5xl md:text-6xl font-semibold"
            style={{
      background: "linear-gradient(105deg, hsl(var(--tq-dark)) 0%, hsl(var(--tq-light)) 50%, hsl(var(--tq-dark)) 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
        >Contacto</h2>
        <p className="mt-6 text-lg">
          Estamos listos para construir algo serio contigo.
        </p>
      </motion.div>

      {/* CONTENIDO */}
      <div ref={ref} className="mt-32 grid md:grid-cols-2 gap-20 items-center">

        {/* TARJETAS DE CONTACTO */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -120 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cards.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") || item.link.startsWith("mailto") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.03 }}
              style={{
                background: "hsl(var(--bg-card) / 0.5)",
                border: `1px solid ${item.color}33`,
                backdropFilter: "blur(8px)",
                boxShadow: item.highlight ? `0 4px 24px ${item.glow}` : "none",
                textDecoration: "none",
                color: "inherit",
              }}
              className="p-6 rounded-2xl flex flex-col gap-4 cursor-pointer"
            >
              <div style={{ color: item.color }}>
                <item.Icon />
              </div>
              <div>
                <h3
                  className="text-sm uppercase tracking-widest"
                  style={{ color: "hsl(var(--text-muted))" }}
                >
                  {item.title}
                </h3>
                <p className="mt-1 text-base break-all" style={{ color: "hsl(var(--text-primary))" }}>
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* MAPA */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 120 }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden group h-[420px] md:h-[500px]"
        >
          <iframe
            src="https://www.google.com/maps?q=-15.53926689730432, -70.1123940542245&z=17&output=embed"
            className="w-full h-full border-0 scale-110 group-hover:scale-100 transition duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 img-overlay group-hover:opacity-30 transition" />
          <a
            href="https://www.google.com/maps?q=-15.53926689730432, -70.1123940542245"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 px-6 py-3 rounded-full text-sm"
          >
            Ver en Maps
          </a>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
        transition={{ duration: 1 }}
        className="mt-40 text-center"
      >
        <h3 className="text-4xl">Hablemos de tu proyecto</h3>
        <a
          href="https://wa.me/51931383988"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-12 py-5 rounded-full text-lg"
        >
          Solicitar Cotización
        </a>
      </motion.div>

      {/* FOOTER */}
      <footer
        className="mt-40 pt-16"
        style={{ borderTop: "1px solid hsl(var(--accent) / 0.2)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          {/* COL 1 — Marca */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Servicios Pancca</h4>
            <p className="mb-4 leading-relaxed" style={{ color: "hsl(var(--text-muted))" }}>
              Empresa metalmecánica con más de 14 años de experiencia en fabricación,
              montaje y mantenimiento de estructuras metálicas en la Región Puno.
            </p>
            <ul className="space-y-1" style={{ color: "hsl(var(--text-muted))" }}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* COL 2 — Servicios */}
          <div>
            <h4 className="font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-1" style={{ color: "hsl(var(--text-muted))" }}>
              {serviciosFooter.map((s, i) => (
                <li key={i}><a href="#servicios">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3" style={{ color: "hsl(var(--text-muted))" }}>
              <li>
                <a href="tel:+51931383988" className="block">
                  <span className="font-semibold block">Teléfono</span>
                  +51 931 383 988
                </a>
              </li>
              <li>
                <a href="https://wa.me/51931383988" target="_blank" rel="noopener noreferrer" className="block">
                  <span className="font-semibold block">WhatsApp</span>
                  +51 931 383 988
                </a>
              </li>
              <li>
                <a href="mailto:serviciospanccaeirl@gmail.com" target="_blank" rel="noopener noreferrer" className="block">
                  <span className="font-semibold block">Correo</span>
                  serviciospanccaeirl@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/friends/suggestions/?profile_id=61588279504363" target="_blank" rel="noopener noreferrer" className="block">
                  <span className="font-semibold block">Facebook</span>
                  Servicios Pancca
                </a>
              </li>
              <li>
                <span className="font-semibold block">Ubicación</span>
                Juliaca, Puno — Perú
              </li>
            </ul>
          </div>

          {/* COL 4 — Stats y CTA */}
          <div>
            <h4 className="font-semibold mb-4">¿Por qué nosotros?</h4>
            <ul className="space-y-3 mb-6" style={{ color: "hsl(var(--text-muted))" }}>
              <li><span className="font-bold" style={{ color: "hsl(var(--accent))" }}>14</span> años de experiencia</li>
              <li><span className="font-bold" style={{ color: "hsl(var(--accent))" }}>80 t/mes</span> capacidad de proceso</li>
              <li><span className="font-bold" style={{ color: "hsl(var(--accent))" }}>+10</span> servicios especializados</li>
              <li><span className="font-bold" style={{ color: "hsl(var(--accent))" }}>+10</span> máquinas propias</li>
            </ul>
            <a
              href="https://wa.me/51931383988"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 rounded-full text-sm"
            >
              Cotizar ahora
            </a>
          </div>
        </div>

        <div
          className="text-center mt-12 pt-8 text-xs"
          style={{
            borderTop: "1px solid hsl(var(--accent) / 0.1)",
            color: "hsl(var(--text-muted))",
          }}
        >
          © {new Date().getFullYear()} Servicios Pancca E.I.R.L. — Juliaca, Puno, Perú
        </div>
      </footer>
    </section>
  );
}
