import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
        <h2 className="text-5xl md:text-6xl font-semibold">Contacto</h2>
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Teléfono",
              value: "+51 931 383 988",
              link: "tel:+51931383988",
            },
            {
              title: "WhatsApp",
              value: "Escribir ahora",
              link: "https://wa.me/51931383988",
              highlight: true,
            },
            {
              title: "Facebook",
              value: "Visitar página",
              link: "https://www.facebook.com/",
            },
            {
              title: "Ubicación",
              value: "Juliaca, Perú",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              style={{
                background: "hsl(var(--bg-card) / 0.5)",
                border: `1px solid hsl(var(--accent) / ${item.highlight ? "0.35" : "0.15"})`,
                backdropFilter: "blur(8px)",
                boxShadow: item.highlight
                  ? "0 4px 20px hsl(var(--accent) / 0.15)"
                  : "none",
              }}
              className="p-6 rounded-2xl"
            >
              {/* Etiqueta pequeña */}
              <h3
                className="text-sm uppercase tracking-widest"
                style={{ color: "hsl(var(--text-muted))" }}
              >
                {item.title}
              </h3>

              {item.link ? (
                /* Links de contacto — NO son botones, se estilizan como links */
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-xl hover:underline"
                  style={{ color: "hsl(var(--text-primary))" }}
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-xl">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* MAPA */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 120 }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden group h-[420px] md:h-[500px]"
        >
          <iframe
            src="https://www.google.com/maps?q=-15.539105039957803,-70.11218421652295&z=17&output=embed"
            className="w-full h-full border-0 scale-110 group-hover:scale-100 transition duration-700"
            loading="lazy"
          />

          <div
            className="absolute inset-0 img-overlay group-hover:opacity-30 transition"
          />

          {/* Botón "Ver en Maps" — el global lo estiliza como btn primario */}
          <a
            href="https://www.google.com/maps?q=-15.539105039957803,-70.11218421652295"
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

        {/* Botón CTA principal — el global lo estiliza */}
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

          {/* MARCA */}
          <div>
            <h4 className="text-xl mb-4">Servicios Pancca</h4>
            <ul className="space-y-2" style={{ color: "hsl(var(--text-muted))" }}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="mb-4">Contacto</h4>
            <ul className="space-y-2" style={{ color: "hsl(var(--text-muted))" }}>
              <li><a href="tel:+51931383988">Telefono</a></li>
              <li><a href="https://wa.me/51931383988" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.google.com/maps?q=-15.539105039957803,-70.11218421652295" target="_blank" rel="noopener noreferrer">Ubicación</a></li>
            </ul>
          </div>

          {/* SERVICIOS */}
          <div>
            <h4 className="mb-4">Servicios</h4>
            <ul className="space-y-2" style={{ color: "hsl(var(--text-muted))" }}>
              <li>Rolado</li>
              <li>Corte</li>
              <li>Soldadura</li>
              <li>Montaje</li>
            </ul>
          </div>

          {/* CTA FOOTER */}
          <div>
            <h4 className="mb-4">&nbsp;</h4>
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
          className="text-center mt-12"
          style={{ color: "hsl(var(--text-muted))" }}
        >
          © {new Date().getFullYear()} Servicios Pancca
        </div>
      </footer>
    </section>
  );
}
