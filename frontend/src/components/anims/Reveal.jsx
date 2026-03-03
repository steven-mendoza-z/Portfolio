import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  threshold = 0,
  className = "",
  initialState = false,
  once = true,
  initDelay = 0, 
  as: Tag = "div",
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

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
      style={{
        transitionDelay: `${initDelay}ms`
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
