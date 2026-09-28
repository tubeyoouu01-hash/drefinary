"use client";

import { Send } from "lucide-react";
import type { Dictionary } from "@/lib/get-dictionary";
import { CONTACT_EMAIL } from "@/lib/site-config";

export function ContactForm({ dict }: { dict: Dictionary }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(f.get("subject") ?? ""));
    const body = encodeURIComponent(
      `Name: ${f.get("fullName")}\nEmail: ${f.get("email")}\nCompany: ${f.get("company")}\n\nMessage:\n${f.get("message")}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const input = "w-full rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue";
  const label = "block text-sm font-medium text-ink mb-1.5";
  const l = dict.contact.labels;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label className={label}>{l.fullName}</label><input required name="fullName" className={input} /></div>
        <div><label className={label}>{l.email}</label><input required type="email" name="email" className={input} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label className={label}>{l.company}</label><input name="company" className={input} /></div>
        <div><label className={label}>{l.subject}</label><input required name="subject" className={input} /></div>
      </div>
      <div><label className={label}>{l.message}</label><textarea required name="message" rows={6} className={input} /></div>
      <p className="text-xs text-slate-light italic">{dict.contact.disclaimer}</p>
      <button type="submit" className="inline-flex items-center gap-2 rounded-sm bg-blue px-7 py-3.5 text-sm font-semibold text-white hover:bg-blue-deep transition-colors">
        {l.submit}<Send className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.75} />
      </button>
    </form>
  );
}
