import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Asegúrate de que solo procesas solicitudes POST
  if (req.method !== 'POST') {
    return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
  }

  const { email, nombre, telefono, mensaje } = await req.json();

  const contactData = {
    email,
    listIds: [2], // Asegúrate de reemplazar esto con el ID de tu lista
    attributes: nombre || telefono || mensaje ? {
      NOMBRE: nombre,
      WHATSAPP: `+57${telefono}`,
      MENSAJE: mensaje
    } : undefined,
  };

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.SENDINBLUE_API_KEY!,
    },
    body: JSON.stringify(contactData),
  };

  try {
    const response = await fetch('https://api.sendinblue.com/v3/contacts', options);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return NextResponse.json({ message: 'Suscripción exitosa', data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al suscribir', error }, { status: 500 });
  }
}
