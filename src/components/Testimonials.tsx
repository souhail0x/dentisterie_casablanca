import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amine B.",
    text: "Un cabinet d'une élégance rare. Le Dr. Zioud est très professionnelle et rassurante. Résultat de mon blanchiment parfait, au-delà de mes espérances.",
    rating: 5
  },
  {
    name: "Sofia L.",
    text: "J'avais très peur des dentistes, mais l'approche douce et l'ambiance apaisante m'ont mise en confiance immédiatement. Mes facettes sont sublimes et naturelles.",
    rating: 5
  },
  {
    name: "Youssef T.",
    text: "Excellente expérience pour la pose de mes implants. Une technologie de pointe et un suivi irréprochable. Le résultat est invisible.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-zinc-950 relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[0.2em] text-sm text-accent mb-4 block">Témoignages</span>
            <h2 className="text-4xl md:text-5xl font-light">
              L'expérience de <span className="font-bold">nos patients</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-white/10 p-10 flex flex-col items-center text-center relative"
            >
              <div className="flex gap-1 mb-6 text-white">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white/70 font-light italic mb-8 leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
              <h4 className="uppercase tracking-widest text-sm font-medium">
                {testimonial.name}
              </h4>
              
              {/* Decorative accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-white/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
