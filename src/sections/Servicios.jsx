import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ── SERVICIOS PRINCIPALES ─────────────────────────────────── */
const principales = [
  {
    title: "Rolado de Planchas",
    resumen: "Curvatura uniforme en geometrías cilíndricas, cónicas o circulares.",
    capacity: "Espesores desde 2 mm hasta 1\"",
    description: "Conformado en frío de láminas metálicas mediante máquinas roladoras de tres o cuatro rodillos. Garantiza curvatura uniforme y controlada, transformando piezas planas en geometrías cilíndricas, cónicas o circulares, manteniendo la integridad estructural del material.",
    aplicacion: "Tanques de almacenamiento, virolas, calderas.",
    image: `${import.meta.env.BASE_URL}images/servicios/1.jpg`,
  },
  {
    title: "Plegado de Planchas",
    resumen: "Ángulos precisos de 90°, abiertos o cerrados con punzón y matriz en V.",
    capacity: "0.4×½\"×4 m",
    description: "Proceso de conformado por flexión en el que se ejerce presión sobre una plancha metálica mediante un punzón (herramienta superior) y una matriz en V (herramienta inferior). La máquina obliga al metal a doblarse siguiendo la forma de la matriz, logrando ángulos precisos.",
    aplicacion: "Piezas estructurales, carrocería tolvas, ductos.",
    image: `${import.meta.env.BASE_URL}images/servicios/2.jpg`,
  },
  {
    title: "Corte en Guillotina",
    resumen: "Corte lineal hidráulico sin virutas ni calor con medidas a pedido.",
    capacity: "0.4×½\"×4 m",
    description: "Proceso de corte lineal de metales que utiliza la fuerza de presión hidráulica para bajar una cuchilla superior sobre una cuchilla inferior fija. El corte se produce por un esfuerzo de cizallamiento que supera la resistencia a la tracción del material, logrando una separación limpia sin generar virutas ni calor. Trabajamos con medidas proporcionadas por el cliente.",
    aplicacion: "Piezas estructurales, cartelas, bridas.",
    image: `${import.meta.env.BASE_URL}images/servicios/3.jpg`,
  },
  {
    title: "Oxicorte",
    resumen: "Corte de grandes espesores que superan la capacidad de guillotina.",
    capacity: "Espesores grandes",
    description: "Brindamos cortes para planchas de grandes espesores que no se pueden cortar en una guillotina hidráulica o en una cizalla. Proceso térmico de alta precisión para materiales de alta resistencia.",
    aplicacion: "Rolados, piezas de cucharones.",
    image: `${import.meta.env.BASE_URL}images/servicios/4.jpg`,
  },
  {
    title: "Soldadura",
    resumen: "Unión certificada con múltiples procesos: MIG, TIG, SMAW, FCAW.",
    capacity: "GMAW (MIG/MAG), GTAW (TIG), SMAW (electrodo), FCAW",
    description: "Ofrecemos unión soldada con diferentes tipos de soldadura en posiciones 1G y 4G. Procesos certificados GMAW (MIG y MAG), GTAW (TIG), SMAW (arco eléctrico/electrodo) y FCAW, aplicados según el tipo de material, espesor y exigencia estructural del proyecto.",
    aplicacion: "Estructuras metálicas, montajes industriales.",
    image: `${import.meta.env.BASE_URL}images/servicios/5.jpg`,
  },
  {
    title: "Reconstrucción de Cucharones",
    resumen: "Restauración integral de cucharones con aceros de alta dureza.",
    capacity: "Excavadora, cargador frontal, retroexcavadora",
    description: "Proceso de restauración integral de la estructura y los elementos de desgaste de un cucharón (de excavadora, cargador frontal o retroexcavadora). Incluye el reemplazo de planchas desgastadas, el refuerzo de zonas críticas y la recuperación de alojamientos de pasadores, utilizando aceros especiales de alta dureza.",
    aplicacion: "Minería y construcción.",
    image: `${import.meta.env.BASE_URL}images/servicios/6.jpg`,
  },
  {
    title: "Armado de Estructuras",
    resumen: "Ensamble técnico garantizando geometría y estabilidad según planos.",
    capacity: "Según pedido del cliente",
    description: "Se arman estructuras metálicas para todo tipo de industria y para todo tipo de fin. Proceso de ensamble técnico de componentes metálicos (vigas, columnas, arriostres y placas) mediante soldadura de posicionamiento o conexiones empernadas. El objetivo es garantizar la geometría, verticalidad y estabilidad de la estructura siguiendo estrictamente los planos de ingeniería.",
    aplicacion: "Todo tipo de industria y construcción.",
    image: `${import.meta.env.BASE_URL}images/servicios/7.jpg`,
  },
  {
    title: "Importación de Maquinaria",
    resumen: "Importamos maquinaria desde Asia y Europa con documentación completa.",
    capacity: "—",
    description: "Importación de maquinaria minera y de construcción de diferentes continentes como Asia y Europa, de diferentes países como Bélgica, China, Canadá, etc. Con toda la documentación de acuerdo a ley, con recojo en la misma empresa.",
    aplicacion: "Minería y construcción.",
    image: `${import.meta.env.BASE_URL}images/servicios/8.jpg`,
  },
  {
    title: "Servicio de Grúa",
    resumen: "02 unidades para izaje y traslado de estructuras dentro y fuera de planta.",
    capacity: "02 unidades",
    description: "Servicio de grúa para todo trabajo que se realice en la empresa, según pedido del cliente. Traslado de trabajos de estructuras y servicios de rolado, plegado, corte, etc. Disponible para operaciones dentro y fuera de planta.",
    aplicacion: "Izaje y traslado de piezas y estructuras.",
    image: `${import.meta.env.BASE_URL}images/servicios/9.jpg`,
  },
];

/* ── SERVICIOS ADICIONALES ─────────────────────────────────── */
const adicionales = [
  {
    title: "Rolado de Perfiles",
    capacity: "Tubo circular hasta 4\", cuadrado 100×100 mm, rectangular 100×50 mm, ángulos hasta 3\"×3\"×½\"",
    description: "Proceso de deformación mecánica con máquina de tres rodillos (piramidal o asimétrica) con dados adaptables para curvar ángulos, canales, vigas o tubos. Genera radio de curvatura constante mediante presión mecánica o hidráulica.",
    aplicacion: "Barandas, cerchas, arcos de techado, fachadas arquitectónicas.",
    image: `${import.meta.env.BASE_URL}images/servicios/10.jpg`,
  },
  {
    title: "Rolado de Cimbras",
    capacity: "Espesores desde 2 mm hasta 1\"",
    description: "Curvado mecánico de perfiles de acero pesado (vigas H, I o canales U) para crear arcos estructurales denominados cerchas o arcos de sostenimiento.",
    aplicacion: "Arcos de techado, minería subterránea, túneles viales.",
    image: `${import.meta.env.BASE_URL}images/servicios/11.jpg`,
  },
  {
    title: "Punzonado Hidráulico",
    capacity: "Planchas hasta 2\", ángulos hasta 4\"×4\"×½\"",
    description: "Corte mecánico en frío que utiliza un pistón hidráulico para empujar un punzón de acero templado a través de una plancha o perfil metálico, con guía de centrado para acabado preciso.",
    aplicacion: "Bridas, piezas estructurales, accesorios metálicos.",
    image: `${import.meta.env.BASE_URL}images/servicios/12.jpg`,
  },
  {
    title: "Corte por Cizalla",
    capacity: "Desde 3/8\" hasta 2\"",
    description: "El corte ocurre por esfuerzo de cizalladura con dos cuchillas de filos opuestos que se desplazan en sentidos contrarios con una separación mínima.",
    aplicacion: "Diferentes tipos de diámetros.",
    image: `${import.meta.env.BASE_URL}images/servicios/13.jpg`,
  },
  {
    title: "Prensado Hidráulico Vertical",
    capacity: "100 TN",
    description: "Pistón de desplazamiento vertical impulsado por aceite a alta presión que aplica fuerza de compresión controlada sobre una pieza colocada en la cama de la prensa.",
    aplicacion: "Rectificar bridas, cartelas.",
    image: `${import.meta.env.BASE_URL}images/servicios/14.jpg`,
  },
  {
    title: "Prensado Hidráulico Helicoidal",
    capacity: "—",
    description: "Conformado mecánico que convierte rotación en movimiento lineal de gran fuerza mediante tornillo y tuerca, con presión constante y uniforme al girar el eje.",
    aplicacion: "Prensas helicoidales, tornillos.",
    image: `${import.meta.env.BASE_URL}images/servicios/15.jpg`,
  },
  {
    title: "Perforación por Taladro",
    capacity: "Planchas: todos los diámetros / 1.2 m de bandera. Perfiles: todos los espesores",
    description: "Mecanizado de agujeros cilíndricos en piezas metálicas mediante broca giratoria de avance controlado con precisión milimétrica.",
    aplicacion: "Perforado de vigas, cartelas, grandes piezas estructurales.",
    image: `${import.meta.env.BASE_URL}images/servicios/16.jpg`,
  },
  {
    title: "Torneado",
    capacity: "—",
    description: "Mecanizado por arranque de viruta. La pieza gira en un mandril mientras una herramienta de corte avanza linealmente con precisión de milésimas de milímetro.",
    aplicacion: "Mecanizados, tornillos, fabricación de ejes.",
    image: `${import.meta.env.BASE_URL}images/servicios/17.jpg`,
  },
  {
    title: "Arenado",
    capacity: "—",
    description: "Limpieza abrasiva por impacto proyectando arena de sílice a alta presión contra superficie metálica. Deja el metal completamente limpio con rugosidad ideal para adherencia de pintura.",
    aplicacion: "Limpieza de piezas metálicas previo a pintura.",
    image: `${import.meta.env.BASE_URL}images/servicios/18.jpg`,
  },
  {
    title: "Pintado Epóxico",
    capacity: "—",
    description: "Recubrimiento de dos componentes (resina + catalizador) que al mezclarse genera una capa extremadamente dura, impermeable y resistente a la abrasión.",
    aplicacion: "Capa de protección post-arenado.",
    image: `${import.meta.env.BASE_URL}images/servicios/19.jpg`,
  },
  {
    title: "Fabricación de Vigas I y H",
    capacity: "Diferentes medidas según mercado o pedido",
    description: "Próximamente: fabricación de vigas I y H para diferentes usos como puentes, columnas, cerchas, etc.",
    aplicacion: "Puentes, columnas, cerchas.",
    image: `${import.meta.env.BASE_URL}images/servicios/20.jpg`,
  },
  {
    title: "Montaje de Estructuras Metálicas",
    capacity: "Hasta 10 metros de altura",
    description: "Fase final en sitio de instalación (campo). Ensamble de componentes fabricados para levantar la estructura definitiva, enfrentando retos como clima, altura y logística de izaje.",
    aplicacion: "Obras industriales, mineras y civiles.",
    image: `${import.meta.env.BASE_URL}images/servicios/21.jpg`,
  },
  {
    title: "Estructuras para Minería y Construcción",
    capacity: "Según especificaciones del cliente",
    description: "Fabricamos todo tipo de estructuras metálicas según especificaciones. Contamos con área de ingeniería para estudio de cargas, modelado y control dimensional.",
    aplicacion: "Minería, construcción, industria general.",
    image: `${import.meta.env.BASE_URL}images/servicios/22.jpg`,
  },
];

/* ── CARD PRINCIPAL HORIZONTAL ────────────────────────────── */
function CardPrincipal({ servicio, index, onVerMas }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="on-image group relative w-full overflow-hidden rounded-2xl"
      style={{ height: "260px" }}
    >
      {/* IMAGEN fondo */}
      <img
        src={servicio.image}
        alt={servicio.title}
        className="no-filter absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* OVERLAY gradiente — oscuro en el lado del texto */}
      <div
        className="absolute inset-0"
        style={{
          background: fromLeft
            ? "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.10) 100%)"
            : "linear-gradient(to left,  rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      {/* BORDE turquesa hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: "1.5px solid hsl(var(--tq) / 0.5)" }}
      />

      {/* CONTENIDO — lado izquierdo o derecho según índice */}
      <div
        className={`relative h-full flex flex-col justify-center px-8 md:px-12 max-w-[55%] ${
          fromLeft ? "items-start" : "items-start ml-auto"
        }`}
      >
        {/* Numeración decorativa */}
        <span
          className="text-xs font-black tracking-[0.3em] uppercase mb-2 opacity-70"
          style={{ color: "hsl(var(--tq-light))" }}
        >
          0{index + 1}
        </span>

        {/* Línea turquesa */}
        <div
          className="h-[2px] mb-3 transition-all duration-500 group-hover:w-12"
          style={{ width: "2rem", background: "hsl(var(--tq))" }}
        />

        {/* Título */}
        <h3
          className="text-xl md:text-2xl font-black uppercase leading-tight tracking-wide"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}
        >
          {servicio.title}
        </h3>

        {/* Resumen */}
        <p
          className="mt-2 text-xs md:text-sm leading-relaxed opacity-90"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
        >
          {servicio.resumen}
        </p>

        {/* Botón ver más */}
        <button
          onClick={() => onVerMas(index)}
          className="mt-4 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: "hsl(var(--tq) / 0.25)",
            border: "1px solid hsl(var(--tq) / 0.6)",
            color: "#fff",
            backdropFilter: "blur(4px)",
          }}
        >
          Ver más
        </button>
      </div>
    </motion.div>
  );
}

/* ── MODAL DETALLE SERVICIO PRINCIPAL ─────────────────────── */
function ModalDetalle({ servicio, onClose }) {
  if (!servicio) return null;
  return (
    <motion.div
      className="fixed inset-0 backdrop-blur-md z-[999] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
        initial={{ y: 60, opacity: 0, scale: 0.94 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen cabecera */}
        <img
          src={servicio.image}
          className="modal-img w-full h-48 object-cover"
        />
        <div className="absolute top-0 inset-x-0 h-48" style={{ background: "rgba(0,0,0,0.45)" }} />

        {/* Título sobre imagen */}
        <div className="absolute top-0 inset-x-0 h-48 flex flex-col justify-end p-6">
          <div className="w-8 h-[2px] mb-2" style={{ background: "hsl(var(--tq))" }} />
          <h3 className="text-2xl font-black uppercase" style={{ color: "#ffffff", textShadow: "0 1px 10px rgba(255, 255, 255, 0.9)" }}>
            {servicio.title}
          </h3>
        </div>

        {/* Cuerpo */}
        <div
          className="p-7 md:p-9 space-y-4"
          style={{ background: "hsl(var(--bg-card))" }}
        >
          {servicio.capacity && servicio.capacity !== "—" && (
            <p
              className="text-xs font-black uppercase tracking-widest"
              style={{ color: "hsl(var(--tq))" }}
            >
              Capacidad: {servicio.capacity}
            </p>
          )}
          <p className="text-sm leading-relaxed">{servicio.description}</p>
          <p className="text-xs opacity-60">
            <span className="font-bold uppercase tracking-wider">Aplicación: </span>
            {servicio.aplicacion}
          </p>
          <div className="pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Cerrar
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── COMPONENTE PRINCIPAL ──────────────────────────────────── */
export default function Servicios() {
  const [modalPrincipal, setModalPrincipal] = useState(null);
  const [active, setActive]                 = useState(null);
  const [modalAdicional, setModalAdicional] = useState(null);
  const [showMas, setShowMas]               = useState(false);

  return (
    <section id="servicios" className="py-32 px-6 md:px-20 overflow-hidden">

      {/* TITULO */}
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold"
            style={{
      background: "linear-gradient(105deg, hsl(var(--tq-dark)) 0%, hsl(var(--tq-light)) 50%, hsl(var(--tq-dark)) 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
        }}
        >Servicios</h2>
        <p className="mt-6 text-lg">
          Soluciones industriales diseñadas para durar.
        </p>
      </motion.div>

      {/* ── SERVICIOS PRINCIPALES — horizontal, alternan lados ── */}
      <div className="mt-16 flex flex-col gap-5">
        {principales.map((s, i) => (
          <CardPrincipal
            key={i}
            servicio={s}
            index={i}
            onVerMas={(idx) => setModalPrincipal(idx)}
          />
        ))}
      </div>

      {/* ── BOTÓN MÁS SERVICIOS ─────────────────────────────────── */}
      <div className="mt-14 flex justify-center">
        <motion.button
          onClick={() => setShowMas((v) => !v)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase"
        >
          <span>{showMas ? "Ocultar servicios" : "Más servicios"}</span>
          <motion.span
            animate={{ rotate: showMas ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-xl font-bold leading-none"
          >
            +
          </motion.span>
        </motion.button>
      </div>

      {/* ── SERVICIOS ADICIONALES — accordion ───────────────────── */}
      <AnimatePresence>
        {showMas && (
          <motion.div
            key="adicionales"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {adicionales.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
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
                              <p
                                className="text-xs font-semibold uppercase tracking-widest"
                                style={{ color: "hsl(var(--accent))" }}
                              >
                                {s.capacity}
                              </p>
                            )}
                            <p className="text-sm leading-relaxed">{s.description}</p>
                            <p className="text-xs opacity-60">
                              <span className="font-semibold uppercase">Aplicación: </span>
                              {s.aplicacion}
                            </p>
                            <button
                              onClick={(e) => { e.stopPropagation(); setModalAdicional(i); }}
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MODAL DETALLE — servicios principales ───────────────── */}
      <AnimatePresence>
        {modalPrincipal !== null && (
          <ModalDetalle
            servicio={principales[modalPrincipal]}
            onClose={() => setModalPrincipal(null)}
          />
        )}
      </AnimatePresence>

      {/* ── MODAL IMAGEN — servicios adicionales ────────────────── */}
      <AnimatePresence>
        {modalAdicional !== null && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md z-[999] flex items-center justify-center px-4"
            style={{ background: "rgba(0,0,0,0.75)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalAdicional(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
              initial={{ y: 80, opacity: 0, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 130, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={adicionales[modalAdicional]?.image}
                className="modal-img w-full h-[55vh] object-cover"
              />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0)" }} />
              <div className="modal-body relative p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl uppercase">
                  {adicionales[modalAdicional]?.title}
                </h3>
                {adicionales[modalAdicional]?.capacity && adicionales[modalAdicional]?.capacity !== "—" && (
                  <p className="mt-2 text-sm">{adicionales[modalAdicional]?.capacity}</p>
                )}
                <p className="mt-4 text-sm leading-relaxed">
                  {adicionales[modalAdicional]?.description}
                </p>
                <button
                  onClick={() => setModalAdicional(null)}
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
