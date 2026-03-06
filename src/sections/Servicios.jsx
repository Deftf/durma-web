import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Servicios() {
  const [active, setActive] = useState(null);

  const servicios = [
    {
      title: "Rolado de Planchas y Perfiles",
      description:
        "Curvado y conformado de planchas y perfiles metálicos para estructuras industriales.",
      fullText:
        "Realizamos rolado de planchas y perfiles metálicos con precisión industrial, permitiendo fabricar piezas curvas, cilindros y componentes estructurales utilizados en proyectos metalmecánicos y de construcción.",
      image: `${import.meta.env.BASE_URL}images/servicios/rolado.jpg`,
    },
    {
      title: "Corte de Planchas",
      description:
        "Corte de planchas de diferentes espesores mediante guillotina y oxicorte.",
      fullText:
        "Realizamos corte de planchas metálicas utilizando guillotina industrial y oxicorte, garantizando precisión dimensional y acabados adecuados para procesos posteriores de fabricación.",
      image: `${import.meta.env.BASE_URL}images/servicios/corte-planchas.jpg`,
    },
    {
      title: "Corte de Perfiles",
      description:
        "Corte preciso de perfiles estructurales para fabricación metálica.",
      fullText:
        "Ejecutamos corte de perfiles metálicos estructurales utilizados en proyectos industriales y de construcción, asegurando exactitud en medidas y optimización del material.",
      image: `${import.meta.env.BASE_URL}images/servicios/corte-perfiles.jpg`,
    },
    {
      title: "Plegado de Planchas",
      description:
        "Conformado de planchas metálicas mediante procesos de plegado industrial.",
      fullText:
        "Realizamos plegado de planchas metálicas para la fabricación de componentes estructurales, piezas industriales y elementos metálicos con geometrías específicas.",
      image: `${import.meta.env.BASE_URL}images/servicios/plegado.jpg`,
    },
    {
      title: "Perforación de Planchas",
      description:
        "Perforación de planchas metálicas con diferentes diámetros.",
      fullText:
        "Ejecutamos perforaciones precisas en planchas metálicas para procesos de ensamblaje, montaje estructural y fabricación de piezas industriales.",
      image: `${import.meta.env.BASE_URL}images/servicios/perforacion.jpg`,
    },
    {
      title: "Armado de Estructuras",
      description:
        "Fabricación y ensamblaje de estructuras metálicas industriales.",
      fullText:
        "Desarrollamos el armado de estructuras metálicas para proyectos industriales, mineros y de construcción, cumpliendo estándares técnicos y de seguridad.",
      image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
    },
    {
      title: "Montaje de Estructuras Metálicas",
      description:
        "Instalación y montaje de estructuras metálicas en obra.",
      fullText:
        "Realizamos el montaje de estructuras metálicas en campo, garantizando alineación estructural, seguridad operativa y cumplimiento de especificaciones técnicas.",
      image: `${import.meta.env.BASE_URL}images/servicios/montaje.jpg`,
    },
    {
      title: "Soldadura",
      description:
        "Soldadura estructural para proyectos metalmecánicos.",
      fullText:
        "Aplicamos procesos profesionales de soldadura estructural para garantizar uniones resistentes, duraderas y seguras en estructuras metálicas.",
      image: `${import.meta.env.BASE_URL}images/servicios/soldadura.jpg`,
    },
    {
      title: "Importación de Maquinaria Amarilla",
      description:
        "Gestión e importación de maquinaria pesada para minería y construcción.",
      fullText:
        "Ofrecemos servicio de importación de maquinaria amarilla para operaciones industriales, mineras y de construcción, gestionando equipos confiables y de alto rendimiento.",
      image: `${import.meta.env.BASE_URL}images/servicios/maquinaria.jpg`,
    },
    {
      title: "Reconstrucción de Cucharas y Lampas",
      description:
        "Reparación y reconstrucción de cucharas y lampas de maquinaria pesada.",
      fullText:
        "Realizamos reconstrucción, refuerzo y reparación de cucharas y lampas utilizadas en maquinaria pesada, prolongando su vida útil y optimizando su desempeño en campo.",
      image: `${import.meta.env.BASE_URL}images/servicios/reconstruccion.jpg`,
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-black text-white py-32 px-6 md:px-20"
    >
      {/* TITULO */}
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Servicios
        </h2>
        <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
          Soluciones industriales diseñadas para durar.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-24 grid md:grid-cols-2 xl:grid-cols-3 gap-16">
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
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[999] flex items-center justify-center px-6"
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
                  className="mt-10 px-6 py-3 border border-white rounded-full transition hover:bg-white hover:text-black"
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