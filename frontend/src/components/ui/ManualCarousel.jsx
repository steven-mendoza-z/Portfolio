// ManualCarousel.jsx
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion as fm, useReducedMotion } from "framer-motion";
import { motion as sysMotion } from "../../motion/index";

/**
 * ManualCarousel (1 motion element por item)
 * - Renderiza N items y solo 3 quedan visibles (left/center/right)
 * - Los demás quedan hidden (opacity 0 + pointerEvents none)
 * - “Peek” en laterales: wrapper recorta a peekPx y muestra el borde interno
 */
export function ManualCarousel({
  items = [],
  renderItem,
  initialIndex = 0,
  className = "",
  peekPx = 250,
  gapPx = 0,
  maxFullPx = 900,
  fullRatio = 0.6,
  offsetTrimPx = 50, // tu ajuste "-50" limpio como prop
}) {
  const size = items.length;
  const reduce = useReducedMotion();

  const mod = (n) => ((n % size) + size) % size;

  // Offset circular "más corto" desde active -> index (negativo/positivo)
  const relOffset = (index, activeIndex) => {
    const a = mod(activeIndex);
    const d = mod(index - a); // 0..size-1
    const alt = d - size;     // negativo
    return Math.abs(alt) < Math.abs(d) ? alt : d;
  };

  const [active, setActive] = useState(() => (size ? mod(initialIndex) : 0));
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const stageRef = useRef(null);
  const [stageW, setStageW] = useState(0);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      setStageW(entries?.[0]?.contentRect?.width ?? 0);
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const fullW = useMemo(() => {
    if (!stageW) return Math.min(800, maxFullPx);
    return Math.min(stageW * fullRatio, maxFullPx);
  }, [stageW, fullRatio, maxFullPx]);

  const xOffset = useMemo(() => {
    // (full/2 + gap + peek/2) con tu trim
    return fullW / 2 + gapPx + peekPx / 2 - offsetTrimPx;
  }, [fullW, gapPx, peekPx, offsetTrimPx]);

  const go = (dir) => {
    if (!size) return;
    const next = mod(activeRef.current + dir);
    activeRef.current = next;
    setActive(next);
  };

  const transition = useMemo(() => {
    if (reduce) return { duration: 0 };
    return sysMotion.transition.move({ duration: sysMotion.duration.fast });
  }, [reduce]);

  if (!size) return null;

  return (
    <div className={`carouselN ${className}`} style={{ "--peek": `${peekPx}px` }}>
      <div className="carouselN__stage" ref={stageRef}>
        {items.map((item, i) => {
          const o = relOffset(i, active);
          const slot = o === 0 ? "center" : o === -1 ? "left" : o === 1 ? "right" : "hidden";

          const pose = poseFor(slot, { fullW, peekPx, xOffset });
          const key = item?.id ?? i;

          return (
            <fm.div
              key={key}
              className="carouselN__item"
              initial={false}
              animate={toMotion(pose)}
              transition={transition}
            >
              {slot !== "hidden" && (
                <button
                  type="button"
                  className={`carouselN__hit ${slot === "left" ? "border-left" : ""} ${
                    slot === "right" ? "border-right" : ""
                  }`}
                  onClick={() => {
                    if (slot === "left") go(-1);
                    if (slot === "right") go(1);
                  }}
                  aria-label={slot === "left" ? "Prev" : slot === "right" ? "Next" : "Selected"}
                />
              )}

              <div
                className={`carouselN__clip ${slot === "left" ? "is-left" : ""} ${
                  slot === "right" ? "is-right" : ""
                }`}
                style={{ width: pose.width, height: pose.height }}
              >
                <div className="carouselN__card">{renderItem(item, i)}</div>
              </div>
            </fm.div>
          );
        })}
      </div>

      <div className="carouselN__dots">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carouselN__dot ${mod(active) === i ? "is-active" : ""}`}
            onClick={() => setActive(mod(i))}
            aria-label={`Move to ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/** Poses por slot */
function poseFor(slot, { peekPx, xOffset }) {
  const height = "29vw";

  if (slot === "center") {
    return {
      x: 0,
      y: 0,
      width: "auto", // lo dejaste así porque te funciona con tu contenido
      height,
      opacity: 1,
      scale: 1,
      blur: 0,
      zIndex: 3,
      radius: 14,
      pointer: "auto",
    };
  }

  if (slot === "left" || slot === "right") {
    return {
      x: slot === "left" ? -xOffset : xOffset,
      y: 2,
      width: peekPx,
      height,
      opacity: 0.35,
      scale: 0.985,
      blur: 1,
      zIndex: 2,
      radius: 10,
      pointer: "auto",
    };
  }

  return {
    x: 0,
    y: 8,
    width: 1,
    height,
    opacity: 0,
    scale: 0.98,
    blur: 2,
    zIndex: 0,
    radius: 22,
    pointer: "none",
  };
}

function toMotion(p) {
  return {
    x: p.x,
    y: p.y,
    width: p.width,
    height: p.height,
    opacity: p.opacity,
    scale: p.scale,
    zIndex: p.zIndex,
    borderRadius: p.radius,
    filter: `blur(${p.blur}px)`,
    pointerEvents: p.pointer,
  };
}
