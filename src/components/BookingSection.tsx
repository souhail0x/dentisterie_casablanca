import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  date: z.string().min(1, "Veuillez sélectionner une date"),
});

export function BookingSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-zinc-900 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')] opacity-5 mix-blend-luminosity bg-cover bg-center" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto bg-black border border-white/10 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Prendre <span className="font-bold">Rendez-vous</span>
            </h2>
            <p className="text-white/60 font-light">
              Remplissez le formulaire ci-dessous et notre équipe vous contactera pour confirmer votre rendez-vous.
            </p>
          </motion.div>

          {isSubmitSuccessful ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-2">Demande envoyée</h3>
              <p className="text-white/60">Nous vous contacterons très prochainement.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/70">Nom complet</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Votre nom"
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/70">Téléphone</label>
                  <input 
                    {...register("phone")}
                    className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="+212 6XX XX XX XX"
                  />
                  {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/70">Service souhaité</label>
                  <select 
                    {...register("service")}
                    className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option value="" className="bg-zinc-900 text-white/50">Sélectionnez un service</option>
                    <option value="Consultation" className="bg-zinc-900">Consultation initiale</option>
                    <option value="Blanchiment" className="bg-zinc-900">Blanchiment dentaire</option>
                    <option value="Orthodontie" className="bg-zinc-900">Orthodontie</option>
                    <option value="Esthetique" className="bg-zinc-900">Esthétique dentaire (Facettes)</option>
                    <option value="Implant" className="bg-zinc-900">Implantologie</option>
                    <option value="Urgence" className="bg-zinc-900">Urgence dentaire</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-xs">{errors.service.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/70">Date souhaitée</label>
                  <input 
                    type="date"
                    {...register("date")}
                    className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white focus:outline-none focus:border-white transition-colors"
                  />
                  {errors.date && <p className="text-red-400 text-xs">{errors.date.message}</p>}
                </div>
              </div>

              <div className="pt-8 text-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="rounded-none bg-white text-black hover:bg-white/90 px-12 py-6 uppercase tracking-widest text-sm w-full md:w-auto"
                >
                  {isSubmitting ? "Envoi en cours..." : "Confirmer la demande"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
