/** Section anchors. One array, rendered by the header, the mobile menu and the footer. */
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Product", href: "#product" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Use cases", href: "#use-cases" },
  { label: "How it works", href: "#how-it-works" },
];

/** Where every "Get started" points. Declared once so the target cannot drift. */
export const CTA_HREF = "#get-started";
