import { motion } from "framer-motion";
import { BadgeCheck, MessageCircle, Shirt } from "lucide-react";
import { productWhatsAppLink, products, weeklyDropIds } from "../data/products.js";

const weeklyProducts = weeklyDropIds
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean);

export default function WeeklyDrop() {
  return (
    <section id="drops" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-bravura-orange to-transparent opacity-45" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span>Drop da Semana</span>
          <h2>As peças mais desejadas da semana.</h2>
          <p>Três escolhas premium para garantir antes do apito inicial.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {weeklyProducts.map((product, index) => (
            <motion.article
              key={product.id}
              className="holo-card p-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, delay: index * 0.09 }}
              whileHover={{ y: -10 }}
            >
              <div
                className="product-visual mb-6 h-72"
                style={{
                  "--product-accent": product.accent,
                }}
              >
                <div className="absolute inset-0 product-visual-grid" />
                <div className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 border border-bravura-orange/40 bg-bravura-orange px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-bravura-black shadow-neon">
                  <BadgeCheck size={16} />
                  Drop Especial
                </div>
                <div className="relative z-10 grid h-full place-items-center">
                  <div className="grid h-32 w-32 place-items-center border border-white/15 bg-black/40 backdrop-blur-xl">
                    <Shirt size={70} style={{ color: product.accent }} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-bravura-green">
                {product.category}
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase text-bravura-ice">
                {product.name}
              </h3>
              <div className="mt-4 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                <div>
                  <p className="text-sm text-bravura-metal">Varejo</p>
                  <p className="text-2xl font-black text-bravura-orange">
                    {product.retailPrice}
                  </p>
                </div>
                <p className="max-w-36 text-right text-sm font-bold text-bravura-green">
                  {product.wholesalePrice}
                </p>
              </div>
              <a
                href={productWhatsAppLink(product.name)}
                target="_blank"
                rel="noreferrer"
                className="ghost-button mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-3 font-bold"
              >
                <MessageCircle size={18} />
                Garantir agora
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
