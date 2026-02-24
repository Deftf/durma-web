import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import Servicios from "./sections/Servicios";
import Contacto from "./sections/Contacto";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white">

      <AnimatePresence>
        {showIntro && <IntroScreen />}
      </AnimatePresence>

      {!showIntro && (
        <>
          <Navbar />
          <Hero />
          <Nosotros />
          <Servicios />
          <Contacto />
        </>
      )}

    </div>
  );
}
