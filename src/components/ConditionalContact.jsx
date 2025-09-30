"use client";

import { usePathname } from "next/navigation";
import ContactSection from "@/components/Home/ContactSection";

export default function ConditionalContact() {
  const pathname = usePathname();
  return pathname !== "/contact" ? <ContactSection /> : null;
}
