import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Movemos más que carga. Movemos su operación.",
  text = "Conversemos sobre su próxima operación logística.",
  buttonLabel = "Hablar con CAM Logistic",
  buttonHref = "/contacto",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/truck-highway.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-blue-deep)]/80" />
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 md:py-24 relative text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="mt-5 text-white/80 max-w-xl mx-auto font-medium">
            {text}
          </p>
          <div className="mt-9">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-blue-deep)] text-sm font-bold px-8 py-3.5 hover:bg-[var(--color-gold-soft)] transition-colors"
            >
              {buttonLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
