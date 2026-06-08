import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, ShieldCheck, Sparkles, Zap } from "lucide-react";
import arenaPortal from "../assets/bravura-arena-portal.png";
import { createWhatsAppLink } from "../data/products.js";

const floatingCards = [
  { label: "Camisas de time", value: "Drops ativos", icon: ShieldCheck, x: "left-2 top-10" },
  { label: "Atacado", value: "2+ peças", icon: Zap, x: "right-4 top-24" },
  { label: "Manaus + AM", value: "Envio rápido", icon: Sparkles, x: "left-10 bottom-8" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0">
        <img
          src={arenaPortal}
          alt=""
          className="h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.78)_38%,rgba(5,5,5,.28)_64%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.2),#050505_96%)]" />
      </div>

      <div className="absolute inset-0 portal-rings" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 border border-bravura-blue/35 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-bravura-blue backdrop-blur-xl">
            <span className="h-2 w-2 bg-bravura-green shadow-[0_0_14px_rgba(0,255,136,.9)]" />
            Catálogo esportivo online
          </div>
          <h1 className="cyber-title font-display text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
            BRAVURA ESPORTES // ARENA DIGITAL
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold text-bravura-ice sm:text-2xl">
            Vista sua paixão. Entre em campo com bravura.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-bravura-metal sm:text-lg">
            Camisas de time, seleção, dry fit e peças esportivas em uma experiência
            de outro mundo.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-bravura-metal sm:text-base">
            Entrega em Manaus e envio para todo Amazonas. Varejo, atacado e
            atendimento rápido pelo WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="neon-button inline-flex items-center justify-center gap-3 px-6 py-4 font-bold"
            >
              Explorar Catálogo
              <ArrowDown size={19} />
            </a>
            <a
              href={createWhatsAppLink(
                "Olá, vim pelo site da Bravura Esportes e quero comprar pelo WhatsApp.",
              )}
              target="_blank"
              rel="noreferrer"
              className="ghost-button inline-flex items-center justify-center gap-3 px-6 py-4 font-bold"
            >
              <MessageCircle size={19} />
              Comprar no WhatsApp
            </a>
          </div>
        </motion.div>

        <div className="relative min-h-[430px] lg:min-h-[580px]">
          <div className="absolute inset-0 hidden lg:block" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 border border-bravura-orange/35 sm:h-96 sm:w-96"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 border border-bravura-blue/35 sm:h-72 sm:w-72"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          {floatingCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className={`holo-card absolute ${card.x} w-48 p-4`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.18, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <Icon className="mb-4 text-bravura-orange" size={25} />
                <p className="font-display text-[11px] uppercase tracking-[0.2em] text-bravura-metal">
                  {card.label}
                </p>
                <p className="mt-1 text-lg font-black text-bravura-ice">{card.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
