// src/motion/index.js

export const motion = {
  // Duraciones (segundos para librerías tipo Framer; para CSS te doy helper abajo)
  duration: {
    veryFast: 0.10,
    fast: 0.20,
    normal: 0.30,
    slow: 0.40,
    verySlow: 0.50,
  },

  // Easing (cubic-bezier) para movimientos naturales
  ease: {
    // estándar asimétrico tipo Material (muy buen default para UI)
    standard: [0.2, 0.0, 0.0, 1.0],
    // aparece: deceleration (ease-out)
    enter: [0.0, 0.0, 0.2, 1.0],
    // sale: acceleration (ease-in)
    exit: [0.4, 0.0, 1.0, 1.0],
    // para opacity/color, si quieres
    linear: [0, 0, 1, 1],
  },

  stagger: {
    // 20–25ms por ítem (en segundos)
    list: 0.025,
  },

  /**
   * Helpers para transiciones (pensado para Framer Motion y uso general)
   */
  transition: {
    // Para "aparecer": deceleration
    enter: (overrides = {}) => ({
      duration: motion.duration.normal,
      ease: motion.ease.enter,
      ...overrides,
    }),

    // Para "mover/cambiar layout": estándar
    move: (overrides = {}) => ({
      duration: motion.duration.normal,
      ease: motion.ease.standard,
      ...overrides,
    }),

    // Para "salir": estándar o exit
    exit: (overrides = {}) => ({
      duration: motion.duration.fast,
      ease: motion.ease.standard,
      ...overrides,
    }),
  },

    appear: {
    row: {
      from: { opacity: 0, y: 6 },
      to: { opacity: 1, y: 0 },
      duration: "normal",
      ease: "enter",
      stagger: "list",
    },
  },

  /**
   * Helper para CSS transition string.
   * Ej: motion.css.transition({ props: ["transform","opacity"], dur:"fast", ease:"standard" })
   */
  css: {
    ms: (dur) => {
      const map = motion.duration;
      const s = typeof dur === "number" ? dur : (map[dur] ?? map.normal);
      return `${Math.round(s * 1000)}ms`;
    },

    bezier: (easeName) => {
      const e = motion.ease[easeName] ?? motion.ease.standard;
      return `cubic-bezier(${e.join(",")})`;
    },

    transition: ({
      props = ["transform"],
      dur = "fast",
      ease = "standard",
      delay = 0,
    } = {}) => {
      const d = motion.css.ms(dur);
      const ez = motion.css.bezier(ease);
      const dl = typeof delay === "number" ? `${delay}ms` : delay;
      return props.map((p) => `${p} ${d} ${ez} ${dl}`).join(", ");
    },
  },
};
