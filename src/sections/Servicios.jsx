import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

export default function Servicios() {
  const [active, setActive] = useState(null);

  const servicios = [
    {
      title: "Rolado de Planchas y Perfiles",
      description:
        "Curvado y conformado de planchas y perfiles metálicos para estructuras industriales.",
      fullText:
        "Realizamos rolado de planchas y perfiles metálicos con precisión industrial...",
      image: `${import.meta.env.BASE_URL}images/servicios/rolado.jpg`,
    },
    {
      title: "Corte de Planchas",
      description: "Corte de planchas de diferentes espesores...",
      fullText: "Realizamos corte de planchas metálicas...",
      image: `${import.meta.env.BASE_URL}images/servicios/corte-planchas.jpg`,
    },
    {
      title: "Corte de Perfiles",
      description: "Corte preciso de perfiles estructurales...",
      fullText: "Ejecutamos corte de perfiles metálicos...",
      image: `${import.meta.env.BASE_URL}images/servicios/corte-perfiles.jpg`,
    },
    {
      title: "Plegado de Planchas",
      description: "Conformado de planchas metálicas...",
      fullText: "Realizamos plegado de planchas metálicas...",
      image: `${import.meta.env.BASE_URL}images/servicios/plegado.jpg`,
    },
    {
      title: "Perforación de Planchas",
      description: "Perforación de planchas metálicas...",
      fullText: "Ejecutamos perforaciones precisas...",
      image: `${import.meta.env.BASE_URL}images/servicios/perforacion.jpg`,
    },
    {
      title: "Armado de Estructuras",
      description: "Fabricación y ensamblaje...",
      fullText: "Desarrollamos el armado de estructuras...",
      image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
    },
    {
      title: "Montaje de Estructuras Metálicas",
      description: "Instalación en obra...",
      fullText: "Realizamos el montaje de estructuras...",
      image: `${import.meta.env.BASE_URL}images/servicios/montaje.jpg`,
    },
    {
      title: "Soldadura",
      description: "Soldadura estructural...",
      fullText: "Aplicamos procesos profesionales...",
      image: `${import.meta.env.BASE_URL}images/servicios/soldadura.jpg`,
    },
    {
      title: "Importación de Maquinaria Amarilla",
      description: "Gestión e importación...",
      fullText: "Ofrecemos servicio de importación...",
      image: `${import.meta.env.BASE_URL}images/servicios/maquinaria.jpg`,
    },
    {
      title: "Reconstrucción de Cucharas y Lampas",
      description: "Reparación y reconstrucción...",
      fullText: "Realizamos reconstrucción...",
      image: `${import.meta.env.BASE_URL}images/servicios/reconstruccion.jpg`,
    },
  ];

  return (
    <section id="servicios" className="py-32 px-6 md:px-20 overflow-hidden">

      {/* TITULO */}
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-semibold">Servicios</h2>
        <p className="mt-6 text-lg">
          Soluciones industriales diseñadas para durar.
        </p>
      </div>

      {/* LISTA */}
      <div className="mt-32 space-y-40 md:space-y-48">
        {servicios.map((servicio, i) => {
          const ref    = useRef(null);
          const inView = useInView(ref, { margin: "-100px" });
          const isLeft = i % 2 === 0;

          return (
            <div ref={ref} key={i}>
              <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? 0 : isLeft ? 250 : -250,
                  scale: inView ? 1 : 0.92,
                }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* TEXTO */}
                <div className={`space-y-6 ${isLeft ? "md:order-1" : "md:order-2"}`}>
                  <h3 className="text-3xl md:text-4xl font-semibold">
                    {servicio.title}
                  </h3>

                  <p className="leading-relaxed">
                    {servicio.description}
                  </p>

                  {/* Botón — el global lo estiliza automáticamente */}
                  <button
                    onClick={() => setActive(i)}
                    className="px-5 py-2 rounded-full text-sm"
                  >
                    Ver más
                  </button>
                </div>

                {/* IMAGEN */}
                <motion.div
                  className={`relative group ${isLeft ? "md:order-2" : "md:order-1"}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={servicio.image}
                      className="w-full h-[420px] object-cover transition duration-1000 group-hover:scale-125"
                    />
                    <div
                      className="absolute inset-0 img-overlay transition group-hover:opacity-50"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {active !== null && (
        <motion.div
          className="fixed inset-0 backdrop-blur-md z-[999] flex items-center justify-center px-4"
          style={{ background: "hsl(var(--bg-dark) / 0.85)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative w-full max-w-5xl h-[85vh] md:h-auto rounded-3xl overflow-hidden"
            initial={{ y: 120, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <img
              src={servicios[active].image}
              className="absolute w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "hsl(var(--bg-dark) / 0.75)" }}
            />

            <div className="relative p-6 md:p-16 max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-semibold">
                {servicios[active].title}
              </h3>

              <p className="mt-6 leading-relaxed">
                {servicios[active].fullText}
              </p>

              {/* Botón cerrar — el global lo estiliza */}
              <button
                onClick={() => setActive(null)}
                className="mt-10 px-6 py-3 rounded-full"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
