import { NextResponse } from "next/server";
import { needs } from "@/lib/site";
import nodemailer from "nodemailer";
export const runtime = "nodejs";
const fail = (message: string, status: number) =>
  NextResponse.json({ message }, { status });
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const accepted = new URL(request.url).origin;
  const loopback = (value: string) => {
    try {
      const u = new URL(value);
      return (
        ["localhost", "127.0.0.1"].includes(u.hostname) &&
        u.port === new URL(accepted).port
      );
    } catch {
      return false;
    }
  };
  const localPreview = Boolean(
    origin && loopback(origin) && loopback(accepted),
  );
  if (origin && !localPreview && origin !== accepted)
    return fail("Origine de la requête refusée.", 403);
  if (!request.headers.get("content-type")?.includes("application/json"))
    return fail("Format incorrect.", 415);
  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return fail("Requête illisible.", 400);
  }
  if (raw.length > 15000) return fail("Message trop volumineux.", 413);
  let data: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return fail("Données incorrectes.", 400);
    data = parsed as Record<string, unknown>;
  } catch {
    return fail("Données incorrectes.", 400);
  }
  const field = (key: string) =>
    typeof data[key] === "string" ? (data[key] as string).trim() : "";
  if (field("website"))
    return fail("La demande ne peut pas être traitée.", 400);
  const name = field("name"),
    email = field("email"),
    company = field("company"),
    phone = field("phone"),
    need = field("need"),
    message = field("message");
  if (
    name.length < 1 ||
    name.length > 100 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    company.length > 150 ||
    phone.length > 40 ||
    (phone.length > 0 && !/^[+\d() .\-]{6,40}$/.test(phone)) ||
    !needs.some((n) => n === need) ||
    message.length < 10 ||
    message.length > 5000
  )
    return fail(
      "Vérifiez les champs : nom, email, type de besoin et message (10 caractères minimum).",
      400,
    );
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!user || !pass)
    return fail(
      "Le formulaire n’est pas encore activé. Aucun message n’a été envoyé. Utilisez les coordonnées de contact si elles sont renseignées.",
      503,
    );
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  try {
    const result = await transport.sendMail({
      from: { name: "Ouakrim IT Services — Contact", address: user },
      to: user,
      replyTo: email,
      subject: "Demande de projet — " + need,
      text: [
        "Nom : " + name,
        "Email : " + email,
        "Entreprise : " + (company || "Non renseignée"),
        "Téléphone : " + (phone || "Non renseigné"),
        "Besoin : " + need,
        "",
        message,
      ].join("\n"),
    });
    if (!result.accepted.length)
      return fail(
        "Le message n’a pas pu être envoyé. Réessayez plus tard.",
        502,
      );
    return NextResponse.json({ message: "Message envoyé." });
  } catch {
    return fail(
      "Le message n’a pas pu être envoyé via Gmail. Réessayez plus tard.",
      502,
    );
  } finally {
    transport.close();
  }
}
