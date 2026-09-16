"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { needs } from "@/lib/site";

export function ContactForm() {
 const [state,setState]=useState<"idle"|"loading"|"success"|"error">("idle");
 const [feedback,setFeedback]=useState("");
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(state==="loading")return;
  const form=event.currentTarget;setState("loading");setFeedback("");
  try{const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form)))});
   const data:{message?:string}=await response.json();
   if(!response.ok)throw new Error(data.message||"Votre demande n’a pas pu être envoyée.");
   setState("success");setFeedback("Votre demande a été envoyée. Merci !");form.reset();
  }catch(error){setState("error");setFeedback(error instanceof Error?error.message:"Votre demande n’a pas pu être envoyée.")}
 }
 return <form onSubmit={submit} className="contact-form"><div className="form-grid">
  <label>Nom <span>*</span><input name="name" autoComplete="name" required maxLength={100} placeholder="Votre nom"/></label>
  <label>Entreprise<input name="company" autoComplete="organization" maxLength={150} placeholder="Votre entreprise"/></label>
  <label>Email <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="vous@entreprise.fr"/></label>
  <label>Téléphone <small>(facultatif)</small><input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="Votre numéro"/></label>
 </div><label>Que souhaitez-vous améliorer ? <span>*</span><select name="need" required defaultValue=""><option value="" disabled>Choisissez un sujet</option>{needs.map(n=><option key={n} value={n}>{n}</option>)}</select></label>
 <label>Parlez-moi brièvement de votre besoin <span>*</span><textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="Comment fonctionnez-vous aujourd’hui ? Que souhaiteriez-vous améliorer ?"/></label>
 <p className="form-help">Pas besoin de cahier des charges. Quelques phrases suffisent pour commencer.</p>
 <div className="honeypot" aria-hidden="true"><label>Site web<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
 <p className="form-note">* Champs obligatoires. Vos données servent uniquement à répondre à votre demande. <a href="/confidentialite">Confidentialité</a></p>
 <button className="button" type="submit" disabled={state==="loading"}>{state==="loading"?<>Envoi en cours <LoaderCircle size={17} className="animate-spin"/></>:<>Envoyer ma demande <ArrowUpRight size={17}/></>}</button>
 <p className={state==="error"?"form-status error":"form-status"} role="status" aria-live="polite">{feedback}</p>
 </form>;
}
