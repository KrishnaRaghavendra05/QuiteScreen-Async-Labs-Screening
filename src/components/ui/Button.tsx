import type { ReactNode } from "react";

import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface LinkProps extends BaseProps {
  /** Present means this navigates, so it renders an anchor. */
  href: string;
  onClick?: never;
}

interface ActionProps extends BaseProps {
  href?: never;
  onClick: () => void;
}

/**
 * One button treatment for the whole site.
 *
 * It renders an `<a>` when given an `href` and a `<button>` when given an
 * `onClick`, and the prop types make it impossible to pass both — links
 * navigate, buttons act.
 */
export function Button(props: LinkProps | ActionProps) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = [styles.button, className].filter(Boolean).join(" ");

  if (props.href !== undefined) {
    return (
      <a className={classes} data-variant={variant} data-size={size} href={props.href}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      data-variant={variant}
      data-size={size}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}
