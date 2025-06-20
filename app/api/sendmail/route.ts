import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Parse incoming request body
  const { email } = await req.json();
  // Validate required fields
  if (!email) {
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

  try {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({ templateId: 56, to: [{ email: email }] }),
    };

    const sendmail = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      options
    );
    console.log("sendmailsendmail:", sendmail);
    const sendmailJson = await sendmail.json();
    console.log("sendmailJson:", sendmailJson);
    if (sendmail?.ok) {
      return NextResponse.json(
        { message: "Email envoyé avec succès" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Erreur envoie email", details: sendmailJson },
        { status: 400 }
      );
    }

    // Other creation errors
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
