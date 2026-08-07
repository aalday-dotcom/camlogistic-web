import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "El equipo coordinó carga desde puerto en plazos muy ajustados, resolviendo tanto la parte operativa como la documental.",
    name: "Gabriela Becerra Rojas",
    role: "Account Executive, Euroluxe",
  },
  {
    quote:
      "Hemos desarrollado varios proyectos juntos gracias a la rapidez de respuesta y el profesionalismo de todo el equipo.",
    name: "Alejandro Álvarez Villarroel",
    role: "Key Account Manager, Asirep",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-28">
        <Reveal>
          <SectionHeader eyebrow="Confianza" title="Clientes que ya operan con CAM." />
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="h-full rounded-2xl border border-[var(--color-mist-dark)] p-8 bg-[var(--color-mist)]">
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  className="text-[var(--color-gold)]"
                >
                  <path
                    d="M0 20V11.2C0 4.48 4.6.56 11.6 0v4.48C7.6 5.36 5.6 7.6 5.6 11.2h6V20H0Zm16.4 0V11.2c0-6.72 4.6-10.64 11.6-11.2v4.48c-4 .88-6 3.12-6 6.72h6V20h-11.6Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mt-5 text-[var(--color-ink)] leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold text-[var(--color-blue-deep)]">
                    {t.name}
                  </div>
                  <div className="text-[var(--color-muted)]">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
