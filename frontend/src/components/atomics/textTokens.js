export const TEXT_COLORS = {
  1: "text-color-1",
  2: "text-color-2",
  3: "text-color-3",
  "color-1": "text-color-1",
  "color-2": "text-color-2",
  "color-3": "text-color-3",
  "highlight-1": "text-highlight-1",
  "highlight-2": "text-highlight-2",
};

export const TEXT_SIZES = {
  xxl: "text-size-xxl",
  xl: "text-size-xl",
  lg: "text-size-lg",
  md: "text-size-md",
  sm: "text-size-sm",
  xs: "text-size-xs",
  xxs: "text-size-xxs",
};

export const TEXT_ALIGNMENTS = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function resolveColorClass(color) {
  if (color == null) {
    return "";
  }

  const mappedColor = TEXT_COLORS[color];

  if (mappedColor) {
    return mappedColor;
  }

  return color;
}
