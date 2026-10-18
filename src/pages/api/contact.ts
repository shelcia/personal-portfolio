import type { NextApiRequest, NextApiResponse } from "next";

// Runs only on the server, so AIRTABLE_API_KEY never reaches the browser.
const AIRTABLE_URL = "https://api.airtable.com/v0/appTbgDq2M8MBUNrR/emails";

const MAX_LENGTH = { name: 200, email: 320, message: 5000 };

type Field = keyof typeof MAX_LENGTH;

const readField = (body: unknown, field: Field): string | null => {
  const value = (body as Record<string, unknown> | null)?.[field];
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed === "" || trimmed.length > MAX_LENGTH[field]) return null;
  return trimmed;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; error?: string }>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const name = readField(req.body, "name");
  const email = readField(req.body, "email");
  const message = readField(req.body, "message");

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return res
      .status(400)
      .json({ ok: false, error: "Please fill in all the fields" });
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!apiKey) {
    console.error("AIRTABLE_API_KEY is not set");
    return res.status(500).json({ ok: false, error: "Server misconfigured" });
  }

  try {
    const airtableRes = await fetch(AIRTABLE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: { name, email, message } }),
    });

    if (!airtableRes.ok) {
      console.error("Airtable error", airtableRes.status);
      return res.status(502).json({ ok: false, error: "Could not send" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(502).json({ ok: false, error: "Could not send" });
  }
}
