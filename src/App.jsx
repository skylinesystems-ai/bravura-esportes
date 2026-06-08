import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Benefits from "./components/Benefits.jsx";
import Categories from "./components/Categories.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InstagramSection from "./components/InstagramSection.jsx";
import IntroScreen from "./components/IntroScreen.jsx";
import ProductCatalog from "./components/ProductCatalog.jsx";
import SocialProof from "./components/SocialProof.jsx";
import WeeklyDrop from "./components/WeeklyDrop.jsx";
import Wholesale from "./components/Wholesale.jsx";
import { createWhatsAppLink } from "./data/products.js";

export default function App() {
  const [entered, setEntered] = useState(false);

  const enterArena = () => {
    setEntered(true);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
  };

  return (
    <div className="min-h-screen bg-bravura-black text-bravura-ice">
      <AnimatePresence mode="wait">
        {!entered && <IntroScreen key="intro" onEnter={enterArena} />}
      </AnimatePresence>

      {entered && (
        <motion.div
          className="site-bg relative min-h-screen overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
            <div className="particle-field" />
            <div className="scanlines" />
          </div>

          <Header />
          <main className="relative z-10">
            <Hero />
            <Categories />
            <ProductCatalog />
            <WeeklyDrop />
            <Wholesale />
            <Benefits />
            <SocialProof />
            <InstagramSection />
          </main>
          <Footer />

          <a
            href={createWhatsAppLink(
              "Olá, vim pelo site da Bravura Esportes e quero atendimento pelo WhatsApp.",
            )}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center border border-bravura-green/40 bg-bravura-green text-bravura-black shadow-[0_0_34px_rgba(0,255,136,.42)] transition hover:scale-105 hover:bg-bravura-ice"
            aria-label="Chamar Bravura Esportes no WhatsApp"
          >
            <MessageCircle size={26} />
          </a>
        </motion.div>
      )}
    </div>
  );
}
