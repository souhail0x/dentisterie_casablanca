import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";
import { useState, useEffect } from "react";

// Placeholder images mimicking a luxury dental clinic's instagram feed
const igPosts = [
  "transformation_1.jpeg",
  "transformatio_3.jpeg",
  "transfomation_2.jpeg",
  "transformation_4.jpeg",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
  "transformation_5.jpeg",
];

export function InstagramFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic transition for the mobile slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % igPosts.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Instagram className="w-8 h-8 mb-4 text-white/80" />
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Suivez-nous sur <span className="font-bold">Instagram</span>
          </h2>
          <a
            href="https://www.instagram.com/drzaineb_zioud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors uppercase tracking-widest text-sm"
          >
            @drzaineb_zioud
          </a>
        </motion.div>
      </div>

      {/* Desktop Grid (md and up) */}
      <div className="hidden md:flex w-full">
        {igPosts.map((post, index) => (
          <motion.a
            href="https://www.instagram.com/drzaineb_zioud/"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative w-1/6 aspect-square group overflow-hidden block"
          >
            <img
              src={post}
              alt="Instagram post"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Mobile Fade-in Slider (below md) */}
      <div className="md:hidden w-full px-4 flex justify-center">
        <div className="relative w-[90%] aspect-square">
          <AnimatePresence mode="wait">
            <motion.a
              key={currentIndex}
              href="https://www.instagram.com/drzaineb_zioud/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 block overflow-hidden rounded-sm border border-white/10"
            >
              <img
                src={igPosts[currentIndex]}
                alt="Instagram post"
                className="w-full h-full object-cover grayscale transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                <Instagram className="w-6 h-6 text-white/70" />
              </div>
            </motion.a>
          </AnimatePresence>
          
          {/* Progress indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {igPosts.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-300 ${idx === currentIndex ? "w-6 bg-white" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
