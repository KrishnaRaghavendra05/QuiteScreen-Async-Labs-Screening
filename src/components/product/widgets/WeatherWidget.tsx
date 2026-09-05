import type { WeatherWidgetData } from "../../../types/eink.ts";
import { EInkIcon } from "../einkIcons.tsx";
import styles from "./widgets.module.css";

/** Current conditions: glyph, temperature, description. */
export function WeatherWidget({ data }: { data: WeatherWidgetData }) {
  return (
    <div className={styles.weatherBody}>
      <EInkIcon name={data.icon} className={styles.weatherIcon} />
      <div>
        <p className={styles.weatherTemperature}>{data.temperature}</p>
        <p className={styles.weatherCondition}>{data.condition}</p>
      </div>
    </div>
  );
}
