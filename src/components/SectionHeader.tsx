export default function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <div
        className={`eyebrow text-sm uppercase tracking-wide mb-3 ${
          dark ? "text-[var(--color-gold)]" : "text-[var(--color-blue)]"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] ${
          dark ? "text-white" : "text-[var(--color-blue-deep)]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-white/70" : "text-[var(--color-muted)]"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
