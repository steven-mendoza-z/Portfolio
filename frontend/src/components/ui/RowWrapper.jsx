export function RowWrapper({ children, gap = 10, className = "" }) {
  return (
    <div
      className={`row-wrapper ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
}

export default RowWrapper;
