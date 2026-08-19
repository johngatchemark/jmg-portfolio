import type React from "react";
import {
  baseColorSlots,
  buildColorStyles,
  type BaseColorProps,
  type ColorInput,
} from "../utilities/colorSystem";

interface ButtonProps
  extends
    BaseColorProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children: React.ReactNode;
  hoverColor?: ColorInput;
  darkHoverColor?: ColorInput;
  hoverTextColor?: ColorInput;
  darkHoverTextColor?: ColorInput;
  hoverBorderColor?: ColorInput;
  darkHoverBorderColor?: ColorInput;
  className?: string;
}

function RaisedButton({
  children,
  color = "bg",
  borderColor = "fg",
  textColor = "fg",
  hoverColor,
  darkHoverColor,
  hoverTextColor,
  darkHoverTextColor,
  hoverBorderColor,
  darkHoverBorderColor,
  className,
  ...rest
}: ButtonProps) {
  const { style, classes } = buildColorStyles([
    ...baseColorSlots({
      color,
      borderColor,
      textColor,
      dropShadowOffset: "far",
      ...rest,
    }),
    { value: hoverColor, prefix: "bg", selector: "hover:", varSuffix: "hover" },
    {
      value: darkHoverColor,
      prefix: "bg",
      selector: "dark:hover:",
      varSuffix: "dark-hover",
    },
    {
      value: hoverTextColor,
      prefix: "text",
      selector: "hover:",
      varSuffix: "hover",
    },
    {
      value: darkHoverTextColor,
      prefix: "text",
      selector: "dark:hover:",
      varSuffix: "dark-hover",
    },
    {
      value: hoverBorderColor,
      prefix: "border",
      selector: "hover:",
      varSuffix: "hover",
    },
    {
      value: darkHoverBorderColor,
      prefix: "border",
      selector: "dark:hover:",
      varSuffix: "dark-hover",
    },
  ]);

  return (
    <button
      style={style}
      className={[
        ...classes,
        "w-fit rounded-sm font-mono px-3.5 py-1.5 text-[12px] flex items-center justify-center gap-2 box-border border-2",
        "active:relative active:top-1 active:shadow-none active:drop-shadow-none cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}

export default RaisedButton;
