/**
 * Properties for the Badge Component
 *
 * @property text - visual label displayed inside the badge
 * @property color - background color of the badge
 * @property darkColor - optional background color for dark mode
 * @property borderColor - optional color of the component border
 * @property textColor - optional color of the component text
 */

import type React from "react";

// Preset colors are string-literal-safe for Tailwind's static scanner.
// Any other string is treated as a hex code and rendered via a CSS variable.
const PRESET_COLORS = [
  "cyan",
  "green",
  "amber",
  "magenta",
  "fg",
  "muted-fg",
  "bg",
] as const;
const HEX_PATTERN = /^#(?:[a-fA-F0-9]{6})$/;

export type PresetColor = (typeof PRESET_COLORS)[number];
type ColorInput = PresetColor | (string & {});
type ColorPrefix = "bg" | "border" | "text" | "drop-shadow";
type ColorVariant = "light" | "dark";

function isPreset(clr: string): clr is PresetColor {
  return (PRESET_COLORS as readonly string[]).includes(clr);
}

function isHex(clr: string): boolean {
  return HEX_PATTERN.test(clr);
}

function validateColor(clr: string): boolean {
  if (isPreset(clr) || isHex(clr)) return true;
  console.error(
    `"${clr}" is not a valid color. Use a 6-digit hex code (e.g. #FF0145) or one of: cyan, green, amber, fg, bg.`,
  );
  return false;
}

/**
 * Resolves a color input into a [CSS custom property name, value] pair.
 * Pure function, does not mutate anything. Returns null for unset/invalid input.
 *
 * Presets resolve to a reference to the theme variable (so they stay, see index.css for more info)
 * Hex values are passed through as-is.
 */
function resolveColorVar(
  clr: ColorInput | undefined,
  prefix: ColorPrefix,
  variant: ColorVariant = "light",
): [string, string] | null {
  if (!clr) return null;
  if (!validateColor(clr)) return null;

  const key =
    variant === "dark" ? `--inline-dark-${prefix}` : `--inline-${prefix}`;
  const value = isHex(clr) ? clr : `var(--color-jm-${clr})`;

  return [key, value];
}

interface BadgeProps {
  text: string;
  /**
   * Can take either of the following forms:
   * - A standard 6-digit hex code (e.g., #FF0145)
   * - A predefined color name: "cyan", "green", "amber", "fg", "bg"
   *
   * Predefined colors change based on system mode ("light"/"dark"); the
   * color described here is for light mode. e.g. 'fg' renders black in
   * light mode and white in dark mode. Use hex if you don't want that
   * behavior. See index.css (:root / @theme) for the underlying variable values.
   *
   * Invalid strings log a console error and fall back to no color, rather
   * than throwing.
   */
  color?: ColorInput;
  /** Overrides the dark mode version of predefined colors, if specified. */
  darkColor?: ColorInput;
  /** Falls back to `color` if not defined. */
  borderColor?: ColorInput;
  /** Falls back to `darkColor` if not defined. */
  darkBorderColor?: ColorInput;
  textColor?: ColorInput;
  darkTextColor?: ColorInput;
  /** Priority: dropShadowColor -> borderColor -> color. */
  dropShadowColor?: ColorInput;
  /** Priority: darkDropShadowColor -> darkBorderColor -> darkColor. */
  darkDropShadowColor?: ColorInput;
  className?: string;
}

/**
 * Blocky, retro-style badge with a drop shadow for a "3D" raised visual effect.
 */
function Badge({
  text,
  color = "bg",
  darkColor,
  borderColor = "fg",
  darkBorderColor,
  textColor = "fg",
  darkTextColor,
  dropShadowColor,
  darkDropShadowColor,
  className,
}: BadgeProps) {
  //   COMMENTED OUT FOR NOW FOR TESTING PURPOSES
  //   // Priority chains
  //   const dropShadowSource = dropShadowColor ?? borderColor ?? color;
  //   const darkDropShadowSource =
  //     darkDropShadowColor ?? darkBorderColor ?? darkColor;
  //   const borderColorSource = borderColor ?? color;
  //   const darkBorderColorSource = darkBorderColor ?? darkColor;

  // Build the inline CSS variables. Each resolveColorVar call is independent
  // and side-effect-free, so there's no shared mutable object to get out of sync.
  const styles = Object.fromEntries(
    (
      [
        // COMMENTED OUT FOR NOW FOR TESTING PURPOSES
        // resolveColorVar(dropShadowSource, "drop-shadow"),
        // resolveColorVar(darkDropShadowSource, "drop-shadow", "dark"),
        // resolveColorVar(borderColorSource, "border"),
        // resolveColorVar(darkBorderColorSource, "border", "dark"),
        resolveColorVar(dropShadowColor, "drop-shadow"),
        resolveColorVar(darkDropShadowColor, "drop-shadow", "dark"),
        resolveColorVar(borderColor, "border"),
        resolveColorVar(darkBorderColor, "border", "dark"),
        resolveColorVar(color, "bg"),
        resolveColorVar(darkColor, "bg", "dark"),
        resolveColorVar(textColor, "text"),
        resolveColorVar(darkTextColor, "text", "dark"),
      ] as const
    ).filter((entry): entry is [string, string] => entry !== null),
  ) as React.CSSProperties;

  // Every class string below is a fixed literal, so Tailwind won't get blindsided by dynamically generated classes
  const classes = [
    "rounded-xs",
    // COMMENTED OUT FOR NOW FOR TESTING PURPOSES
    // dropShadowSource && "drop-shadow-[2px_2px_0px_var(--inline-drop-shadow)]",
    // darkDropShadowSource &&
    //   "dark:drop-shadow-[2px_2px_0px_var(--inline-dark-drop-shadow)]",

    // borderColorSource && "border border-[var(--inline-border)]",
    // darkBorderColorSource && "dark:border-[var(--inline-dark-border)]",

    dropShadowColor && "drop-shadow-[2px_2px_0px_var(--inline-drop-shadow)]",
    darkDropShadowColor &&
      "dark:drop-shadow-[2px_2px_0px_var(--inline-dark-drop-shadow)]",

    borderColor && "border border-[var(--inline-border)]",
    darkBorderColor && "dark:border-[var(--inline-dark-border)]",

    color && "bg-[var(--inline-bg)]",
    darkColor && "dark:bg-[var(--inline-dark-bg)]",

    textColor && "text-[var(--inline-text)]",
    darkTextColor && "dark:text-[var(--inline-dark-text)]",

    "font-mono px-3 py-1 text-[11px]",
    "leading-[1.428571]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span style={styles} className={classes}>
      {text}
    </span>
  );
}

export default Badge;
