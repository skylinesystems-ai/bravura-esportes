import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Search, Shirt, SlidersHorizontal, Sparkles, Tag } from "lucide-react";
import { useMemo, useState } from "react";
import { productWhatsAppLink, products } from "../data/products.js";

const allFilters = ["Todos", ...Array.from(new Set(products.map((product) => product.category)))];

function ProductCard({ product, index }) {
  return (
    <motion.article
      layout
      className="holo-card group flex h-full flex-col p-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.38, delay: index * 0.03 }}
      whileHover={{ y: -8 }}
    >
      <div
        className="product-visual mb-5 overflow-hidden"
        style={{
          "--product-accent": product.accent,
        }}
      >
        <div className="absolute inset-0 product-visual-grid" />
        <div className="relative z-10 grid h-full place-items-center">
          <div className="grid h-24 w-24 place-items-center border border-white/15 bg-black/35 shadow-[0_0_32px_rgba(0,217,255,.16)] backdrop-blur-md">
            <Shirt size={52} style={{ color: product.accent }} />
          </div>
        </div>
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-bravura-ice backdrop-blur-xl">
          <Sparkles size={13} style={{ color: product.accent }} />
          {product.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mb-4">
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bravura-blue">
            <Tag size={14} />
            {product.category}
          </p>
          <h3 className="font-display text-xl font-black uppercase leading-tight text-bravura-ice">
            {product.name}
          </h3>
        </div>

        <div className="grid gap-3 border-y border-white/10 py-4 text-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="text-bravura-metal">Varejo</span>
            <strong className="text-lg text-bravura-orange">{product.retailPrice}</strong>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-bravura-metal">Atacado</span>
            <strong className="text-right text-bravura-green">{product.wholesalePrice}</strong>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="grid h-9 min-w-9 place-items-center border border-white/10 bg-white/[0.04] px-2 text-xs font-bold text-bravura-ice"
            >
              {size}
            </span>
          ))}
        </div>

        <a
          href={productWhatsAppLink(product.name)}
          target="_blank"
          rel="noreferrer"
          className="neon-button mt-5 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold"
        >
          <MessageCircle size={18} />
          Comprar no WhatsApp
        </a>
      </div>
    </motion.article>
  );
}

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesFilter = activeFilter === "Todos" || product.category === activeFilter;
      const matchesSearch =
        !search ||
        [product.name, product.category, product.tag]
          .join(" ")
          .toLowerCase()
          .includes(search);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  return (
    <section id="catalogo" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span>Catálogo Holográfico</span>
          <h2>Escolha a peça e chame no WhatsApp.</h2>
          <p>
            Busca rápida, filtros por categoria e cards preparados para venda no
            varejo ou atacado.
          </p>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-bravura-blue" size={20} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Buscar por produto, categoria ou tag"
              className="w-full border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-bravura-ice outline-none backdrop-blur-xl transition placeholder:text-bravura-metal/75 focus:border-bravura-orange focus:shadow-neon"
            />
          </label>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0">
            <span className="hidden items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-bravura-metal lg:inline-flex">
              <SlidersHorizontal size={18} />
              Filtros
            </span>
            {allFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 border px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] transition ${
                  activeFilter === filter
                    ? "border-bravura-orange bg-bravura-orange text-bravura-black shadow-neon"
                    : "border-white/10 bg-white/[0.04] text-bravura-metal hover:border-bravura-blue hover:text-bravura-ice"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="mt-8 border border-bravura-orange/25 bg-bravura-orange/10 p-6 text-center text-bravura-metal">
            Nenhum produto encontrado. Ajuste a busca ou fale direto no WhatsApp.
          </div>
        )}
      </div>
    </section>
  );
}
