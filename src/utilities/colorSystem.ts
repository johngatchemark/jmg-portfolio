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
export type ColorInput = PresetColor | (string & {});
export type ColorPrefix = "bg" | "border" | "text" | "drop-shadow";

function isPreset(clr: string): clr is PresetColor {
  return (PRESET_COLORS as readonly string[]).includes(clr);
}
function isHex(clr: string): boolean {
  return HEX_PATTERN.test(clr);
}
function validateColor(clr: string): boolean {
  if (isPreset(clr) || isHex(clr)) return true;
  console.error(
    `"${clr}" is not a valid color. Use a 6-digit hex code (e.g. #FF0145) or one of: cyan, green, amber, magenta, fg, muted-fg, bg.`,
  );
  return false;
}

/** One "slot" = one color prop resolved into a CSS var + a Tailwind class. */
export interface ColorSlot {
  value: ColorInput | undefined;
  prefix: ColorPrefix;
  /** e.g. "dark:", "hover:", "dark:hover:" — omit for the base state */
  selector?: string;
  /** disambiguates the CSS var name, e.g. "dark", "hover", "dark-hover" */
  varSuffix?: string;
  /** not a color, but required for styling drop shadow distance from element */
  shadowOffset?: "near" | "far";
}

/**
 * Resolves a list of color slots into a merged inline `style` object and a
 * matching list of Tailwind arbitrary-value classes. Each slot is resolved
 * independently — no shared mutable state to get out of sync.
 */
export function buildColorStyles(slots: ColorSlot[]): {
  style: React.CSSProperties;
  classes: string[];
} {
  const style: Record<string, string> = {};
  const classes: string[] = [];

  for (const slot of slots) {
    if (
      !slot.value ||
      !validateColor(slot.value) ||
      (slot.prefix === "drop-shadow" && slot.shadowOffset === undefined)
    )
      continue;

    const varName = `--inline-${slot.varSuffix ? `${slot.varSuffix}-` : ""}${slot.prefix}`;
    style[varName] = isHex(slot.value)
      ? slot.value
      : `var(--color-jm-${slot.value})`;

    const base =
      slot.prefix === "drop-shadow" && slot.shadowOffset === "near"
        ? `drop-shadow-[2px_2px_0px_var(${varName})]`
        : slot.prefix === "drop-shadow" && slot.shadowOffset === "far"
          ? `drop-shadow-[4px_4px_0px_var(${varName})]`
          : slot.prefix === "border"
            ? `border-[var(${varName})] border`
            : slot.prefix === "bg"
              ? `bg-[var(${varName})]`
              : `text-[var(${varName})]`;

    classes.push(slot.selector ? `${slot.selector}${base}` : base);
  }

  return { style: style as React.CSSProperties, classes };
}

/** Base color props both Badge and Button accept. */
export interface BaseColorProps {
  color?: ColorInput;
  darkColor?: ColorInput;
  borderColor?: ColorInput;
  darkBorderColor?: ColorInput;
  textColor?: ColorInput;
  darkTextColor?: ColorInput;
  dropShadowColor?: ColorInput;
  darkDropShadowColor?: ColorInput;
  dropShadowOffset?: "near" | "far";
}

export function baseColorSlots(p: BaseColorProps): ColorSlot[] {
  return [
    {
      value: p.dropShadowColor,
      prefix: "drop-shadow",
      shadowOffset: p.dropShadowOffset,
    },
    {
      value: p.darkDropShadowColor,
      prefix: "drop-shadow",
      selector: "dark:",
      varSuffix: "dark",
      shadowOffset: p.dropShadowOffset,
    },
    { value: p.borderColor, prefix: "border" },
    {
      value: p.darkBorderColor,
      prefix: "border",
      selector: "dark:",
      varSuffix: "dark",
    },
    { value: p.color, prefix: "bg" },
    { value: p.darkColor, prefix: "bg", selector: "dark:", varSuffix: "dark" },
    { value: p.textColor, prefix: "text" },
    {
      value: p.darkTextColor,
      prefix: "text",
      selector: "dark:",
      varSuffix: "dark",
    },
  ];
}
