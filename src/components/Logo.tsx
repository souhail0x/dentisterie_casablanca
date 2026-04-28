import { transform } from "zod/v4";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Dental Diamond Icon (SVG) */}
      <img style={{ transform: "scale(1.2)" }} src="public/logo_La_Dentisterie.png" alt="logo" className="w-12 h-12 rounded-full" />

      {/* Text Logo */}
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase leading-none text-white">
          La Dentisterie
        </h1>
        <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/60 mt-1">
          Casablanca
        </span>
      </div>
    </div>
  );
}
