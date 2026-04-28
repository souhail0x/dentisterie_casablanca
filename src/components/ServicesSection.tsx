import { motion } from "framer-motion";
import { Sparkles, Stethoscope, Syringe, Layers, Activity, SmilePlus } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Esthétique Dentaire",
    description: "Facettes composites et céramiques pour un sourire harmonieux, lumineux et naturel."
  },
  {
    icon: <SmilePlus className="w-8 h-8" />,
    title: "Orthodontie",
    description: "Alignement parfait avec les systèmes les plus discrets, incluant les gouttières transparentes."
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: "Implantologie",
    description: "Remplacement de dents manquantes par des implants de haute qualité pour une fonction et esthétique optimales."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Blanchiment au Laser",
    description: "Technologie de pointe pour éclaircir vos dents de plusieurs teintes en une seule séance, en toute sécurité."
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Parodontologie",
    description: "Soins spécialisés des gencives pour assurer une fondation saine à votre sourire."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Urgences Dentaires",
    description: "Prise en charge rapide pour soulager la douleur et traiter les problèmes dentaires urgents."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[0.2em] text-sm text-accent mb-4 block">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-light">
              Des soins <span className="font-bold">d'exception</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-black border border-white/5 p-8 md:p-10 hover:border-white/20 transition-colors duration-500 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 text-white/80 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
