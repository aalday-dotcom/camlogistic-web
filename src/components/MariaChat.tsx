"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "56936616023";
const VEHICLES = ["Furgón", "Camión", "Empresa de transporte (flota)"];

export default function MariaChat() {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre.trim() || !telefono.trim() || !tipoVehiculo) return;

    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/maria-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, telefono, tipoVehiculo }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "No se pudo guardar tu solicitud.");
      }

      const mensaje = encodeURIComponent(
        `Hola MarIA, soy ${nombre}. Quiero postular con mi ${tipoVehiculo.toLowerCase()} a CAM Logistic.`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");
      setOpen(false);
      setNombre("");
      setTelefono("");
      setTipoVehiculo("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "No se pudo enviar. Intenta nuevamente."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">
      {open && (
        <div className="mb-4 w-[92vw] max-w-sm rounded-2xl bg-white shadow-2xl border border-[var(--color-mist-dark)] overflow-hidden">
          <div className="bg-[var(--color-blue-deep)] px-5 py-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-blue-deep)] font-bold text-sm">
              M
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-bold">MarIA</div>
              <div className="text-white/60 text-xs">Reclutamiento CAM Logistic</div>
            </div>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 bg-[var(--color-mist)]">
            <p className="text-sm text-[var(--color-ink)] leading-relaxed mb-4">
              ¡Hola! 👋 Soy <strong>MarIA</strong>. Cuéntame un poco de ti y seguimos la conversación completa por WhatsApp, donde puedo ayudarte con todos los detalles de las vacantes.
            </p>

            <label className="block text-xs font-semibold text-[var(--color-blue-deep)] mb-1.5 mt-3">
              Nombre completo
            </label>
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
              className="w-full rounded-lg border border-[var(--color-mist-dark)] px-3 py-2.5 text-sm outline-none focus:border-[var(--color-blue)] bg-white"
            />

            <label className="block text-xs font-semibold text-[var(--color-blue-deep)] mb-1.5 mt-3">
              Teléfono (WhatsApp)
            </label>
            <input
              type="tel"
              required
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="+56 9 1234 5678"
              className="w-full rounded-lg border border-[var(--color-mist-dark)] px-3 py-2.5 text-sm outline-none focus:border-[var(--color-blue)] bg-white"
            />

            <label className="block text-xs font-semibold text-[var(--color-blue-deep)] mb-1.5 mt-3">
              Tipo de vehículo
            </label>
            <select
              required
              value={tipoVehiculo}
              onChange={(e) => setTipoVehiculo(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-mist-dark)] px-3 py-2.5 text-sm outline-none focus:border-[var(--color-blue)] bg-white"
            >
              <option value="">Selecciona una opción</option>
              {VEHICLES.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>

            {error && (
              <p className="mt-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-bold px-5 py-3 hover:bg-[#20bd5a] transition-colors disabled:opacity-60"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.72.45 3.4 1.3 4.87L2.05 22l5.36-1.4a9.9 9.9 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.55-3.7 8.24-8.24 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.18.83.85-3.1-.2-.32a8.18 8.18 0 0 1-1.26-4.37c0-4.55 3.7-8.24 8.24-8.24m-4.65 4.35c-.15 0-.4.06-.6.29-.21.23-.8.78-.8 1.9s.82 2.2.93 2.36c.12.15 1.6 2.5 3.95 3.42 1.95.75 2.35.6 2.77.56.42-.04 1.36-.55 1.55-1.09.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.44-.27-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12-.15.23-.6.75-.73.9-.14.15-.27.17-.5.06-.23-.12-.98-.36-1.86-1.15-.69-.6-1.15-1.36-1.29-1.59-.14-.23-.02-.36.1-.48.11-.11.23-.27.35-.4.11-.14.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.12-.52-1.26-.72-1.72-.19-.46-.38-.39-.52-.4z" />
              </svg>
              {sending ? "Enviando…" : "Continuar por WhatsApp"}
            </button>
            <p className="mt-2.5 text-[11px] text-[var(--color-muted)] text-center leading-snug">
              Tus datos quedan guardados y seguirás la conversación completa con MarIA directo en WhatsApp.
            </p>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar" : "Habla con María"}
        className="flex items-center gap-2.5 rounded-full bg-[var(--color-blue-deep)] text-white pl-4 pr-5 py-3.5 shadow-xl hover:bg-[var(--color-blue)] transition-colors"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-blue-deep)] font-bold text-sm">
            M
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-[var(--color-blue-deep)]" />
          </span>
        )}
        <span className="text-sm font-semibold">{open ? "Cerrar" : "Habla con María"}</span>
      </button>
    </div>
  );
}
