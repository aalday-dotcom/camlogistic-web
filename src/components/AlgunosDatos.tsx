import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const DATA = [
  {
    value: "+100.000",
    label: "Piezas al mes",
    icon: (
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    value: "+80",
    label: "Rutas diarias",
    icon: (
      <>
        <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.7" fill="none" />
        <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.7" fill="none" />
        <path d="M8 8l8 8M17 10c0 3-9 2-9 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    value: "+75",
    label: "Colaboradores",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" fill="none" />
        <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 8.5a2.5 2.5 0 1 0 0-5M20.5 19c0-2.5-1.8-4.3-4-4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    value: "60",
    label: "Equipos en flota",
    icon: (
      <path d="M3 16V7h11v9M3 16h11M14 10h4l3 3v3h-7M6.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
];

export default function AlgunosDatos() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-blue)]">
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-28 relative">
        <Reveal>
          <SectionHeader eyebrow="Algunos datos" title="Escala real, todos los días." dark />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DATA.map((d, i) => (
            <Reveal key={d.label} delay={i * 90}>
              <div className="h-full rounded-2xl bg-white/10 border border-white/15 p-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-blue-deep)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {d.icon}
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">
                    {d.value}
                  </div>
                  <div className="text-xs text-white/70 mt-0.5">{d.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[var(--color-blue-deep)]/40 border border-white/15 px-6 py-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-gold)] shrink-0">
              <path d="M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
            <span className="text-sm text-white/90 font-medium">
              6 años de trayectoria en el mercado logístico chileno.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
