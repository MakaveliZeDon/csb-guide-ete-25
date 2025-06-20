import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Parse incoming request body
  const { firstName, email, newsletter } = await req.json();
  // Validate required fields
  if (!email || !firstName) {
    return NextResponse.json(
      { error: "Missing required fields: firstName and email." },
      { status: 400 }
    );
  }

  // Get API key from environment and ensure it's defined
  const apiKey = process.env.BV_KEY;
  if (!apiKey) {
    console.error("BV_KEY is not defined in environment variables.");
    return NextResponse.json(
      { error: "Internal server error: API key is missing." },
      { status: 500 }
    );
  }

  // Prepare headers ensuring types align with HeadersInit
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "api-key": apiKey,
  };

  // Data payload for creating or updating contact
  const listId = 10; // Replace with your real list ID
  const contactData = {
    email,
    attributes: {
      PRENOM: firstName,
      NEWSLETTER: newsletter,
    },
    listIds: [listId],
    updateEnabled: false,
  };

  try {
    // Attempt to create the contact in Brevo
    const createRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers,
      body: JSON.stringify(contactData),
    });
    const createJson = await createRes.json();

    if (createRes.ok) {
      // Return success response to client
      return NextResponse.json(
        { message: "Contact créé avec succès dans Brevo.", data: createJson },
        { status: 200 }
      );
    }

    // Handle duplicate error: update existing contact
    if (createRes.status === 400 && createJson.code === "duplicate_parameter") {
      const updateData = {
        attributes: contactData.attributes,
        listIds: [listId],
      };

      const updateRes = await fetch(
        `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify(updateData),
        }
      );

      const updateJson = updateRes;

      if (updateRes.ok) {
        return NextResponse.json(
          {
            message: "Contact mis à jour avec succès dans Brevo.",
            data: updateJson,
          },
          { status: 200 }
        );
      }

      // Update failed
      console.error("❌ Échec mise à jour Brevo:", updateJson);
      return NextResponse.json(
        { error: "Échec mise à jour du contact.", details: updateJson },
        { status: updateRes.status }
      );
    }

    // Other creation errors
    console.error("❌ Échec création Brevo:", createJson);
    return NextResponse.json(
      { error: "Échec création du contact.", details: createJson },
      { status: createRes.status }
    );
  } catch (err) {
    console.error("❌ Erreur réseau ou interne lors de l'appel à Brevo:", err);
    return NextResponse.json(
      {
        error: "Erreur interne.",
        details: err instanceof Error ? err.message : err,
      },
      { status: 500 }
    );
  }
}
