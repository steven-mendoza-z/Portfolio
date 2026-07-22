import { useState, useEffect, useRef, Children, cloneElement } from "react";

export function Grid({
  children,
  minColumnWidth = 150,
  maxColumns,
  gap = 10,
  padding = 10,
  className = "",
  staggerMs = 50,
  maxStaggerMs = 1000,
  animateOnView = false,
  threshold = 0.1,
}) {
  const containerRef = useRef(null);

  // null means the container has not been measured yet, so we keep items hidden.
  const [columns, setColumns] = useState(null);
  const [isVisible, setIsVisible] = useState(!animateOnView);

  useEffect(() => {
    const updateColumns = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      let cols = Math.floor((containerWidth + gap) / (minColumnWidth + gap));
      if (maxColumns) cols = Math.min(cols, maxColumns);
      cols = Math.max(cols, 1);

      setColumns(cols);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [minColumnWidth, maxColumns, gap]);

  useEffect(() => {
    const el = containerRef.current;
    if (!animateOnView || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animateOnView, threshold, columns]);

  const style = {
    gridTemplateColumns: `repeat(${columns ?? 1}, 1fr)`,
    gap: `${gap}px`,
    padding: `${padding}px`,
  };

  return (
    <div
      ref={containerRef}
      className={`grid ${isVisible ? "visible" : ""} ${className}`.trim()}
      style={style}
    >
      {columns == null
        ? null
        : Children.map(children, (child, index) => {
            if (!child) return null;

            const col = index % columns;
            const row = Math.floor(index / columns);
            const diag = row + col;

            const rawDelay = diag * staggerMs;
            const delay = Math.min(rawDelay, maxStaggerMs);

            const childStyle = child.props?.style || {};

            return cloneElement(child, {
              "data-grid-index": index,
              "data-grid-columns": columns,
              style: {
                ...childStyle,
                "--motion-delay": `${delay}ms`,
              },
            });
          })}
    </div>
  );
}

export default Grid;
