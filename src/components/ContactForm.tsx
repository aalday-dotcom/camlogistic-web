"use client";

import { useState } from "react";

const OPERATION_TYPES = [
  "Primera milla",
  "Última milla",
  "Transporte dedicado",
  "Operación especial / spot",
];

const VEHICLE_TYPES = ["Furgón", "SUV", "Sedán", "Camión", "Mixta"];

function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="block text-sm font-medium text-[var(--color-blue-deep)] mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-[var(--color-mist-dark)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-blue)] bg-white";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--color-mist-dark)] bg-[var(--color-mist)] p-10 text-center">
        <h3 className="text-lg font-bold text-[var(--color-blue-deep)]">
          Solicitud enviada
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Revisaremos tu operación y te contactaremos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid sm:grid-cols-2 gap-5 rounded-2xl border border-[var(--color-mist-dark)] p-7 sm:p-8"
    >
      <Field label="Nombre">
        <input required type="text" name="nombre" className={inputClass} />
      </Field>
      <Field label="Empresa">
        <input required type="text" name="empresa" className={inputClass} />
      </Field>
      <Field label="Cargo">
        <input type="text" name="cargo" className={inputClass} />
      </Field>
      <Field label="Correo">
        <input required type="email" name="correo" className={inputClass} />
      </Field>
      <Field label="Teléfono">
        <input type="tel" name="telefono" className={inputClass} />
      </Field>
      <Field label="Tipo de operación">
        <select required name="tipoOperacion" className={inputClass}>
          <option value="">Selecciona una opción</option>
          {OPERATION_TYPES.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Tipo de vehículo requerido">
        <select name="tipoVehiculo" className={inputClass}>
          <option value="">Selecciona una opción</option>
          {VEHICLE_TYPES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Cantidad estimada de vehículos">
        <input type="text" name="cantidadVehiculos" className={inputClass} />
      </Field>
      <Field label="Comunas / cobertura" full>
        <input type="text" name="cobertura" className={inputClass} />
      </Field>
      <Field label="Frecuencia" full>
        <input
          type="text"
          name="frecuencia"
          placeholder="Ej: diaria, semanal, por temporada"
          className={inputClass}
        />
      </Field>
      <Field label="Comentarios" full>
        <textarea
          name="comentarios"
          rows={4}
          className={inputClass + " resize-none"}
        />
      </Field>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[var(--color-blue-deep)] text-white text-sm font-semibold px-8 py-3.5 hover:bg-[var(--color-blue)] transition-colors"
        >
          Solicitar propuesta
        </button>
      </div>
    </form>
  );
}
