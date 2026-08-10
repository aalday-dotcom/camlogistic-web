import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAILS = process.env.CONTACT_TO_EMAIL
  ? process.env.CONTACT_TO_EMAIL.split(",").map((e) => e.trim())
  : ["ricardo.cotapos@camlogistic.cl", "contacto@camlogistic.cl"];
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "CAM Logistic Web <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "El servidor no tiene configurada la clave de Resend (RESEND_API_KEY)." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const {
      nombre,
      empresa,
      cargo,
      correo,
      telefono,
      tipoOperacion,
      tipoVehiculo,
      cantidadVehiculos,
      cobertura,
      frecuencia,
      comentarios,
    } = body ?? {};

    if (!nombre || !empresa || !correo || !tipoOperacion) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <h2>Nueva solicitud de propuesta — CAM Logistic</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>
      <p><strong>Cargo:</strong> ${escapeHtml(cargo || "-")}</p>
      <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(telefono || "-")}</p>
      <p><strong>Tipo de operación:</strong> ${escapeHtml(tipoOperacion)}</p>
      <p><strong>Tipo de vehículo:</strong> ${escapeHtml(tipoVehiculo || "-")}</p>
      <p><strong>Cantidad estimada de vehículos:</strong> ${escapeHtml(cantidadVehiculos || "-")}</p>
      <p><strong>Cobertura:</strong> ${escapeHtml(cobertura || "-")}</p>
      <p><strong>Frecuencia:</strong> ${escapeHtml(frecuencia || "-")}</p>
      <p><strong>Comentarios:</strong><br/>${escapeHtml(comentarios || "-").replace(/\n/g, "<br/>")}</p>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAILS,
      replyTo: correo,
      subject: `Nueva solicitud de propuesta — ${empresa}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el correo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
