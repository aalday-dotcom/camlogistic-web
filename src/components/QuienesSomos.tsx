import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { value: "24x7", label: "Monitoreo operacional" },
  { value: "RM", label: "Cobertura Región Metropolitana" },
  { value: "+6", label: "Años de experiencia" },
];

export default function QuienesSomos() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/warehouse-golden.jpg"
              alt="Flota CAM Logistic en centro de distribución"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="eyebrow text-sm uppercase tracking-wide text-[var(--color-blue)] mb-3">
            Quiénes somos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-blue-deep)] leading-[1.1]">
            Una empresa chilena especializada en logística de primera y
            última milla.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)]">
            CAM Logistic diseña operaciones flexibles apoyadas en tecnología,
            procesos estandarizados y un equipo comprometido con el
            cumplimiento. Transporte dedicado y distribución para empresas
            que no pueden improvisar.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-3">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="rounded-xl bg-[var(--color-blue-pale)] p-4 text-center"
              >
                <div className="text-2xl font-bold text-[var(--color-blue-deep)] font-[family-name:var(--font-poppins)]">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-[var(--color-muted)] leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
