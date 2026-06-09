import { motion } from "framer-motion";
import { Clock3, Dumbbell, Globe2, Package, Shield, Trophy } from "lucide-react";
import { categories } from "../data/categories.js";

const iconMap = {
  Trophy,
  Shield,
  Globe2,
  Dumbbell,
  Clock3,
  Package,
};

const accentStyles = {
  orange: "text-bravura-orange shadow-[0_0_22px_rgba(255,122,0,.28)]",
  blue: "text-bravura-green shadow-[0_0_22px_rgba(18,183,106,.22)]",
  purple: "text-bravura-orange shadow-[0_0_22px_rgba(255,122,0,.22)]",
  green: "text-bravura-green shadow-[0_0_22px_rgba(18,183,106,.24)]",
};

export default function Categories() {
  return (
    <section id="categorias" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span>Vitrine da Arena</span>
          <h2>Categorias para cada tipo de torcedor.</h2>
          <p>
            Escolha seu estilo: torcida, treino, coleção, presente ou revenda.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.a
                href={category.id === "atacado" ? "#atacado" : "#catalogo"}
                key={category.id}
                className="holo-card group p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -7 }}
              >
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center border border-white/10 bg-white/[0.04] ${
                    accentStyles[category.accent]
                  }`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-bravura-ice">
                  {category.name}
                </h3>
                <p className="mt-3 leading-7 text-bravura-metal">{category.description}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
