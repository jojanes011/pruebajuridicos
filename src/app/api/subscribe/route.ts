import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.SENDINBLUE_API_KEY!,
      },
      body: JSON.stringify({
        email,
        listIds: [36],
        // ...otros datos...
      }),
    };

    try {
      const response = await fetch(
        "https://api.sendinblue.com/v3/contacts",
        options as any
      );
      const data = await response.json();
      res.status(200).json({ message: "Suscripción exitosa", data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al suscribir", error });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
