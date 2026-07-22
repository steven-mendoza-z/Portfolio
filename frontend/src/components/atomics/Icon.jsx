import { forwardRef } from "react";
import { cx } from "./classNames";

const ICON_SIZES = {
  sm: 14,
  md: 16,
  lg: 20,
  xl: 35,
};

function resolveIconSize(size = "lg") {
  return ICON_SIZES[size] ?? ICON_SIZES.lg;
}

const Icon = forwardRef(function Icon(
  {
    variant = "default",
    size = "lg",
    className = "",
    alt = "",
    decorative = false,
    style,
    ...rest
  },
  ref
) {
  const iconSize = resolveIconSize(size);
  const variantClass = variant === "default" ? "" : `icon-${variant}`;

  return (
    <img
      ref={ref}
      className={cx(variantClass, className)}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      width={iconSize}
      height={iconSize}
      style={style}
      {...rest}
    />
  );
});

export default Icon;
