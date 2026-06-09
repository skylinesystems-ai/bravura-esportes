import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Flag } from "lucide-react";
import BrandLogo from "./BrandLogo.jsx";

const bootLines = [
  "ABRINDO A ARENA BRAVURA...",
  "ORGANIZANDO CAMISAS E DROPS...",
  "CATÁLOGO ESPORTIVO PRONTO...",
  "ATENDIMENTO WHATSAPP ONLINE...",
  "BEM-VINDO À BRAVURA ESPORTES.",
];

export default function IntroScreen({ onEnter }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [completedLines, setCompletedLines] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        left: `${(index * 29) % 100}%`,
        top: `${(index * 47) % 100}%`,
        delay: (index % 9) * 0.24,
        duration: 3.5 + (index % 6) * 0.35,
      })),
    [],
  );

  useEffect(() => {
    if (lineIndex >= bootLines.length) {
      const timer = setTimeout(() => setShowButton(true), 420);
      return () => clearTimeout(timer);
    }

    const currentLine = bootLines[lineIndex];

    if (typedText.length < currentLine.length) {
      const timer = setTimeout(() => {
        setTypedText(currentLine.slice(0, typedText.length + 1));
      }, 34);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCompletedLines((lines) => [...lines, currentLine]);
      setTypedText("");
      setLineIndex((index) => index + 1);
    }, 420);

    return () => clearTimeout(timer);
  }, [lineIndex, typedText]);

  return (
    <motion.section
      className="fixed inset-0 z-50 grid min-h-screen place-items-center overflow-hidden bg-bravura-black px-5"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-hud-grid bg-[length:64px_64px] opacity-12" />
      <div className="absolute inset-0 intro-energy" />
      <div className="scanner-line" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bravura-green to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bravura-orange to-transparent" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-bravura-green shadow-[0_0_12px_rgba(0,255,136,.55)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-12, 18, -12], opacity: [0.16, 0.9, 0.16] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="relative z-10 w-full max-w-3xl text-center"
        initial={{ y: 28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto mb-8 flex h-56 w-56 items-center justify-center border border-bravura-orange/25 bg-bravura-graphite/65 shadow-neon backdrop-blur-xl sm:h-72 sm:w-72">
          <BrandLogo size="xl" />
        </div>

        <div className="mx-auto mb-7 max-w-xl border border-bravura-green/20 bg-black/55 p-5 text-left font-display text-xs uppercase leading-7 tracking-[0.18em] text-bravura-ice shadow-stadium backdrop-blur-xl sm:text-sm">
          <div className="mb-3 flex items-center gap-2 text-bravura-green">
            <Flag size={16} />
            <span>Catálogo Bravura Online</span>
          </div>
          {completedLines.map((line) => (
            <p key={line} className="text-bravura-metal">
              <span className="text-bravura-orange">&gt;</span> {line}
            </p>
          ))}
          {lineIndex < bootLines.length && (
            <p className="text-bravura-ice">
              <span className="text-bravura-orange">&gt;</span> {typedText}
              <span className="terminal-caret" />
            </p>
          )}
        </div>

        {showButton && (
          <motion.button
            type="button"
            onClick={onEnter}
            className="neon-button mx-auto inline-flex items-center justify-center gap-3 px-7 py-4 font-display text-sm uppercase tracking-[0.18em]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Entrar no Catálogo
            <ArrowRight size={18} />
          </motion.button>
        )}
      </motion.div>
    </motion.section>
  );
}
