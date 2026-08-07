import Image from "next/image";
import Reveal from "./Reveal";

const GESTION = [
  { title: "Formalidad total", text: "Personas, vehículos, contratos, seguros de carga y GPS." },
  { title: "Costos variables y visibles", text: "Estructura de costos de transporte clara y trazable." },
  { title: "KPIs de costos y servicio", text: "Medición continua de desempeño operativo." },
  { title: "Planificación diaria", text: "Gestión e información de transporte día a día." },
  { title: "Tecnología de seguimiento", text: "Aplicaciones especializadas para gestión de entregas." },
];

const OPERATIVAS = [
  { title: "Primera y última milla", text: "Camiones, furgones, motos y bicicletas." },
  { title: "Abastecimiento a retail", text: "Reposición confiable en punto de venta." },
  { title: "Carga punto a punto", text: "Transporte directo entre destinos." },
  { title: "Apoyo a variaciones de demanda", text: "Flota flexible para peaks de operación." },
  { title: "Coordinación de equipos", text: "Según volumen, pallets y necesidades del cliente." },
];

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--color-blue-deep)]">
      <circle cx="12" cy="12" r="10" fill="var(--color-gold)" />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SolucionesGestion() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/boxes-conveyor.jpg"
              alt="Gestión de pedidos y trazabilidad"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="eyebrow text-sm uppercase tracking-wide text-[var(--color-blue)] mb-3">
            Soluciones en gestión
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-blue-deep)] leading-[1.1]">
            Control administrativo y operativo en un solo lugar.
          </h2>
          <ul className="mt-7 space-y-4">
            {GESTION.map((g) => (
              <li key={g.title} className="flex items-start gap-3">
                <span className="mt-0.5"><IconCheck /></span>
                <div>
                  <span className="text-sm font-bold text-[var(--color-blue-deep)]">{g.title}. </span>
                  <span className="text-sm text-[var(--color-muted)]">{g.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-[var(--color-muted)]">
            Integraciones con plataformas como Beetrack y SimpliRoute.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SolucionesOperativas() {
  return (
    <section className="bg-[var(--color-mist)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="lg:order-2">
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/truck-unloading-city.jpg"
              alt="Distribución urbana CAM Logistic"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <Reveal delay={100} className="lg:order-1">
          <div className="eyebrow text-sm uppercase tracking-wide text-[var(--color-blue)] mb-3">
            Soluciones operativas
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-blue-deep)] leading-[1.1]">
            Capacidad flexible para cada tipo de operación.
          </h2>
          <ul className="mt-7 space-y-4">
            {OPERATIVAS.map((o) => (
              <li key={o.title} className="flex items-start gap-3">
                <span className="mt-0.5"><IconCheck /></span>
                <div>
                  <span className="text-sm font-bold text-[var(--color-blue-deep)]">{o.title}. </span>
                  <span className="text-sm text-[var(--color-muted)]">{o.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
