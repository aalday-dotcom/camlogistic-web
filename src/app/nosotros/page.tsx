import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a CAM Logistic: filosofía operacional, cultura de cumplimiento y el modelo que combina tecnología, personas y procesos.",
};

const VALUES = [
  {
    title: "Cumplimiento",
    text: "Los compromisos operacionales se ejecutan, se documentan y se revisan.",
  },
  {
    title: "Cercanía operativa",
    text: "Un equipo disponible para resolver, no solo para reportar.",
  },
  {
    title: "Mejora continua",
    text: "Cada operación se revisa para ajustar procesos y capacidad.",
  },
  {
    title: "Transparencia",
    text: "Información clara sobre estado, tiempos y contingencias.",
  },
];

const WORKING_STEPS = [
  {
    title: "Levantamiento",
    text: "Entendemos volumen, cobertura, ventanas horarias y tipo de carga.",
  },
  {
    title: "Diseño operacional",
    text: "Definimos flota, rutas y equipo necesario para la operación.",
  },
  {
    title: "Puesta en marcha",
    text: "Incorporamos transportistas y validamos el servicio en terreno.",
  },
  {
    title: "Control y ajuste",
    text: "Monitoreamos ejecución y ajustamos capacidad según demanda.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs eyebrow tracking-[0.18em] uppercase text-[var(--color-blue)] mb-6">
                <span className="h-px w-6 bg-current inline-block" />
                Nosotros
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-blue-deep)] leading-[1.08]">
                Administramos operaciones de transporte, no arrendamos
                camiones.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                CAM Logistic nace para resolver un problema concreto: las
                empresas necesitan que su carga se mueva con la misma
                disciplina con la que operan el resto de su negocio.
                Coordinamos personas, vehículos, procesos y tecnología bajo un
                mismo frente operativo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <SectionHeader
              eyebrow="Nuestra compañía"
              title="Un frente operativo único para primera y última milla."
              text="Trabajamos con equipos propios de coordinación y una red de transportistas evaluados, lo que nos permite responder a operaciones fijas y a picos de demanda sin perder control sobre la ejecución."
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeader
              eyebrow="Cómo trabajamos"
              title="Procesos definidos, no soluciones improvisadas."
              text="Cada operación parte de un levantamiento real del requerimiento del cliente. De ahí se definen vehículos, cobertura, frecuencia y los indicadores que se van a monitorear durante todo el servicio."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Modelo operacional"
              title="De la primera conversación a la operación en régimen."
            />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORKING_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[var(--color-mist-dark)] p-7">
                  <span className="eyebrow text-xs text-[var(--color-gold)] tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-[var(--color-blue-deep)]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-blue-deep)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Valores"
              title="Lo que sostiene cada operación."
              dark
            />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full bg-[var(--color-blue-deep)] p-7 hover:bg-white/[0.04] transition-colors">
                  <h3 className="text-base font-bold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
