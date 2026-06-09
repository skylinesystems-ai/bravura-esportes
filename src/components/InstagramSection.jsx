import { motion } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden border border-bravura-orange/25 bg-bravura-graphite/70 p-7 shadow-stadium backdrop-blur-2xl sm:p-10 lg:p-12"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(18,183,106,.14),transparent_42%,rgba(255,122,0,.18))]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow">Instagram</span>
              <h2 className="mt-4 font-display text-3xl font-black uppercase text-bravura-ice sm:text-5xl">
                Acompanhe os drops no Instagram.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-bravura-metal">
                Novas peças, vídeos de entrega, promoções e novidades aparecem
                primeiro no Instagram da Bravura.
              </p>
            </div>
            <a
              href="https://www.instagram.com/bravuraesportes/"
              target="_blank"
              rel="noreferrer"
              className="ghost-button inline-flex items-center justify-center gap-3 px-6 py-4 font-bold"
            >
              <Instagram size={20} />
              Ver Instagram
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
