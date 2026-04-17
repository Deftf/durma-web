import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Nosotros() {

  const [activeValor, setActiveValor] = useState(null);

  const stats = [
    { number: "+14",      label: "Años de experiencia" },
    { number: "80 T/Mes", label: "Capacidad de proceso" },
    { number: "+10",      label: "Servicios diferentes" },
    { number: "+10",      label: "Máquinas propias" },
  ];

  const mv = [
    {
      title: "Misión",
      text: "Proveer soluciones integrales de fabricación y montaje de estructuras metálicas de alta precisión para los sectores de industria, minería y construcción en la Región Puno. Nos comprometemos a ejecutar proyectos con el más alto rigor técnico y estándares de seguridad, calidad y medio ambiente; garantizando la continuidad operativa de nuestros clientes a través de procesos certificados y mano de obra calificada.",
    },
    {
      title: "Visión",
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
        <p className="mt-6 text-lg text-justify">
          Somos una empresa peruana del sector metalmecánico con más de 14 años de experiencia,
          constituida con la finalidad de atender la creciente demanda de soluciones técnicas
          especializadas en la fabricación y el montaje de estructuras metálicas en la región Puno. Su sede
          principal se encuentra en la ciudad de Juliaca. Lo que realmente define nuestra propuesta de
          valor es nuestra capacidad instalada: actualmente somos el centro de producción
          metalmecánica mejor equipado de la región, contando con maquinaria de conformado CNC y
          sistemas hidráulicos de alta capacidad.
        </p>
      </motion.div>

      {/* VIDEO — on-image: imagen y texto en blanco, sin filtro */}
      <div className="mt-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="on-image relative overflow-hidden rounded-3xl"
        >
          <video
            src={`${import.meta.env.BASE_URL}videos/taller.mp4`}
            autoPlay muted loop playsInline
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 img-overlay" />

          {/* TEXTO SIN FONDO — esquina inferior izquierda, blanco por .on-image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-10 left-10 max-w-md"
          >
            <h3
              className="text-2xl font-black uppercase"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.85)" }}
            >
              Ingeniería y precisión
            </h3>
            <p
              className="mt-2 text-sm font-bold"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}
            >
              Más de una década desarrollando soluciones industriales.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* MISIÓN / VISIÓN — cuadro blanco de fondo, texto justificado */}
      <div className="mt-32 grid md:grid-cols-2 gap-8">
        {mv.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl"
            style={{
              background: "hsl(var(--bg-card))",
              border: "1px solid hsl(var(--tq) / 0.16)",
              boxShadow: "0 2px 0 0 hsl(var(--tq) / 0.18), 0 4px 20px hsl(200 20% 30% / 0.08)",
            }}
          >
            <h3
              className="text-2xl font-black uppercase mb-4"
              style={{ color: "hsl(var(--accent))" }}
            >
              {item.title}
            </h3>
            <p className="text-base leading-relaxed text-justify">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-5xl md:text-6xl font-bold">{stat.number}</h4>
            <p className="mt-2 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* VALORES — on-image: imágenes sin filtro, letras blancas */}
      {/* Click con toggle en móvil y desktop */}
      <div className="on-image mt-32 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {valores.map((valor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setActiveValor(activeValor === i ? null : i)}
            className="relative h-[200px] md:h-[260px] rounded-2xl overflow-hidden cursor-pointer select-none"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {/* IMAGEN sin filtro — no-filter gestionado por .on-image en CSS */}
            <img
              src={valor.image}
              className="absolute w-full h-full object-cover transition duration-700"
              style={{
                transform: activeValor === i ? "scale(1.08)" : "scale(1)",
              }}
            />

            {/* OVERLAY base */}
            <div
              className="absolute inset-0 transition duration-500"
              style={{
                background: activeValor === i
                  ? "rgba(0,0,0,0.55)"
                  : "rgba(0,0,0,0.35)",
              }}
            />

            {/* BORDE acento al activar */}
            {activeValor === i && (
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ border: "1px solid hsl(var(--accent) / 0.4)" }}
              />
            )}

            {/* CONTENIDO */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-3 md:px-4">
              <h4 className="text-base md:text-lg font-bold tracking-wide">
                {valor.title}
              </h4>

              <AnimatePresence>
                {activeValor === i && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-xs md:text-sm font-semibold"
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
