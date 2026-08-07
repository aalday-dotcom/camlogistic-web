import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const CLIENTS = [
  "Starken",
  "DHL",
  "Chilexpress",
  "Falabella.com",
  "R.com",
  "Logytech",
  "Urbano",
  "SendCargo",
];

export default function AlgunosClientes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-28">
        <Reveal>
          <SectionHeader eyebrow="Algunos clientes" title="Empresas que ya operan con CAM." align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CLIENTS.map((c, i) => (
            <Reveal key={c} delay={(i % 4) * 80}>
              <div className="flex h-24 items-center justify-center rounded-xl border border-[var(--color-mist-dark)] bg-[var(--color-mist)] px-4">
                <span className="text-lg font-bold tracking-tight text-[var(--color-blue-deep)]">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-[var(--color-muted)]">
          Nombres y marcas mostrados a modo referencial, propiedad de sus
          respectivos titulares.
        </p>
      </div>
    </section>
  );
}
