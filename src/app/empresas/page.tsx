import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Empresas",
  description:
    "Diseñamos operaciones de transporte alrededor de tu negocio: levantamiento, dimensionamiento de flota, puesta en marcha, monitoreo y escalamiento.",
};

const PROCESS = [
  { title: "Levantamiento de requerimientos", text: "Volumen, cobertura, ventanas horarias y particularidades de la carga." },
  { title: "Dimensionamiento de flota", text: "Definimos cantidad y tipo de vehículo según la operación real." },
  { title: "Selección de vehículos", text: "Furgones, SUV, sedán o camión, según el perfil del servicio." },
  { title: "Planificación operacional", text: "Rutas, turnos y protocolos de ejecución." },
  { title: "Puesta en marcha", text: "Incorporación de transportistas y validación en terreno." },
  { title: "Monitoreo", text: "Seguimiento de hitos y estado de la operación en curso." },
  { title: "Control", text: "Revisión de cumplimiento frente a lo comprometido." },
  { title: "Reportabilidad", text: "Información clara sobre desempeño del servicio." },
  { title: "Gestión de contingencias", text: "Respuesta operativa ante imprevistos." },
  { title: "Escalamiento", text: "Ajuste de capacidad cuando la demanda lo requiere." },
];

export default function EmpresasPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-16 md:pt-20 md:pb-20">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs eyebrow tracking-[0.18em] uppercase text-[var(--color-blue)] mb-6">
                <span className="h-px w-6 bg-current inline-block" />
                Para empresas
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-blue-deep)] leading-[1.08]">
                Una operación de transporte diseñada alrededor de tu negocio.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)] max-w-2xl">
                Pensado para equipos de logística, supply chain y operaciones
                que necesitan un partner capaz de sostener el servicio, no
                solo cotizarlo.
              </p>
              <div className="mt-9">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-blue-deep)] text-white text-sm font-semibold px-7 py-3.5 hover:bg-[var(--color-blue)] transition-colors"
                >
                  Solicitar evaluación de operación
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Cómo lo hacemos"
              title="Diez pasos, un solo interlocutor."
              text="Desde el primer levantamiento hasta el escalamiento de la operación, un mismo equipo acompaña el proceso completo."
            />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--color-mist-dark)] rounded-2xl overflow-hidden">
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 5) * 70}>
                <div className="h-full bg-white p-6">
                  <span className="eyebrow text-xs text-[var(--color-gold)] tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-[var(--color-blue-deep)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Cuéntanos tu operación y te devolvemos una propuesta concreta."
        text="Volumen, cobertura, tipo de vehículo y frecuencia son suficientes para partir."
        buttonLabel="Solicitar evaluación de operación"
      />
    </>
  );
}
