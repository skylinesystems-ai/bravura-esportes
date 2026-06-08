import { Instagram, MessageCircle, WalletCards } from "lucide-react";
import BrandLogo from "./BrandLogo.jsx";

export default function Footer() {
  return (
    <footer id="contato" className="relative z-10 border-t border-white/10 bg-black/80 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <BrandLogo size="md" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-bravura-metal">
            Camisas de time, seleção, dry fit, retrô e peças esportivas para varejo
            e atacado.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-bravura-orange">
              Operação
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-bravura-metal">
              <li>Manaus-AM</li>
              <li>Segunda a sábado</li>
              <li>Enviamos para todo Amazonas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-bravura-blue">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-bravura-metal">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-bravura-green" />
                WhatsApp: 559293975581
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="text-bravura-purple" />
                Instagram: @bravuraesportes
              </li>
              <li className="flex items-start gap-2">
                <WalletCards size={16} className="mt-1 text-bravura-orange" />
                Formas de pagamento: Pix, dinheiro, cartão de crédito e débito
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs uppercase tracking-[0.16em] text-bravura-metal sm:px-6 lg:px-8">
        BRAVURA ESPORTES // ARENA DIGITAL
      </div>
    </footer>
  );
}
