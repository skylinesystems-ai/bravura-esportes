import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/testimonials.js";

export default function SocialProof() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span>Prova Social</span>
          <h2>Quem compra, volta para o próximo drop.</h2>
          <p>Depoimentos fictícios para demonstrar a área de confiança do site.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              className="holo-card p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
            >
              <div className="mb-5 flex items-center justify-between text-bravura-orange">
                <Quote size={28} />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="min-h-24 text-lg leading-8 text-bravura-ice">
                “{testimonial.quote}”
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm font-bold uppercase tracking-[0.16em] text-bravura-metal">
                {testimonial.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
