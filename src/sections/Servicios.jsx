import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const servicios = [
  {
    title: "Rolado de Planchas",
    capacity: "Espesores desde 2 mm hasta 1\"",
    description: "Conformado en frío de láminas metálicas mediante máquinas roladoras de tres o cuatro rodillos. Garantiza curvatura uniforme y controlada, transformando piezas planas en geometrías cilíndricas, cónicas o circulares.",
    aplicacion: "Tanques de almacenamiento, virolas, calderas.",
    image: `${import.meta.env.BASE_URL}images/servicios/rolado.jpg`,
  },
  {
    title: "Rolado de Perfiles",
    capacity: "Tubo circular hasta 4\", cuadrado 100×100 mm, rectangular 100×50 mm, ángulos hasta 3\"×3\"×½\"",
    description: "Proceso de deformación mecánica con máquina de tres rodillos para curvar ángulos, canales, vigas o tubos con radio de curvatura constante.",
    aplicacion: "Barandas, cerchas, arcos de techado, fachadas arquitectónicas.",
    image: `${import.meta.env.BASE_URL}images/servicios/rolado.jpg`,
  },
  {
    title: "Rolado de Cimbras",
    capacity: "Espesores desde 2 mm hasta 1\"",
    description: "Curvado mecánico de perfiles de acero pesado (vigas H, I o canales U) para crear arcos estructurales denominados cerchas o arcos de sostenimiento.",
    aplicacion: "Arcos de techado, minería subterránea, túneles viales.",
    image: `${import.meta.env.BASE_URL}images/servicios/rolado.jpg`,
  },
  {
    title: "Plegado de Planchas",
    capacity: "0.4×½\"×4 m",
    description: "Conformado por flexión usando punzón y matriz en V para doblar planchas metálicas con ángulos precisos de 90°, abiertos o cerrados.",
    aplicacion: "Piezas estructurales, carrocería tolvas, ductos.",
    image: `${import.meta.env.BASE_URL}images/servicios/plegado.jpg`,
  },
  {
    title: "Corte en Guillotina",
    capacity: "0.4×½\"×4 m",
    description: "Corte lineal con fuerza hidráulica por cizallamiento. Sin generación de virutas ni calor. Trabajamos con medidas proporcionadas por el cliente.",
    aplicacion: "Piezas estructurales, cartelas, bridas.",
    image: `${import.meta.env.BASE_URL}images/servicios/corte-planchas.jpg`,
  },
  {
    title: "Oxicorte",
    capacity: "Espesores grandes",
    description: "Corte para planchas de grandes espesores que no pueden procesarse en guillotina hidráulica o cizalla.",
    aplicacion: "Rolados, piezas de cucharones.",
    image: `${import.meta.env.BASE_URL}images/servicios/corte-planchas.jpg`,
  },
  {
    title: "Punzonado Hidráulico",
    capacity: "Planchas hasta 2\", ángulos hasta 4\"×4\"×½\"",
    description: "Corte mecánico en frío usando pistón hidráulico y punzón de acero templado para perforar planchas o perfiles con acabado preciso.",
    aplicacion: "Bridas, piezas estructurales, accesorios metálicos.",
    image: `${import.meta.env.BASE_URL}images/servicios/perforacion.jpg`,
  },
  {
    title: "Corte por Cizalla",
    capacity: "Desde 3/8\" hasta 2\"",
    description: "Corte por esfuerzo de cizalladura con dos cuchillas de filos opuestos desplazándose en sentidos contrarios.",
    aplicacion: "Diferentes tipos de diámetros.",
    image: `${import.meta.env.BASE_URL}images/servicios/corte-perfiles.jpg`,
  },
  {
    title: "Prensado Hidráulico Vertical",
    capacity: "100 TN",
    description: "Conformado con pistón de desplazamiento vertical impulsado por aceite a alta presión, aplicando fuerza de compresión controlada.",
    aplicacion: "Rectificar bridas, cartelas.",
    image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
  },
  {
    title: "Prensado Hidráulico Helicoidal",
    capacity: "—",
    description: "Conformado mecánico que convierte rotación en movimiento lineal de gran fuerza mediante tornillo y tuerca, con presión constante y uniforme.",
    aplicacion: "Prensas helicoidales, tornillos.",
    image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
  },
  {
    title: "Perforación por Taladro",
    capacity: "Planchas: todos los diámetros / 1.2 m de bandera. Perfiles: todos los espesores",
    description: "Mecanizado de agujeros cilíndricos en piezas metálicas mediante broca giratoria de avance controlado.",
    aplicacion: "Perforado de vigas, cartelas, grandes piezas estructurales.",
    image: `${import.meta.env.BASE_URL}images/servicios/perforacion.jpg`,
  },
  {
    title: "Torneado",
    capacity: "—",
    description: "Mecanizado por arranque de viruta con pieza giratoria en mandril y herramienta de corte lineal, con precisión de milésimas de milímetro.",
    aplicacion: "Mecanizados, tornillos, fabricación de ejes.",
    image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
  },
  {
    title: "Soldadura",
    capacity: "GMAW (MIG/MAG), GTAW (TIG), SMAW (electrodo), FCAW",
    description: "Unión soldada con diferentes tipos de procesos certificados. Posiciones 1G y 4G disponibles según requerimiento.",
    aplicacion: "Estructuras metálicas, montajes industriales.",
    image: `${import.meta.env.BASE_URL}images/servicios/soldadura.jpg`,
  },
  {
    title: "Arenado",
    capacity: "—",
    description: "Limpieza abrasiva por impacto proyectando arena de sílice a alta presión, dejando el metal completamente limpio con rugosidad ideal para pintura.",
    aplicacion: "Limpieza de piezas metálicas previo a pintura.",
    image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
  },
  {
    title: "Pintado Epóxico",
    capacity: "—",
    description: "Recubrimiento de dos componentes (resina + catalizador) que genera una capa extremadamente dura, impermeable y resistente a la abrasión.",
    aplicacion: "Capa de protección post-arenado.",
    image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
  },
  {
    title: "Fabricación de Vigas I y H",
    capacity: "Diferentes medidas según mercado o pedido",
    description: "Próximamente: fabricación de vigas I y H para diferentes usos industriales.",
    aplicacion: "Puentes, columnas, cerchas.",
    image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
  },
  {
    title: "Reconstrucción de Cucharones",
    capacity: "—",
    description: "Restauración integral de cucharones de excavadora, cargador frontal o retroexcavadora. Reemplazo de planchas, refuerzo de zonas críticas y recuperación de alojamientos con aceros de alta dureza.",
    aplicacion: "Minería y construcción.",
    image: `${import.meta.env.BASE_URL}images/servicios/reconstruccion.jpg`,
  },
  {
    title: "Armado de Estructuras",
    capacity: "Según pedido del cliente",
    description: "Ensamble técnico de componentes metálicos (vigas, columnas, arriostres y placas) mediante soldadura de posicionamiento o conexiones empernadas, garantizando geometría y estabilidad.",
    aplicacion: "Todo tipo de industria y construcción.",
    image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
  },
  {
    title: "Montaje de Estructuras Metálicas",
    capacity: "Hasta 10 metros de altura",
    description: "Fase final en sitio de instalación (campo): ensamble de componentes fabricados para levantar la estructura definitiva, gestionando clima, altura y logística de izaje.",
    aplicacion: "Obras industriales, mineras y civiles.",
    image: `${import.meta.env.BASE_URL}images/servicios/montaje.jpg`,
  },
  {
    title: "Servicio de Grúa",
    capacity: "02 unidades",
    description: "Servicio de grúa para trabajos dentro de la empresa y traslado de estructuras, rolado, plegado, corte y más, según pedido del cliente.",
    aplicacion: "Izaje y traslado de piezas y estructuras.",
    image: `${import.meta.env.BASE_URL}images/servicios/montaje.jpg`,
  },
  {
    title: "Importación de Maquinaria Amarilla",
    capacity: "—",
    description: "Importación de maquinaria minera y de construcción desde Asia y Europa (Bélgica, China, Canadá, etc.) con toda la documentación legal y recojo en planta.",
    aplicacion: "Minería y construcción.",
    image: `${import.meta.env.BASE_URL}images/servicios/maquinaria.jpg`,
  },
  {
    title: "Estructuras para Minería y Construcción",
    capacity: "Según especificaciones del cliente",
    description: "Fabricamos todo tipo de estructuras metálicas. Contamos con área de ingeniería para estudio de cargas, modelado y control dimensional.",
    aplicacion: "Minería, construcción, industria general.",
    image: `${import.meta.env.BASE_URL}images/servicios/armado.jpg`,
  },
];

export default function Servicios() {
  const [active, setActive] = useState(null);
  const [modalIdx, setModalIdx] = useState(null);

  return (
    <section id="servicios" className="py-32 px-6 md:px-20 overflow-hidden">

      {/* TITULO */}
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-semibold">Servicios</h2>
        <p className="mt-6 text-lg">
          Soluciones industriales diseñadas para durar.
        </p>
      </div>

      {/* GRID DE SERVICIOS */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicios.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
          >
            <div
              onClick={() => setActive(active === i ? null : i)}
              style={{
                background: "hsl(var(--bg-soft) / 0.6)",
                border: "1px solid hsl(var(--accent) / 0.15)",
              }}
              className="rounded-2xl cursor-pointer select-none overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <span className="text-sm font-bold uppercase tracking-wide leading-snug">
                  {s.title}
                </span>
                <motion.span
                  animate={{ rotate: active === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ color: "hsl(var(--accent))" }}
                  className="text-xl font-bold flex-shrink-0"
                >
                  +
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 space-y-3">
                      {s.capacity && s.capacity !== "—" && (
                        <p className="text-xs font-semibold uppercase tracking-widest"
                           style={{ color: "hsl(var(--accent))" }}>
                          {s.capacity}
                        </p>
                      )}
                      <p className="text-sm leading-relaxed">{s.description}</p>
                      <p className="text-xs opacity-60">
                        <span className="font-semibold uppercase">Aplicación: </span>
                        {s.aplicacion}
                      </p>
                      <button
                        onClick={(e) => { e.stopPropagation(); setModalIdx(i); }}
                        className="mt-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                        style={{
                          background: "hsl(var(--accent) / 0.15)",
                          border: "1px solid hsl(var(--accent) / 0.35)",
                          color: "hsl(var(--accent))",
                        }}
                      >
                        Ver imagen
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL IMAGEN — on-image para texto blanco, no-filter en imagen */}
      <AnimatePresence>
        {modalIdx !== null && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md z-[999] flex items-center justify-center px-4"
            style={{ background: "hsl(var(--bg-dark) / 0.85)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalIdx(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
              initial={{ y: 80, opacity: 0, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 130, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* modal-img: tono 100% original sin ningún filtro */}
              <img
                src={servicios[modalIdx].image}
                className="modal-img w-full h-[55vh] object-cover"
              />
              {/* Overlay NEGRO puro — no el bg-dark claro que blanqueaba */}
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.20)" }} />
              {/* modal-body: CSS garantiza blanco + negrita en todo el texto */}
              <div className="modal-body relative p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl uppercase">
                  {servicios[modalIdx].title}
                </h3>
                {servicios[modalIdx].capacity !== "—" && (
                  <p className="mt-2 text-sm">
                    {servicios[modalIdx].capacity}
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed">
                  {servicios[modalIdx].description}
                </p>
                <button
                  onClick={() => setModalIdx(null)}
                  className="mt-8 px-6 py-2.5 rounded-full text-sm font-semibold"
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
