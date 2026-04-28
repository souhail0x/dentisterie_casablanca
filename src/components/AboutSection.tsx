import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
              <img
                src="Mme_zaineb_zioud1.jpeg"
                alt="Dr. Zaineb Zioud"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/20 m-4 z-10 pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:-right-12 bg-zinc-900 border border-white/10 p-6 shadow-2xl max-w-xs"
            >
              <p className="font-serif italic text-lg text-white/90">"Le sourire est la signature de l'âme."</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-script text-3xl text-white">Dr. Zaineb Zioud</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="uppercase tracking-[0.2em] text-sm text-accent">L'Expertise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light mb-8">
              L'Art de sublimer <br />
              <span className="font-bold">votre sourire</span>
            </h2>

            <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
              <p>
                Spécialisée en dentisterie esthétique et orthodontie, le Dr. Zaineb Zioud allie précision médicale et vision artistique pour vous offrir des soins d'exception à Casablanca.
              </p>
              <p>
                Chaque patient bénéficie d'une approche sur mesure, dans un environnement luxueux conçu pour votre confort et votre sérénité. Nous utilisons les technologies les plus avancées pour garantir des résultats parfaits, naturels et durables.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-light mb-2">10+</h3>
                <p className="text-sm text-white/50 uppercase tracking-widest">Années d'expérience</p>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-2">2k+</h3>
                <p className="text-sm text-white/50 uppercase tracking-widest">Sourires transformés</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
