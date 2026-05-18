"use client";

import { usePathname } from "next/navigation";
import ContactSection from "@/components/Contactsection";

export default function ConditionalContact() {
  const pathname = usePathname();
  return pathname !== "/contact" ? <ContactSection /> : null;
}
