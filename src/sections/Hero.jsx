import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import metal1 from "../assets/hero/metal1.jpg";
import metal2 from "../assets/hero/metal2.jpg";
import metal3 from "../assets/hero/metal3.jpg";
import metal4 from "../assets/hero/metal4.jpg";
import metal5 from "../assets/hero/metal5.jpg";
import metal6 from "../assets/hero/metal6.jpg";

const slides = [
  { img: metal1, text: "Estructuras metálicas de alta resistencia" },
  { img: metal2, text: "Precisión en cada corte y soldadura" },
  { img: metal3, text: "Acabados industriales duraderos" },
  { img: metal4, text: "Soluciones personalizadas en acero" },
  { img: metal5, text: "Tecnología y experiencia combinadas" },
  { img: metal6, text: "Compromiso con la calidad" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "1%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full bg-black text-white"
    >
      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="relative h-[60vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slides[index].img}
              alt="Metalurgia"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/40" />

          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-8 left-6 right-6"
            >
              <p className="text-lg font-medium">
                {slides[index].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="px-6 py-16 space-y-16">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold leading-snug tracking-tight">
              MANUFACTURAS DE METAL DURMA - SERVICIOS PANCCA
            </h1>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            Somos una empresa peruana del sector metalmecánico con más de 14 años de
            experiencia, constituida con la finalidad de atender la creciente demanda de soluciones
            técnicas especializadas en la fabricación y el montaje de estructuras metálicas en la región
            Puno. Su sede principal se encuentra en la ciudad de Juliaca. Lo que realmente define
            nuestra propuesta de valor es nuestra capacidad instalada: actualmente somos el centro
            de producción metalmecánica mejor equipado de la región, contando con maquinaria de
            conformado CNC y sistemas hidráulicos de alta capacidad.
                      </p>

          <div>
            <h2 className="text-xl font-medium">
              Fabricación especializada
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Estructuras metálicas, acero inoxidable y mantenimiento industrial.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium">
              Diseño e ingeniería
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Proyectos personalizados adaptados a cada necesidad.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium">
              Compromiso y calidad
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Control en cada etapa del proceso productivo.
            </p>
          </div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex">
        
        {/* Lado izquierdo STICKY */}
        <div className="sticky top-0 w-1/2 h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slides[index].img}
              alt="Metalurgia"
              style={{ y }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/40" />

          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].text}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-16 left-16 right-16"
            >
              <p
                className={`text-xl font-medium max-w-md ${
                  index === 0 ? "" : "ml-10"
                }`}
              >
                {slides[index].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lado derecho scroll */}
        <div
          ref={containerRef}
          className="w-1/2 min-h-screen px-20 py-32 space-y-40"
        >
          <div className="flex items-center gap-6">
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight">
              MANUFACTURAS DE METAL DURMA - SERVICIOS PANCCA
            </h1>
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            Somos una empresa peruana del sector metalmecánico con más de 14 años de
            experiencia, constituida con la finalidad de atender la creciente demanda de soluciones
            técnicas especializadas en la fabricación y el montaje de estructuras metálicas en la región
            Puno. Su sede principal se encuentra en la ciudad de Juliaca. Lo que realmente define
            nuestra propuesta de valor es nuestra capacidad instalada: actualmente somos el centro
            de producción metalmecánica mejor equipado de la región, contando con maquinaria de
            conformado CNC y sistemas hidráulicos de alta capacidad.
          </p>

          <div>
            <h2 className="text-3xl font-medium">
              Fabricación especializada
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-xl text-lg">
              Estructuras metálicas, acero inoxidable,
              mantenimiento industrial y trabajos personalizados.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium">
              Diseño e ingeniería
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-xl text-lg">
              Proyectos personalizados con enfoque estructural
              y precisión técnica.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium">
              Compromiso y calidad
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-xl text-lg">
              Control en cada etapa del proceso productivo.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}