import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from "react";

export function RevealStagger({
  children,
  threshold = 0,
  className = "",
  initialState = false,
  once = true,
  as: Tag = "div",
  stagger = 120,      // ms entre cada elemento
  baseDelay = 0,      // delay inicial
  ...rest
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(initialState);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else {
            if (!once) setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const kids = Children.toArray(children);

  return (
    <Tag
      ref={ref}
      className={`reveal-stagger ${isVisible ? "visible" : ""} ${className}`}
      {...rest}
    >
      {kids.map((child, i) => {
        // Si no es elemento (texto), lo devolvemos igual
        if (!isValidElement(child)) return child;

        const existingStyle = child.props.style || {};
        const delay = baseDelay + i * stagger;

        return cloneElement(child, {
          style: {
            ...existingStyle,
            transitionDelay: `${delay}ms`,
          },
        });
      })}
    </Tag>
  );
}

export default RevealStagger;
