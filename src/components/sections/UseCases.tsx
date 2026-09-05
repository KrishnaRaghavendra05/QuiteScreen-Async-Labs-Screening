import { useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { Maximize2 } from "lucide-react";

import { Section } from "../ui/Section.tsx";
import { SectionHeader } from "../ui/SectionHeader.tsx";
import { DeviceFrame } from "../product/DeviceFrame.tsx";
import { EInkScreen } from "../product/EInkScreen.tsx";
import { ScreenViewer } from "../product/ScreenViewer.tsx";
import { DEFAULT_USE_CASE, FEATURED_LABEL, USE_CASES } from "../../data/useCases.ts";
import type { UseCase } from "../../data/useCases.ts";
import styles from "./UseCases.module.css";

/** Left and Right move between tabs; Home and End jump to the ends. */
const KEY_OFFSET: Record<string, number> = {
  ArrowRight: 1,
  ArrowDown: 1,
  ArrowLeft: -1,
  ArrowUp: -1,
};

/**
 * The use-case switcher.
 *
 * A real tab list: arrow keys move between tabs, only the selected tab is in
 * the tab sequence, and the panel is named by its tab. Selecting a tab swaps
 * the layout passed to a single `EInkScreen` — the device markup appears once.
 *
 * The active use case is held as the object rather than an id, so there is no
 * lookup that can fail to resolve.
 */
export function UseCases() {
  const [active, setActive] = useState<UseCase>(DEFAULT_USE_CASE);
  const [viewerOpen, setViewerOpen] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const viewerButtonRef = useRef<HTMLButtonElement>(null);

  /** Closing returns focus to the control that opened the viewer. */
  const closeViewer = () => {
    setViewerOpen(false);
    viewerButtonRef.current?.focus();
  };

  /** Selects the tab at `index` and moves focus to it, as the tab pattern expects. */
  const select = (index: number) => {
    const target = USE_CASES[index];
    if (!target) return;

    setActive(target);
    tabsRef.current?.querySelectorAll("button")[index]?.focus();
  };

  const onKeyDown = (event: ReactKeyboardEvent, index: number) => {
    const offset = KEY_OFFSET[event.key];

    if (offset !== undefined) {
      event.preventDefault();
      select((index + offset + USE_CASES.length) % USE_CASES.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(USE_CASES.length - 1);
    }
  };

  return (
    <Section id="use-cases" labelledBy="use-cases-title">
      <SectionHeader
        eyebrow="Use cases"
        title="One display, wherever the information is needed."
        titleId="use-cases-title"
        lede="The same hardware, showing whatever that place calls for. Switch between them below."
      />

      <div className={styles.layout}>
        {/* Groups the tabs and their copy into one column; needs no styling. */}
        <div>
          <div
            ref={tabsRef}
            className={styles.tabs}
            role="tablist"
            aria-label="Use cases"
          >
            {USE_CASES.map((useCase, index) => {
              const selected = useCase.id === active.id;

              return (
                <button
                  key={useCase.id}
                  type="button"
                  role="tab"
                  id={`tab-${useCase.id}`}
                  className={styles.tab}
                  aria-selected={selected}
                  aria-controls={`panel-${useCase.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(useCase)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                >
                  {useCase.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Keyed on the use case so the copy re-enters when the tab changes. */}
          <div key={active.id} className={styles.copy}>
            {active.featured ? (
              <p className={styles.featured}>{FEATURED_LABEL}</p>
            ) : null}
            <h3 className={styles.title}>{active.title}</h3>
            <p className={styles.description}>{active.description}</p>

            <button
              ref={viewerButtonRef}
              type="button"
              className={styles.expand}
              onClick={() => setViewerOpen(true)}
            >
              <Maximize2 size={16} aria-hidden="true" />
              View full screen
            </button>
          </div>
        </div>

        <div
          id={`panel-${active.id}`}
          className={styles.stage}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
        >
          <div key={active.id} className={styles.device}>
            <DeviceFrame size="lg" stand={active.stand}>
              <EInkScreen layout={active.screen} variant="tri-color" />
            </DeviceFrame>
          </div>
        </div>
      </div>

      {/* The same device and screen, given a modal container and the xl size. */}
      <ScreenViewer
        layout={active.screen}
        stand={active.stand}
        open={viewerOpen}
        onClose={closeViewer}
      />
    </Section>
  );
}
