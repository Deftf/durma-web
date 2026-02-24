import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Nosotros() {
  const [activeValue, setActiveValue] = useState(null);

  const stats = [
    { number: 15, label: "Años de experiencia" },
    { number: 250, label: "Proyectos realizados" },
    { number: 120, label: "Clientes satisfechos" },
    { number: 8, label: "Colaboradores técnicos" },
  ];

    const valores = [
    {
      title: "Compromiso",
      image: `${import.meta.env.BASE_URL}images/valores/compromiso.jpg`,
      description:
        "Nos involucramos en cada proyecto con responsabilidad total y enfoque en resultados duraderos.",
    },
    {
      title: "Precisión",
      image: `${import.meta.env.BASE_URL}images/valores/precision.jpg`,
      description:
        "Trabajamos con exactitud técnica en cada corte, soldadura y ensamblaje.",
    },
    {
      title: "Responsabilidad",
      image: `${import.meta.env.BASE_URL}images/valores/responsabilidad.jpg`,
      description:
        "Cumplimos tiempos y estándares industriales con seriedad profesional.",
    },
    {
      title: "Innovación",
      image: `${import.meta.env.BASE_URL}images/valores/innovacion.jpg`,
      description:
        "Integramos mejoras constantes en procesos y soluciones metálicas.",
    },
    {
      title: "Calidad",
      image: `${import.meta.env.BASE_URL}images/valores/calidad.jpg`,
      description:
        "Materiales resistentes y acabados que garantizan larga duración.",
    },
    {
      title: "Disciplina Industrial",
      image: `${import.meta.env.BASE_URL}images/valores/disciplina.jpg`,
      description:
        "Orden, método y estructura en cada etapa de fabricación.",
    },
  ];

  return (
    <section
      id="nosotros"
      className="relative bg-zinc-950 text-white py-32 px-6 md:px-20 overflow-hidden"
    >
      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Nosotros
        </h2>

        <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
          Experiencia técnica y compromiso industrial en cada estructura
          que desarrollamos.
        </p>
      </motion.div>

      {/* HISTORIA + VIDEO */}
      <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <video
            src={`${import.meta.env.BASE_URL}videos/taller.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 rounded-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-medium">
            Nuestra Historia
          </h3>

          <p className="mt-6 text-zinc-400 leading-relaxed">
            MANUFACTURAS DE METAL DURMA E.I.R.L nace con el objetivo
            de ofrecer soluciones metálicas confiables y resistentes.
            Nuestra trayectoria se construye sobre disciplina técnica,
            innovación constante y responsabilidad profesional.
          </p>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            Cada proyecto es una estructura de confianza. Nos adaptamos
            a diferentes requerimientos industriales garantizando
            precisión y calidad en cada detalle.
          </p>
        </motion.div>
      </div>

      {/* ESTADISTICAS */}
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-4xl font-semibold">
              {stat.number}+
            </h4>
            <p className="mt-2 text-zinc-400 text-sm tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* VALORES */}
      <div className="mt-32">
        <motion.h3
          className="text-3xl font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestros Valores
        </motion.h3>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {valores.map((valor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                setActiveValue(activeValue === i ? null : i)
              }
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Imagen */}
              <img
                src={valor.image}
                alt={valor.title}
                className="absolute w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-500" />

              {/* Contenido */}
              <div className="relative p-8 h-64 flex flex-col justify-center items-center text-center">
                <h4 className="text-xl font-medium tracking-wide">
                  {valor.title}
                </h4>

                <AnimatePresence>
                  {activeValue === i && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-sm text-zinc-300"
                    >
                      {valor.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="absolute inset-0 border border-transparent group-hover:border-white/40 rounded-2xl transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FRASE FINAL */}
      <motion.div
        className="mt-32 max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-2xl md:text-3xl font-medium leading-relaxed">
          No solo trabajamos el metal.
          Construimos estructuras que permanecen.
        </p>
      </motion.div>
    </section>
  );
}
