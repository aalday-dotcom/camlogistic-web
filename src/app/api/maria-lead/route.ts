import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.MARIA_SUPABASE_URL;
    const serviceKey = process.env.MARIA_SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      return NextResponse.json(
        { error: "El servidor no tiene configuradas las credenciales de Supabase para María." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { nombre, telefono, tipoVehiculo } = body ?? {};

    if (!nombre || !telefono || !tipoVehiculo) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    // Normaliza el teléfono a formato E.164 sin '+' (como usa la tabla, ej: 56912345678)
    const telefonoLimpio = String(telefono).replace(/[^\d]/g, "");
    const senderId = telefonoLimpio.startsWith("56") ? telefonoLimpio : `56${telefonoLimpio.replace(/^0+/, "")}`;

    const supabase = createClient(supabaseUrl, serviceKey);

    const { error } = await supabase.from("postulantes_ia").insert([
      {
        sender_id: senderId,
        platform: "web",
        nombre,
        telefono: senderId,
        tipo_vehiculo: tipoVehiculo,
        estado: "Nuevo contacto",
        history: [
          {
            role: "user",
            content: `[Formulario web] Nombre: ${nombre} · Teléfono: ${senderId} · Tipo de vehículo: ${tipoVehiculo}`,
          },
        ],
      },
    ]);

    if (error) {
      console.error("Error guardando lead de María (web):", error);
      return NextResponse.json({ error: "No se pudo guardar tu solicitud." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, whatsappNumber: senderId });
  } catch (err) {
    console.error("Maria lead API error:", err);
    return NextResponse.json({ error: "Ocurrió un error inesperado." }, { status: 500 });
  }
}
