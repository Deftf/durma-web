import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Nosotros() {
  const [activeValue, setActiveValue] = useState(null);
  const [activeMV, setActiveMV]       = useState(null);

  const stats = [
    { number: 14,        label: "Años de experiencia" },
    { number: "80 t/mes", label: "Capacidad de proceso" },
  ];

  const mv = [
    {
      title: "Misión",
      image: `${import.meta.env.BASE_URL}images/mision.jpg`,
      imageActive: `${import.meta.env.BASE_URL}images/mision_active.jpg`,
      text: "Proveer soluciones integrales de fabricación y montaje de estructuras metálicas de alta precisión para los sectores de industria, minería y construcción en la Región Puno. Nos comprometemos a ejecutar proyectos con el más alto rigor técnico y estándares de seguridad, calidad y medio ambiente; garantizando la continuidad operativa de nuestros clientes a través de procesos certificados y mano de obra calificada.",
    },
    {
      title: "Visión",
      image: `${import.meta.env.BASE_URL}images/vision.jpg`,
      imageActive: `${import.meta.env.BASE_URL}images/vision_active.jpg`,
      text: "Ser reconocidos para el año 2030 como la empresa metalmecánica referente en la Región Puno por nuestra capacidad técnica en proyectos de alta complejidad. Aspiramos a liderar el mercado regional siendo el modelo a seguir en seguridad industrial y calidad operativa, impulsando el desarrollo industrial y técnico de nuestra comunidad.",
    },
  ];

  const valores = [
    {
      title: "Compromiso",
      image: `${import.meta.env.BASE_URL}images/valores/compromiso.jpg`,
      description: "Nos involucramos en cada proyecto con responsabilidad total.",
    },
    {
      title: "Precisión",
      image: `${import.meta.env.BASE_URL}images/valores/precision.jpg`,
      description: "Exactitud técnica en cada proceso.",
    },
    {
      title: "Responsabilidad",
      image: `${import.meta.env.BASE_URL}images/valores/responsabilidad.jpg`,
      description: "Cumplimos tiempos y estándares con rigor profesional.",
    },
    {
      title: "Innovación",
      image: `${import.meta.env.BASE_URL}images/valores/innovacion.jpg`,
      description: "Mejora continua en procesos y soluciones.",
    },
    {
      title: "Seguridad",
      image: `${import.meta.env.BASE_URL}images/valores/seguridad.jpg`,
      description: "Protegemos a nuestro equipo y entorno en cada operación.",
    },
    {
      title: "Calidad",
      image: `${import.meta.env.BASE_URL}images/valores/calidad.jpg`,
      description: "Cada estructura que entregamos supera los estándares exigidos.",
    },
  ];

  return (
    <section id="nosotros" className="py-32 px-6 md:px-20 relative">

      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-5xl font-semibold">Nosotros</h2>
        <p className="mt-6 text-lg">
          Experiencia técnica y compromiso industrial en cada estructura.
        </p>
      </motion.div>

      {/* VIDEO */}
      <div className="mt-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <video
            src={`${import.meta.env.BASE_URL}videos/taller.mp4`}
            autoPlay muted loop playsInline
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 img-overlay" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: "hsl(var(--bg-dark) / 0.75)",
              border: "1px solid hsl(var(--accent) / 0.2)",
            }}
            className="absolute bottom-10 left-10 max-w-md p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold">Ingeniería y precisión</h3>
            <p className="mt-2 text-sm">
              Más de una década desarrollando soluciones industriales.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* MISIÓN / VISIÓN */}
      <div className="mt-32 grid md:grid-cols-2 gap-10">
        {mv.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            onClick={() => setActiveMV(activeMV === i ? null : i)}
            className="relative h-[320px] rounded-2xl overflow-hidden cursor-pointer"
          >
            <img
              src={activeMV === i ? item.imageActive : item.image}
              className="absolute w-full h-full object-cover transition duration-700"
            />

            <div
              className="absolute inset-0"
              style={{ background: "hsl(var(--bg-dark) / 0.55)" }}
            />

            <div className="relative h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <AnimatePresence>
                {activeMV === i && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 px-6 text-sm font-semibold"
                  >
                    {item.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div className="mt-32 flex gap-16 justify-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-center"
          >
            <h4 className="text-6xl font-bold">{stat.number}</h4>
            <p className="mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* VALORES — 6 cards en grid 2 cols móvil / 3 cols tablet+ */}
      <div className="mt-32 grid grid-cols-2 md:grid-cols-3 gap-8">
        {valores.map((valor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveValue(activeValue === i ? null : i)}
            className="relative h-[260px] rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={valor.image}
              className="absolute w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 transition duration-500"
              style={{ background: "hsl(var(--bg-dark) / 0.45)" }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"
              style={{ border: "1px solid hsl(var(--accent) / 0.25)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
              <h4 className="text-lg font-bold tracking-wide">
                {valor.title}
              </h4>

              <AnimatePresence>
                {activeValue === i && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-sm font-semibold"
                  >
                    {valor.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FRASE */}
      <motion.div
        className="mt-32 max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-3xl">
          No solo trabajamos el metal. Construimos estructuras que permanecen.
        </p>
      </motion.div>

    </section>
  );
}
