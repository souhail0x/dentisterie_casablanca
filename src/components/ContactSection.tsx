import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.2em] text-sm text-accent mb-4 block">Contact</span>
            <h2 className="text-4xl md:text-5xl font-light mb-12">
              Nous <span className="font-bold">trouver</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-sm font-medium mb-2">Adresse</h4>
                  <p className="text-white/70 font-light">
                    211 Boulevard la résistance, 5eme étage Casablanca, Morocco
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-sm font-medium mb-2">Téléphone</h4>
                  <p className="text-white/70 font-light">
                    +212 520 41 83 27<br />
                    +212 656 10 57 63(WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-sm font-medium mb-2">Horaires</h4>
                  <p className="text-white/70 font-light">
                    Lundi : 08:30 – 19:00<br />
                    Mardi : 08:30 – 18:30<br />
                    Mercredi - Vendredi : 08:30 – 19:00<br />
                    Samedi : 08:30 – 13:00<br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-full min-h-[400px] border border-white/10 p-2 bg-zinc-900/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8515973807444!2d-7.6144794995482314!3d33.583202199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3acb76d5249%3A0xce57c7e5f7732635!2sLa%20Dentisterie%20Casablanca%20-%20Dr%20Zaineb%20Zioud%20-Orthodontie%20-Dentisterie%20Esth%C3%A9tique!5e0!3m2!1sfr!2sma!4v1777388773511!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
