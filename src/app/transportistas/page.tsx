import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Transportistas",
  description:
    "Postula como transportista con furgón, SUV, sedán o camión y opera junto a CAM Logistic en la Región Metropolitana.",
};

const VEHICLES = ["Furgón", "SUV", "Sedán", "Camión"];

const STEPS = [
  { title: "Postulación", text: "Completas el formulario con tu vehículo y disponibilidad." },
  { title: "Documentación", text: "Validamos antecedentes y documentos del vehículo y conductor." },
  { title: "Incorporación", text: "Firma de condiciones y activación en la red CAM." },
  { title: "Asignación de servicios", text: "Comienzas a operar según cobertura y disponibilidad." },
];

const REQUIREMENTS = [
  "Vehículo propio en buen estado",
  "Capacidad de emitir factura o boleta",
  "Disponibilidad en Región Metropolitana",
  "Documentación al día",
];

export default function TransportistasPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-16 md:pt-20 md:pb-20">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs eyebrow tracking-[0.18em] uppercase text-[var(--color-blue)] mb-6">
                <span className="h-px w-6 bg-current inline-block" />
                Red CAM · Transportistas
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-blue-deep)] leading-[1.08]">
                Haz crecer tu operación junto a CAM Logistic.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)] max-w-2xl">
                Sumamos conductores, dueños de furgón y empresas transportistas
                a operaciones activas en la Región Metropolitana.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-3">
              {VEHICLES.map((v) => (
                <span
                  key={v}
                  className="inline-flex items-center rounded-full border border-[var(--color-mist-dark)] px-5 py-2 text-sm font-semibold text-[var(--color-blue-deep)]"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <SectionHeader
              eyebrow="Requisitos"
              title="Lo que necesitas para postular."
            />
            <ul className="mt-8 space-y-3">
              {REQUIREMENTS.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                  <span className="text-sm text-[var(--color-ink)] font-medium">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeader
              eyebrow="Proceso"
              title="De la postulación a tu primer servicio."
            />
            <div className="mt-8 space-y-5">
              {STEPS.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <span className="eyebrow text-xs text-[var(--color-gold)] tracking-widest pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-blue-deep)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="postular" className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Postular"
              title="Déjanos tus datos y te contactaremos."
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <form className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[var(--color-mist-dark)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-blue)]"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5"
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-[var(--color-mist-dark)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-blue)]"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="vehiculo"
                  className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5"
                >
                  Tipo de vehículo
                </label>
                <select
                  id="vehiculo"
                  name="vehiculo"
                  required
                  className="w-full rounded-lg border border-[var(--color-mist-dark)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-blue)] bg-white"
                >
                  <option value="">Selecciona una opción</option>
                  {VEHICLES.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="comuna"
                  className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5"
                >
                  Comuna
                </label>
                <input
                  id="comuna"
                  name="comuna"
                  type="text"
                  className="w-full rounded-lg border border-[var(--color-mist-dark)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-blue)]"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-[var(--color-blue-deep)] text-white text-sm font-semibold px-7 py-3.5 hover:bg-[var(--color-blue)] transition-colors"
                >
                  Postular como transportista
                </button>
                <p className="mt-3 text-xs text-center text-[var(--color-muted)]">
                  Este formulario se conectará próximamente a CAM HUB.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="¿Tienes una empresa transportista?"
        text="También sumamos flotas y operadores con equipos propios a la red CAM."
        buttonLabel="Conversemos"
      />
    </>
  );
}
