import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Primera milla, última milla, transporte dedicado y operaciones especiales. Servicios logísticos B2B diseñados alrededor de tu operación.",
};

const SERVICES = [
  {
    n: "01",
    title: "Primera milla",
    text: "Movimiento de carga entre puntos de origen y los centros donde tu operación la necesita.",
    items: [
      "Centro de distribución a tiendas",
      "Transferencias entre bodegas",
      "Reposición",
      "Traslados operacionales",
    ],
  },
  {
    n: "02",
    title: "Última milla",
    text: "Entrega al cliente final con visibilidad de cada hito del recorrido.",
    items: [
      "Distribución urbana",
      "Entrega cliente final",
      "Distribución programada",
      "Operaciones B2B / B2C",
    ],
  },
  {
    n: "03",
    title: "Transporte dedicado",
    text: "Capacidad asignada de forma exclusiva a tu operación, con perfiles definidos.",
    items: [
      "Camiones dedicados",
      "Furgones",
      "Equipos con conductor",
      "Operaciones mensuales o permanentes",
    ],
  },
  {
    n: "04",
    title: "Operaciones especiales",
    text: "Refuerzos y proyectos puntuales que exigen capacidad flexible.",
    items: [
      "Servicios spot",
      "Refuerzos Cyber / temporadas",
      "Proyectos especiales",
      "Distribución a medida",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-16 md:pt-20 md:pb-20">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs eyebrow tracking-[0.18em] uppercase text-[var(--color-blue)] mb-6">
                <span className="h-px w-6 bg-current inline-block" />
                Servicios
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-blue-deep)] leading-[1.08]">
                Cuatro líneas de servicio, un mismo estándar operacional.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                Cada servicio se dimensiona según carga, frecuencia, cobertura
                y ventanas horarias del cliente.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.n}
          className={i % 2 === 0 ? "bg-[var(--color-mist)]" : "bg-white"}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="eyebrow text-sm text-[var(--color-gold)] tracking-widest">
                {s.n}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-blue-deep)]">
                {s.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)] max-w-md">
                {s.text}
              </p>
            </Reveal>
            <Reveal delay={100} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white border border-[var(--color-mist-dark)] p-4"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-blue)] shrink-0" />
                    <span className="text-sm text-[var(--color-ink)] font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      <CTASection
        title="¿Qué línea de servicio necesita tu operación?"
        text="Cuéntanos el detalle y te proponemos la combinación correcta de vehículos, cobertura y frecuencia."
        buttonLabel="Solicitar propuesta"
      />
    </>
  );
}
