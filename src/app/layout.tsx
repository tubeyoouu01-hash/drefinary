import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Oil refinery corporate website template.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
