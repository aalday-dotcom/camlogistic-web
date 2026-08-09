import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  { src: "/images/hero-fleet.jpg", alt: "Flota de camiones y furgones CAM Logistic" },
  { src: "/images/delivery-van.jpg", alt: "Furgón CAM Logistic entregando en edificio corporativo" },
  { src: "/images/loading-dock.jpg", alt: "Camiones CAM Logistic cargando en andén de bodega" },
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[760px] sm:h-[680px] md:h-[640px] w-full overflow-hidden">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="hero-slide absolute inset-0"
            style={{ animationDelay: `${i * 6}s` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(23,51,94,0.15) 0%, rgba(23,51,94,0.35) 55%, rgba(23,51,94,0.92) 100%)",
          }}
        />

        <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-end pb-14 md:pb-16">
          <div className="fade-up inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-4 sm:px-5 py-1.5 sm:py-2 mb-5 w-fit max-w-full">
            <span className="eyebrow block text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-[1.05] text-[var(--color-gold)] whitespace-normal md:whitespace-nowrap">
              Logística B2B · Primera y última milla
            </span>
          </div>
          <div className="fade-up max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.05] text-white">
              Tu operación logística, bajo control.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/85 max-w-xl">
              Diseñamos y ejecutamos operaciones de transporte dedicadas para
              retail, industria, courier y consumo masivo, combinando
              personas, procesos y tecnología.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-blue-deep)] text-sm font-bold px-7 py-3.5 hover:bg-[var(--color-gold-soft)] transition-colors"
              >
                Solicitar propuesta
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 text-white text-sm font-semibold px-7 py-3.5 hover:bg-white/10 transition-colors"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}