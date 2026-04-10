import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

import metal1 from "../assets/hero/metal1.jpg";
import metal2 from "../assets/hero/metal2.jpg";
import metal3 from "../assets/hero/metal3.jpg";
import metal4 from "../assets/hero/metal4.jpg";
import metal5 from "../assets/hero/metal5.jpg";
import metal6 from "../assets/hero/metal6.jpg";

const slides = [
  { img: metal1, text: "Tecnología y experiencia combinadas" },
  { img: metal2, text: "Soluciones personalizadas en acero" },
  { img: metal3, text: "Acabados industriales duraderos" },
  { img: metal4, text: "Precisión en cada corte y soldadura" },
  { img: metal5, text: "Compromiso con la calidad" },
  { img: metal6, text: "Estructuras metálicas de alta resistencia" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const yImg     = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yText    = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yRight   = useTransform(scrollYProgress, [0, 1], [0, -160]);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full h-[200vh]"
    >
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* IMAGEN */}
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].img}
            alt="Metalurgia"
            style={{ scale: scaleImg, y: yImg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* OVERLAY */}
        <div className="absolute inset-0 img-overlay" />

        {/* ── MÓVIL: columna full-width debajo del navbar ── */}
        <div className="md:hidden absolute inset-x-3 top-20 bottom-16 flex flex-col justify-between z-20 gap-3">

          {/* Card principal */}
          <motion.div style={{ y: yText }} className="w-full">
            <div
              style={{
                background: "hsl(var(--bg-card) / 0.55)",
                border: "1px solid hsl(var(--accent) / 0.25)",
              }}
              className="p-4 rounded-2xl shadow-xl backdrop-blur-sm w-full"
            >
              <h1 className="text-sm font-semibold leading-snug">
                MANUFACTURAS DE METAL DURMA SERVICIOS PANCCA
              </h1>
              <p className="mt-2 text-xs leading-relaxed">
                Somos una empresa peruana del sector metalmecánico con más de 14 años de
                experiencia, constituida con la finalidad de atender la creciente demanda de soluciones
                técnicas especializadas en la fabricación y el montaje de estructuras metálicas en la región
                Puno. Su sede principal se encuentra en la ciudad de Juliaca. Lo que realmente define
                nuestra propuesta de valor es nuestra capacidad instalada: actualmente somos el centro
                de producción metalmecánica mejor equipado de la región, contando con maquinaria de
                conformado CNC y sistemas hidráulicos de alta capacidad.
              </p>
            </div>
          </motion.div>

          {/* Cards secundarias */}
          <motion.div style={{ y: yRight }} className="flex flex-col gap-2 w-full">
            {[
              {
                title: "Fabricación especializada",
                text: "Estructuras metálicas y trabajos personalizados.",
              },
              {
                title: "Diseño e ingeniería",
                text: "Precisión estructural en cada proyecto.",
              },
              {
                title: "Compromiso y calidad",
                text: "Control en cada proceso.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                style={{
                  background: "hsl(var(--bg-soft) / 0.75)",
                  border: "1px solid hsl(var(--accent) / 0.2)",
                }}
                className="p-3 rounded-xl shadow-xl backdrop-blur-sm w-full"
              >
                <h2 className="text-xs font-semibold">{item.title}</h2>
                <p className="mt-1 text-xs">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── DESKTOP: layout original ── */}

        {/* CARD IZQUIERDA — desktop */}
        <motion.div
          style={{ y: yText }}
          className="hidden md:block absolute left-16 bottom-28 max-w-md z-20"
        >
          <div
            style={{
              background: "hsl(var(--bg-card) / 0.55)",
              border: "1px solid hsl(var(--accent) / 0.25)",
            }}
            className="p-8 rounded-3xl shadow-xl backdrop-blur-sm"
          >
            <h1 className="text-3xl font-semibold leading-tight">
              MANUFACTURAS DE METAL DURMA SERVICIOS PANCCA
            </h1>
            <p className="mt-4 text-sm leading-relaxed">
              Somos una empresa peruana del sector metalmecánico con más de 14 años de
              experiencia, constituida con la finalidad de atender la creciente demanda de soluciones
              técnicas especializadas en la fabricación y el montaje de estructuras metálicas en la región
              Puno. Su sede principal se encuentra en la ciudad de Juliaca. Lo que realmente define
              nuestra propuesta de valor es nuestra capacidad instalada: actualmente somos el centro
              de producción metalmecánica mejor equipado de la región, contando con maquinaria de
              conformado CNC y sistemas hidráulicos de alta capacidad.
            </p>
          </div>
        </motion.div>

        {/* CARDS DERECHA — desktop */}
        <motion.div
          style={{ y: yRight }}
          className="hidden md:flex md:flex-col absolute right-16 bottom-28 space-y-5 max-w-xs z-20"
        >
          {[
            {
              title: "Fabricación especializada",
              text: "Estructuras metálicas y trabajos personalizados.",
            },
            {
              title: "Diseño e ingeniería",
              text: "Precisión estructural en cada proyecto.",
            },
            {
              title: "Compromiso y calidad",
              text: "Control en cada proceso.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "hsl(var(--bg-soft) / 0.75)",
                border: "1px solid hsl(var(--accent) / 0.2)",
              }}
              className="p-4 rounded-2xl shadow-xl backdrop-blur-sm"
            >
              <h2 className="text-base font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* TEXTO SLIDE INFERIOR */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              background: "hsl(var(--bg-soft) / 0.75)",
              border: "1px solid hsl(var(--accent) / 0.2)",
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full z-20 backdrop-blur-sm whitespace-nowrap"
          >
            <p className="text-xs md:text-sm">
              {slides[index].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
