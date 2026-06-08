import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "./BrandLogo.jsx";
import { createWhatsAppLink } from "../data/products.js";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Drops", href: "#drops" },
  { label: "Atacado", href: "#atacado" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo size="sm" asLink />

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-xs uppercase tracking-[0.16em] text-bravura-metal transition hover:text-bravura-orange"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={createWhatsAppLink(
              "Olá, vim pelo site da Bravura Esportes e quero conhecer o catálogo.",
            )}
            target="_blank"
            rel="noreferrer"
            className="neon-button inline-flex items-center gap-2 px-5 py-3 text-sm font-bold"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-white/5 text-bravura-ice transition hover:border-bravura-orange hover:text-bravura-orange lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="border-t border-white/10 bg-black/90 px-4 pb-5 pt-2 backdrop-blur-2xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border border-transparent px-3 py-3 font-display text-sm uppercase tracking-[0.16em] text-bravura-metal transition hover:border-bravura-orange/40 hover:bg-bravura-orange/10 hover:text-bravura-ice"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={createWhatsAppLink(
                  "Olá, vim pelo site da Bravura Esportes e quero conhecer o catálogo.",
                )}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="neon-button mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
