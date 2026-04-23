import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    /*
      Sin sticky, sin 200vh, sin parallax scale/y.
      El section ocupa exactamente 100svh (lo visible).
      En desktop: padding-top = --navbar-h para que la imagen
      arranque justo debajo del navbar sin solaparse.
      Sin ningún espacio extra → sin barrita gris.
    */
    <section
      id="inicio"
      className="on-image relative w-full overflow-hidden"
      style={{
        height: "100svh",
        paddingTop: "var(--navbar-h, 0px)",
      }}
    >
      {/* IMÁGENES — fade entre slides, tono original */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].img}
          alt="Metalurgia"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="no-filter absolute bottom-0 left-0 right-0 w-full object-cover"
          style={{ 
            height: "calc(100svh - var(--navbar-h, 0px))", // La imagen mide el total menos el navbar
            top: "var(--navbar-h, 0px)" // Empieza exactamente donde termina el navbar
          }}
        />
      </AnimatePresence>

      {/* OVERLAY oscuro para contraste */}
      <div 
        className="absolute bottom-0 left-0 right-0 img-overlay" 
        style={{ top: "var(--navbar-h, 0px)" }} 
      />

      {/* TEXTO CENTRAL */}
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
    </section>
  );
}
