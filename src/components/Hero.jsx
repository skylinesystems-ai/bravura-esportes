import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Shirt, ShoppingBag, Truck, UsersRound } from "lucide-react";
import stadiumStore from "../assets/bravura-stadium-store.png";
import { createWhatsAppLink } from "../data/products.js";

const floatingCards = [
  { label: "Camisas", value: "Times e seleções", icon: Shirt, x: "left-2 top-8" },
  { label: "Atacado", value: "2+ peças", icon: UsersRound, x: "right-4 top-28" },
  { label: "Entrega", value: "Manaus + Amazonas", icon: Truck, x: "left-10 bottom-10" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0">
        <img
          src={stadiumStore}
          alt=""
          className="h-full w-full object-cover opacity-78"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.86)_37%,rgba(5,5,5,.24)_68%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.18),rgba(5,5,5,.72)_72%,#050505_100%)]" />
      </div>

      <div className="absolute inset-0 stadium-lines" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 border border-bravura-orange/35 bg-black/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-bravura-orange backdrop-blur-xl">
            <span className="h-2 w-2 bg-bravura-green shadow-[0_0_12px_rgba(0,255,136,.7)]" />
            Arena Store Online
          </div>
          <h1 className="arena-title font-display text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
            BRAVURA ESPORTES
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold text-bravura-ice sm:text-2xl">
            Vista sua paixão. Entre em campo com bravura.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-bravura-metal sm:text-lg">
            Camisas de time, seleção, dry fit e peças esportivas em um catálogo
            moderno com clima de estádio.
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
            className="scoreboard-panel absolute left-1/2 top-1/2 hidden w-72 -translate-x-1/2 -translate-y-1/2 p-5 sm:block"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-bravura-metal">
                Matchday
              </span>
              <span className="bg-bravura-orange px-2 py-1 text-xs font-black text-bravura-black">
                STORE
              </span>
            </div>
            <div className="grid place-items-center py-9">
              <ShoppingBag className="text-bravura-orange" size={64} />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-bravura-metal">
              <span>Seleções</span>
              <span>Clubes</span>
              <span>Dry Fit</span>
            </div>
          </motion.div>
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
