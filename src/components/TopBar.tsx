export default function TopBar() {
  return (
    <div className="hidden md:block bg-[var(--color-blue-deep)] text-white/75 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-9 flex items-center justify-between text-xs tracking-wide">
        <span>Guardia Vieja 202, Of. 403, Providencia · Santiago de Chile</span>
        <span>
          <a
            href="mailto:ricardo.cotapos@camlogistic.cl"
            className="hover:text-[var(--color-gold)] transition-colors"
          >
            ricardo.cotapos@camlogistic.cl
          </a>
          <span className="mx-2 text-white/30">·</span>
          <a
            href="tel:+56992507629"
            className="hover:text-[var(--color-gold)] transition-colors"
          >
            +56 9 9250 7629
          </a>
        </span>
      </div>
    </div>
  );
}
