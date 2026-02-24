import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Servicios() {
  const [active, setActive] = useState(null);

  const servicios = [
    {
      title: "Fabricación Metálica",
      description:
        "Estructuras metálicas, puertas industriales, barandas y soluciones a medida.",
      fullText:
        "Desarrollamos estructuras metálicas personalizadas con altos estándares técnicos. Trabajamos con acero estructural, diseños reforzados y acabados industriales resistentes al desgaste.",
      image: `${import.meta.env.BASE_URL}images/servicios/fabricacion.jpg`,
    },
    {
      title: "Soldadura Especializada",
      description:
        "Procesos MIG, TIG y soldadura estructural de alta resistencia.",
      fullText:
        "Aplicamos técnicas profesionales de soldadura MIG, TIG y estructural garantizando uniones seguras, limpias y duraderas en cada proyecto industrial.",
      image: `${import.meta.env.BASE_URL}images/servicios/soldadura.jpg`,
    },
    {
      title: "Mantenimiento Industrial",
      description:
        "Reparación y refuerzo de estructuras metálicas existentes.",
      fullText:
        "Ofrecemos mantenimiento preventivo y correctivo, reforzando estructuras y optimizando sistemas metálicos para prolongar su vida útil.",
      image: `${import.meta.env.BASE_URL}images/servicios/mantenimiento.jpg`,
    },
    {
      title: "Diseño y Prototipado",
      description:
        "Soluciones personalizadas según requerimientos técnicos.",
      fullText:
        "Convertimos ideas en soluciones funcionales mediante diseño técnico, prototipado y desarrollo estructural adaptado a cada necesidad.",
      image: `${import.meta.env.BASE_URL}images/servicios/diseno.jpg`,
    },
  ];

  return (
    <section
      id="servicios"
      className="relative bg-black text-white py-32 px-6 md:px-20"
    >
      {/* TITULO */}
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Servicios
        </h2>
        <p className="mt-6 text-zinc-400 text-lg">
          Soluciones industriales diseñadas para durar.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-24 grid md:grid-cols-2 gap-16">
        {servicios.map((servicio, i) => (
          <motion.div
            key={i}
            layoutId={`card-${i}`}
            className="relative group cursor-pointer"
            onClick={() => setActive(i)}
            whileHover={{ scale: 1.03 }}
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={servicio.image}
                alt={servicio.title}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500" />
            </div>

            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-semibold">
                {servicio.title}
              </h3>
              <p className="mt-2 text-zinc-300 text-sm max-w-sm">
                {servicio.description}
              </p>
              <span className="mt-4 inline-block text-sm tracking-widest border-b border-white">
                VER MÁS
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PANEL EXPANDIDO */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 bg-black z-[999] flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`card-${active}`}
              className="relative w-full max-w-6xl h-[80vh] rounded-3xl overflow-hidden"
            >
              <img
                src={servicios[active].image}
                alt=""
                className="absolute w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/70" />

              <div className="relative z-10 p-10 md:p-20 max-w-3xl">
                <h3 className="text-4xl md:text-5xl font-semibold">
                  {servicios[active].title}
                </h3>

                <p className="mt-8 text-lg text-zinc-300 leading-relaxed">
                  {servicios[active].fullText}
                </p>

                <button
                  onClick={() => setActive(null)}
                  className="mt-10 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
