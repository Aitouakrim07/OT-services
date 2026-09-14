"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { needs } from "@/lib/site";
export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("loading");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result: { message?: string } = await response.json();
      if (!response.ok)
        throw new Error(
          result.message || "Envoi impossible. Réessayez plus tard.",
        );
      setState("success");
      setMessage(
        "Votre message a été envoyé. Merci pour votre prise de contact.",
      );
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Envoi impossible. Réessayez plus tard.",
      );
    }
  }
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-grid">
        <label>
          Nom <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Votre nom"
          />
        </label>
        <label>
          Email <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="vous@entreprise.fr"
          />
        </label>
        <label>
          Entreprise
          <input
            name="company"
            autoComplete="organization"
            maxLength={150}
            placeholder="Votre entreprise (facultatif)"
          />
        </label>
        <label>
          Type de besoin <span>*</span>
          <select name="need" defaultValue="" required>
            <option value="" disabled>
              Sélectionnez un sujet
            </option>
            {needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Message <span>*</span>
        <textarea
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={5}
          placeholder="Votre projet, vos contraintes, votre échéance…"
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Site web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-note">
        * Champs obligatoires. Vos informations servent à répondre à votre
        demande. <a href="/confidentialite">Confidentialité</a>
      </p>
      <button className="button" disabled={state === "loading"} type="submit">
        {state === "loading" ? (
          <>
            Envoi en cours
            <LoaderCircle size={17} className="animate-spin" />
          </>
        ) : (
          <>
            Envoyer mon message
            <ArrowUpRight size={17} />
          </>
        )}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={state === "error" ? "form-status error" : "form-status"}
      >
        {message}
      </p>
    </form>
  );
}
