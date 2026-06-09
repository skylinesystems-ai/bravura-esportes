import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, MapPin, MessageCircle, Percent, Truck } from "lucide-react";

const benefits = [
  { icon: Truck, title: "Entrega em Manaus" },
  { icon: MapPin, title: "Envio para todo Amazonas" },
  { icon: CreditCard, title: "Aceitamos cartão" },
  { icon: Percent, title: "Desconto a partir de 2 peças" },
  { icon: MessageCircle, title: "Atendimento rápido no WhatsApp" },
  { icon: CheckCircle2, title: "Produtos selecionados" },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span>Benefícios</span>
          <h2>Compra simples, visual premium e resposta rápida.</h2>
          <p>O fluxo do site leva direto para o WhatsApp com a peça escolhida.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="holo-card flex items-center gap-4 p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.04 }}
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center border border-bravura-green/30 bg-bravura-green/10 text-bravura-green">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-base font-bold uppercase leading-snug text-bravura-ice">
                  {benefit.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
