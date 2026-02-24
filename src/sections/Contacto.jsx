import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative bg-black text-white py-32 px-6 md:px-20 overflow-hidden"
    >
      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-600 blur-3xl rounded-full" />
      </div>

      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Contacto
        </h2>

        <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
          Estamos listos para desarrollar tu proyecto. Comunícate con nosotros
          y recibe atención directa.
        </p>
      </motion.div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative mt-24 grid md:grid-cols-2 gap-16 items-start">

        {/* INFORMACION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-14"
        >
          {/* TELEFONO */}
          <motion.div whileHover={{ scale: 1.03 }} className="group transition">
            <h3 className="text-2xl font-medium">Teléfono</h3>
            <a
              href="tel:+51999999999"
              className="mt-3 block text-zinc-400 text-lg transition group-hover:text-white"
            >
              +51 999 999 999
            </a>
            <div className="h-[1px] bg-zinc-800 mt-4 group-hover:bg-white transition" />
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="transition"
          >
            <h3 className="text-2xl font-medium">WhatsApp</h3>

            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-8 py-4 bg-green-600 hover:bg-green-500 rounded-full text-white transition shadow-lg hover:shadow-green-600/40"
            >
              Enviar mensaje directo
            </a>
          </motion.div>

          {/* FACEBOOK */}
          <motion.div whileHover={{ scale: 1.03 }} className="group transition">
            <h3 className="text-2xl font-medium">Facebook</h3>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-zinc-400 text-lg transition group-hover:text-white"
            >
              Visitar página oficial
            </a>
            <div className="h-[1px] bg-zinc-800 mt-4 group-hover:bg-white transition" />
          </motion.div>

          {/* UBICACION TEXTO */}
          <motion.div whileHover={{ scale: 1.03 }} className="group transition">
            <h3 className="text-2xl font-medium">Ubicación</h3>
            <p className="mt-3 text-zinc-400 group-hover:text-white transition">
              Juliaca, Perú
            </p>
            <div className="h-[1px] bg-zinc-800 mt-4 group-hover:bg-white transition" />
          </motion.div>
        </motion.div>

        {/* MAPA */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps?q=-15.539105039957803,-70.11218421652295&z=17&output=embed"
            className="w-full h-[450px] border-0 grayscale hover:grayscale-0 transition duration-700"
            loading="lazy"
          />

          {/* BOTON VER EN MAPS */}
          <a
            href="https://www.google.com/maps?q=-15.539105039957803,-70.11218421652295"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 bg-white text-black px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition"
          >
            Ver en Google Maps
          </a>
        </motion.div>

      </div>

      {/* CTA FINAL */}
      <motion.div
        className="relative mt-40 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-medium">
          Hablemos de tu proyecto
        </h3>

        <motion.a
          href="https://wa.me/51999999999"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block px-10 py-5 bg-white text-black rounded-full text-lg font-medium transition shadow-xl"
        >
          Solicitar Cotización
        </motion.a>
      </motion.div>
    </section>
  );
}