import { motion } from "framer-motion";
import { Boxes, MessageCircle, PackagePlus, Timer, UsersRound } from "lucide-react";
import { createWhatsAppLink } from "../data/products.js";

const wholesaleItems = [
  { icon: Boxes, title: "Preço especial", text: "A partir de 2 peças." },
  { icon: Timer, title: "Atendimento rápido", text: "Pedido direto no WhatsApp." },
  { icon: PackagePlus, title: "Monte kits", text: "Combine camisas, shorts e dry fit." },
  { icon: UsersRound, title: "Compra em grupo", text: "Ideal para amigos e revenda." },
];

export default function Wholesale() {
  return (
    <section id="atacado" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">Modo Atacado</span>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-bravura-ice sm:text-5xl">
              Comprou 2 ou mais? O preço fica melhor.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-bravura-metal">
              Monte seu kit, compre com os amigos ou revenda peças esportivas com
              condições especiais.
            </p>
            <a
              href={createWhatsAppLink(
                "Olá, vim pelo site da Bravura Esportes e quero falar sobre atacado.",
              )}
              target="_blank"
              rel="noreferrer"
              className="neon-button mt-8 inline-flex items-center justify-center gap-3 px-6 py-4 font-bold"
            >
              <MessageCircle size={20} />
              Falar sobre atacado
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {wholesaleItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="holo-card p-6"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <Icon className="mb-5 text-bravura-green" size={30} />
                  <h3 className="font-display text-lg font-bold uppercase text-bravura-ice">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-bravura-metal">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
