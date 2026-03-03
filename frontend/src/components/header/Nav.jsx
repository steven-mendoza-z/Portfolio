import { useEffect, useState } from "react";
import Reveal from "../anims/Reveal";

const SECTIONS = ["hero", "experience", "systems", "about", "techs"];

export function Nav() {
  const [active, setActive] = useState("hero");

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = window.scrollY + el.getBoundingClientRect().top;
    smoothScrollTo(y, 200);

    window.history.replaceState(null, "", `#${id}`);
  };


  function smoothScrollTo(targetY, duration = 250) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    const start = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      window.scrollTo(0, startY + diff * easeOutCubic(t));
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  useEffect(() => {
    const els = SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    let ticking = false;

    const setActiveFromCenter = () => {
      const centerY = window.innerHeight / 2;

      // 1) If theres a section on the screen center, select it.
      let current = els.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= centerY && r.bottom >= centerY;
      });

      // 2) Else: closest section
      if (!current) {
        current = els
          .map((el) => {
            const r = el.getBoundingClientRect();
            const elCenter = (r.top + r.bottom) / 2;
            return { el, dist: Math.abs(elCenter - centerY) };
          })
          .sort((a, b) => a.dist - b.dist)[0]?.el;
      }

      if (current?.id) setActive(current.id);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setActiveFromCenter();
        ticking = false;
      });
    };

    setActiveFromCenter();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Reveal className="nav" as="nav" data-active={active} aria-label="Section navigation">

      <a
        href="#hero"
        aria-label="Hero section"
        className={`row gap10 tooltip ${active === "hero" ? "selected" : ""}`}
        data-tooltip="Home"
        onClick={(e) => {
          e.preventDefault();
          handleClick("hero");
        }}
      >
        <img src="icons/home.svg" alt="hero" aria-hidden="true" />
      </a>

      <a
        href="#experience"
        aria-label="Experience"
        className={`row gap10 tooltip ${active === "experience" ? "selected" : ""}`}
        data-tooltip="Experience"
        onClick={(e) => {
          e.preventDefault();
          handleClick("experience");
        }}
      >
        <img src="icons/experience.svg" alt="experience" aria-hidden="true" />
      </a>

      <a
        href="#systems"
        aria-label="Systems"
        className={`row gap10 tooltip ${active === "systems" ? "selected" : ""}`}
        data-tooltip="Systems"
        onClick={(e) => {
          e.preventDefault();
          handleClick("systems");
        }}
      >
        <img src="icons/architecture.svg" alt="projects" aria-hidden="true" />
      </a>

      <a
        href="#about"
        aria-label="About"
        className={`row gap10 tooltip ${active === "about" ? "selected" : ""}`}
        data-tooltip="About me"
        onClick={(e) => {
          e.preventDefault();
          handleClick("about");
        }}
      >
        <img src="icons/aboutme.svg" alt="about" aria-hidden="true" />
      </a>

      <a
        href="#techs"
        aria-label="Techs"
        className={`row gap10 tooltip ${active === "techs" ? "selected" : ""}`}
        data-tooltip="Technologies"
        onClick={(e) => {
          e.preventDefault();
          handleClick("techs");
        }}
      >
        <img src="icons/techs.svg" alt="techs" aria-hidden="true" />
      </a>
    </Reveal>
  );
}

export default Nav;
