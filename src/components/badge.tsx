import {
  baseColorSlots,
  buildColorStyles,
  type BaseColorProps,
} from "../utilities/colorSystem";

interface BadgeProps extends BaseColorProps {
  text: string;
  className?: string;
}

function Badge({
  text,
  color = "bg",
  borderColor = "fg",
  textColor = "fg",
  className,
  ...colorProps
}: BadgeProps) {
  const { style, classes } = buildColorStyles(
    baseColorSlots({
      color,
      borderColor,
      textColor,
      dropShadowOffset: "near",
      ...colorProps,
    }),
  );

  return (
    <span
      style={style}
      className={[
        ...classes,
        "rounded-xs font-mono px-3 py-1 text-[11px] leading-[1.428571]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </span>
  );
}

export default Badge;
