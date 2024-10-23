import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { error: `Method ${req.method} Not Allowed` },
      { status: 405 }
    );
  }

  const { email, nombre, telefono, mensaje } = await req.json();

  const emailData = {
    sender: { email: email }, // Dirección del remitente
    to: [{ email: "jairoflorez@juridicosyasociados.com" }], // Tu correo
    subject: "Nuevo mensaje de contacto",
    htmlContent: `
      <div style="background-color: #FFFFFF; padding: 20px; font-family: Arial, sans-serif;">
        <div style="background-color: #511011; color: #FFFFFF; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Nuevo Mensaje de Contacto</h1>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
          <h2 style="color: #511011;">Detalles del Mensaje</h2>
          <p style="color: #727074; font-size: 16px;"><strong>Nombre:</strong> ${
            nombre || "No proporcionado"
          }</p>
          <p style="color: #727074; font-size: 16px;"><strong>Email:</strong> ${
            email || "No proporcionado"
          }</p>
          <p style="color: #727074; font-size: 16px;"><strong>Teléfono:</strong> ${
            telefono || "No proporcionado"
          }</p>
          <p style="color: #727074; font-size: 16px;"><strong>Mensaje:</strong> ${
            mensaje || "No proporcionado"
          }</p>
        </div>
        <div style="background-color: #511011; color: #FFFFFF; padding: 10px; text-align: center; margin-top: 20px;">
          <p style="margin: 0; font-size: 14px;">Este correo se ha generado desde tu página web.</p>
        </div>
      </div>
    `,
  };

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": "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",
    },
    body: JSON.stringify(emailData),
  };

  try {
    const response = await fetch(
      "https://api.sendinblue.com/v3/smtp/email",
      options
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return NextResponse.json(
      { message: "Correo enviado exitosamente", data },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al enviar el correo", error },
      { status: 500 }
    );
  }
}
