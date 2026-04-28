import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="Mme_zaineb_zioud1_16_9.jpg"
          alt="Clinic aesthetic"
          className="w-full h-full object-cover object-right md:object-center opacity-80 mix-blend-luminosity"
          loading="eager"
        />
        {/* Gradient Overlay for dark luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Excellence dentaire <br />
              <span className="font-bold italic text-white/90 font-serif">& sourire parfait</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-light leading-relaxed"
          >
            Découvrez une approche unique de la dentisterie, où l'expertise médicale rencontre l'esthétique absolue dans un cadre premium et apaisant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button asChild size="lg" className="rounded-none px-10 py-7 text-sm uppercase tracking-widest bg-white text-black hover:bg-white/90">
              <a href="#booking">Prendre rendez-vous</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none px-10 py-7 text-sm uppercase tracking-widest border-white/30 hover:bg-white/10">
              <a href="#services">Nos Services</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Découvrir</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: [0, 50] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
