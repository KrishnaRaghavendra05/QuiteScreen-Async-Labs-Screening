import { AlarmClock, CloudRain, CloudSun, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { EInkIconName } from "../../types/eink.ts";

/**
 * The glyphs the panel can draw, resolved in one place so no widget imports an
 * icon directly.
 *
 * The set is deliberately limited to what the layouts actually use — every
 * entry costs bundle weight — and extends by adding one line here and one
 * member to `EInkIconName`.
 *
 * Stroke weight is set here too: e-ink line art is drawn slightly finer than
 * Lucide's default of 2, matching the reference screen.
 */
const ICONS: Record<EInkIconName, LucideIcon> = {
  "cloud-sun": CloudSun,
  "cloud-rain": CloudRain,
  "alarm-clock": AlarmClock,
  megaphone: Megaphone,
};

interface EInkIconProps {
  name: EInkIconName;
  className?: string;
}

/**
 * Sized in `em` so it scales with the surrounding screen type rather than with
 * the viewport. Decorative: the label beside every icon carries the meaning.
 */
export function EInkIcon({ name, className }: EInkIconProps) {
  const Glyph = ICONS[name];

  return (
    <Glyph className={className} size="1em" strokeWidth={1.75} aria-hidden="true" />
  );
}
