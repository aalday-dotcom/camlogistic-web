"use client";

import { useState } from "react";

const VEHICLES = ["Furgón", "SUV", "Sedán", "Camión"];

const inputClass =
  "w-full rounded-lg border border-[var(--color-mist-dark)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-blue)]";

export default function TransportistaForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="mt-10 rounded-2xl border border-[var(--color-mist-dark)] bg-[var(--color-mist)] p-10 text-center">
        <h3 className="text-lg font-bold text-[var(--color-blue-deep)]">
          Postulación enviada
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Vamos a revisar tus datos y te contactaremos pronto.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/transportistas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "No se pudo enviar la postulación.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo enviar la postulación. Intenta nuevamente."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid sm:grid-cols-2 gap-5">
      <div className="sm:col-span-1">
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5"
        >
          Nombre completo
        </label>
        <input id="nombre" name="nombre" type="text" required className={inputClass} />
      </div>
      <div className="sm:col-span-1">
        <label
          htmlFor="telefono"
          className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5"
        >
          Teléfono
        </label>
        <input id="telefono" name="telefono" type="tel" required className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="vehiculo"
          className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5"
        >
          Tipo de vehículo
        </label>
        <select
          id="vehiculo"
          name="vehiculo"
          required
          className={inputClass + " bg-white"}
        >
          <option value="">Selecciona una opción</option>
          {VEHICLES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="comuna"
          className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5"
        >
          Comuna
        </label>
        <input id="comuna" name="comuna" type="text" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        {error && (
          <p className="mb-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="w-full inline-flex items-center justify-center rounded-full bg-[var(--color-blue-deep)] text-white text-sm font-semibold px-7 py-3.5 hover:bg-[var(--color-blue)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Enviando…" : "Postular como transportista"}
        </button>
      </div>
    </form>
  );
}
