import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una propuesta operacional. Cuéntanos tipo de operación, vehículo requerido, cobertura y frecuencia.",
};

export default function ContactoPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-28 grid lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs eyebrow tracking-[0.18em] uppercase text-[var(--color-blue)] mb-6">
              <span className="h-px w-6 bg-current inline-block" />
              Contacto
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-blue-deep)] leading-[1.08]">
              Solicita una propuesta operacional.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)]">
              Completa el formulario o escríbenos directamente. Con volumen,
              cobertura y tipo de vehículo podemos preparar una propuesta
              concreta.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <div>
                <div className="eyebrow text-xs uppercase tracking-wide text-[var(--color-muted)]">
                  Contacto comercial
                </div>
                <p className="mt-1 font-semibold text-[var(--color-blue-deep)]">
                  Ricardo Cotapos — Product Manager
                </p>
              </div>
              <div>
                <div className="eyebrow text-xs uppercase tracking-wide text-[var(--color-muted)]">
                  Teléfono
                </div>
                <a
                  href="tel:+56951242195"
                  className="mt-1 block font-semibold text-[var(--color-blue-deep)] hover:text-[var(--color-blue)]"
                >
                  +56 9 5124 2195
                </a>
              </div>
              <div>
                <div className="eyebrow text-xs uppercase tracking-wide text-[var(--color-muted)]">
                  Oficinas comerciales
                </div>
                <p className="mt-1 font-semibold text-[var(--color-blue-deep)]">
                  Guardia Vieja 202, Of. 403
                  <br />
                  Providencia, Santiago
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
