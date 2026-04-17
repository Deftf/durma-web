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
  { img: metal1, title: "Tecnología y experiencia", subtitle: "combinadas" },
  { img: metal2, title: "Soluciones personalizadas", subtitle: "en acero" },
  { img: metal3, title: "Acabados industriales", subtitle: "duraderos" },
  { img: metal4, title: "Precisión en cada corte", subtitle: "y soldadura" },
  { img: metal5, title: "Compromiso con", subtitle: "la calidad" },
  { img: metal6, title: "Estructuras metálicas", subtitle: "de alta resistencia" },
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
      {/* on-image → CSS global mantiene todo blanco dentro */}
      <motion.div className="on-image sticky top-0 h-screen w-full overflow-hidden">

        {/* IMAGEN — no-filter: tono original sin filtro de color */}
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
            className="no-filter absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* OVERLAY oscuro para contraste */}
        <div className="absolute inset-0 img-overlay" />

        {/* TEXTO CENTRAL — blanco controlado por .on-image en CSS */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tight"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)" }}
              >
                {slides[index].title}
              </h1>
              <p
                className="text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-widest"
                style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
              >
                {slides[index].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>
    </section>
  );
}
