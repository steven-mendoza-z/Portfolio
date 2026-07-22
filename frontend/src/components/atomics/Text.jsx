import { forwardRef } from "react";
import { cx } from "./classNames";
import { TEXT_ALIGNMENTS, TEXT_SIZES, resolveColorClass } from "./textTokens";

const Text = forwardRef(function Text(
  {
    as = "p",
    color,
    adaptative = false,
    mobileAdaptative = false,
    size = "",
    left = false,
    center = false,
    right = false,
    bold = false,
    semibold = false,
    elipsis = false,
    className = "",
    children,
    ...rest
  },
  ref
) {
  const Tag = as;
  const sizeClass = TEXT_SIZES[size] ?? size;
  const colorClass = resolveColorClass(color);
  const adaptativeClass = adaptative || mobileAdaptative ? "text-adaptative" : "";
  const alignmentClass = cx(
    left && TEXT_ALIGNMENTS.left,
    center && TEXT_ALIGNMENTS.center,
    right && TEXT_ALIGNMENTS.right
  );
  const weightClass = cx(
    bold && "text-bold",
    semibold && "text-semibold"
  );
  const elipsisClass = elipsis ? "text-elipsis" : "";

  return (
    <Tag
      ref={ref}
      className={cx(
        "text",
        sizeClass,
        adaptativeClass,
        colorClass,
        alignmentClass,
        weightClass,
        elipsisClass,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Text;
