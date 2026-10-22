import Link from "next/link";
import Image from "next/image";

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/camlogistic/",
    icon: (
      <path d="M6.94 8.5H4.06V19.5H6.94V8.5ZM5.5 7.25C6.47 7.25 7.25 6.47 7.25 5.5C7.25 4.53 6.47 3.75 5.5 3.75C4.53 3.75 3.75 4.53 3.75 5.5C3.75 6.47 4.53 7.25 5.5 7.25ZM19.75 19.5V13.4C19.75 10.4 18.03 8.93 15.73 8.93C13.9 8.93 13.08 9.94 12.62 10.65V8.5H9.75C9.79 9.36 9.75 19.5 9.75 19.5H12.62V13.5C12.62 13.18 12.64 12.87 12.74 12.64C13 12 13.58 11.33 14.55 11.33C15.83 11.33 16.88 12.06 16.88 13.9V19.5H19.75Z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100083075085222&locale=es_LA",
    icon: (
      <path d="M13.5 21V13.2H16.1L16.5 10.1H13.5V8.1C13.5 7.2 13.75 6.6 15.03 6.6H16.6V3.83C16.02 3.77 15.42 3.74 14.81 3.75C13 3.75 11.75 4.85 11.75 6.87V10.1H9.75V13.2H11.75V21H13.5Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cam.logistic.cl/",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.6" cy="7.4" r="1" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@camlogistic",
    icon: (
      <path d="M14 3.5c.4 1.9 1.7 3.1 3.7 3.3v2.4c-1.3.1-2.5-.3-3.7-1.1v5.6c0 2.9-2 4.8-4.7 4.8-2.7 0-4.7-2-4.7-4.7 0-2.8 2.2-4.8 5-4.7v2.4c-1.3-.2-2.5.7-2.5 2.2 0 1.4 1.1 2.3 2.3 2.3 1.4 0 2.4-1 2.4-2.6V3.5H14Z" />
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@camlogistic2023",
    icon: (
      <path d="M21 12s0-2.6-.33-3.86a2.7 2.7 0 0 0-1.9-1.9C17.5 6 12 6 12 6s-5.5 0-6.77.33a2.7 2.7 0 0 0-1.9 1.9C3 9.4 3 12 3 12s0 2.6.33 3.86a2.7 2.7 0 0 0 1.9 1.9C6.5 18 12 18 12 18s5.5 0 6.77-.33a2.7 2.7 0 0 0 1.9-1.9C21 14.6 21 12 21 12Zm-11.6 2.6V9.4L14.9 12l-5.5 2.6Z" />
    ),
  },
  {
    name: "X",
    href: "https://x.com/CamLogistic",
    icon: (
      <path d="M13.9 10.6 20 4h-2l-5 5.9L8.9 4H4l6.4 9.1L4 20h2l5.4-6.3L15.9 20H21l-7.1-9.4Zm-2 2.3-.6-.9L6 5.4h2l4 5.7.6.9 5.4 7.6h-2l-4.3-6.1Z" />
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-blue-deep)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="inline-flex items-center rounded-xl bg-white px-3 py-2">
            <Image
              src="/images/cam-logo.png"
              alt="CAM Logistic"
              width={130}
              height={68}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            Movemos más que carga. Movemos su operación. Tecnología, personas
            y resultados para su próxima operación logística.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-gold)] hover:text-[var(--color-blue-deep)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs eyebrow uppercase text-[var(--color-gold)] mb-4">
            Empresa
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/nosotros" className="hover:text-white transition-colors">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-white transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/empresas" className="hover:text-white transition-colors">
                Para empresas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs eyebrow uppercase text-[var(--color-gold)] mb-4">
            Red CAM
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/transportistas" className="hover:text-white transition-colors">
                Transportistas
              </Link>
            </li>
            <li>
              <Link href="/transportistas#postular" className="hover:text-white transition-colors">
                Postular
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs eyebrow uppercase text-[var(--color-gold)] mb-4">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Guardia Vieja 202, Of. 403</li>
            <li>Providencia, Santiago</li>
            <li>
              <a href="mailto:ricardo.cotapos@camlogistic.cl" className="hover:text-white transition-colors">
                ricardo.cotapos@camlogistic.cl
              </a>
            </li>
            <li>
              <a href="tel:+56992507629" className="hover:text-white transition-colors">
                +56 9 9250 7629
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 space-y-3 text-sm text-white/70">
          <p>
            <strong className="font-semibold text-white">
              CAM Logistic es una marca de Santa Ines SpA.
            </strong>{" "}
            RUT: 77.157.099-2.
          </p>
          <p>
            Dirección: Guardia Vieja 202, Of. 403, Providencia, Santiago de Chile.
            {" "}Teléfono:{" "}
            <a href="tel:+56992507629" className="hover:text-white transition-colors">
              +56 9 9250 7629
            </a>
            .
          </p>
          <p className="text-xs text-white/40">
            © {year} CAM Logistic · Tecnología · Personas · Resultados
          </p>
        </div>
      </div>
    </footer>
  );
}
