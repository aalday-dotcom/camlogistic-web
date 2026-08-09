import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const CLIENTS = [
  { name: "Starken", file: "starken.png" },
  { name: "DHL", file: "dhl.png" },
  { name: "Chilexpress", file: "chilexpress.png" },
  { name: "Falabella.com", file: "falabella.png" },
  { name: "Ripley", file: "ripley.png" },
  { name: "Logytech", file: "logytech.png" },
  { name: "Urbano", file: "urbano.png" },
  { name: "SendCargo", file: "sendcargo.png" },
];

export default function AlgunosClientes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Algunos clientes"
            title="Algunos de los clientes que han operado con CAM Logistic."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 80}>
              <div className="flex h-24 items-center justify-center rounded-xl border border-[var(--color-mist-dark)] bg-white p-4">
                <div className="relative h-full w-full">
                  <Image
                    src={`/images/clients/${c.file}`}
                    alt={c.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-[var(--color-muted)]">
          Marcas y logos propiedad de sus respectivos titulares, mostrados
          para identificar relaciones comerciales reales.
        </p>
      </div>
    </section>
  );
}
