import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "Plataforma propia",
    text: "Para control operacional.",
    icon: (
      <path d="M4 7l8-3.5L20 7l-8 3.5L4 7Zm0 5 8 3.5 8-3.5M4 12v5l8 3.5 8-3.5v-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Dashboard en tiempo real",
    text: "Visibilidad total para el cliente.",
    icon: (
      <path d="M4 19V10m5 9V5m5 14v-7m5 7V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
    ),
  },
  {
    title: "KPIs y trazabilidad",
    text: "De cada operación.",
    icon: (
      <path d="M5 13h4l2-5 3 9 2-6h3M6 5h12v14H6z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Seguimiento GPS",
    text: "En toda la flota.",
    icon: (
      <>
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" fill="none" />
        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" fill="none" />
      </>
    ),
  },
  {
    title: "Gestión documental",
    text: "Centralizada y ordenada.",
    icon: (
      <path d="M7 3h7l4 4v14H7V3Zm7 0v4h4M9.5 12.5h5M9.5 15.5h5M9.5 9.5h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "MarIA",
    text: "Inteligencia artificial de soporte operativo.",
    icon: (
      <>
        <rect x="6" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" fill="none" />
        <path d="M9 11h.01M15 11h.01M9.5 14.5c.7.6 1.8.6 2.5 0M12 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    title: "Reportes automáticos",
    text: "Entregados a tiempo.",
    icon: (
      <path d="M8 3v4M16 3v4M4 9h16M5 6h14v14H5V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
];

export default function Diferenciadores() {
  return (
    <section className="bg-[var(--color-mist)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="¿Qué nos diferencia?"
            title="Tecnología propia aplicada a cada operación."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 80}>
              <div className="h-full rounded-2xl bg-white p-6 text-center hover:shadow-[0_18px_40px_-20px_rgba(46,93,164,0.35)] transition-shadow">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-blue-deep)]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-bold text-[var(--color-blue-deep)]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
