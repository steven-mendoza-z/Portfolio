import { useEffect, useRef, useState } from "react";
import { socials } from "../data/socials";
import { self } from "../data/self";

export function Footer() {
  const [tip, setTip] = useState("Copy");
  const [tipOpen, setTipOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  async function copyEmail() {
    // limpia timer anterior si spamean clicks
    if (timerRef.current) clearTimeout(timerRef.current);

    const text = self.email;

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // fallback (por si el clipboard API falla)
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    setTip("Copied!");
    setTipOpen(true);

    timerRef.current = setTimeout(() => {
      setTipOpen(false);
      setTip("Copy");
    }, 1500);
  }

  return (
    <footer id="socials" className="column gap20">
      <div className="flex-center column gap10">
        <div className="full-w gap20 row center presentation-socials">
          {socials.map((social) => (
            <a
              href={social.url}
              className="social"
              key={social.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={`socials/${social.img}`}
                alt={social.name}
                className="icon-inverter"
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          className={`email row gap5 tooltip ${tipOpen ? "tooltip-open" : ""}`}
          aria-label="Copy email"
          data-tooltip={tip}
          onClick={copyEmail}
        >
          <p className="h5 text-sec">{self.email}</p>
        </button>
      </div>

      <div className="column center">
        <p className="h7">{self.footer}</p>
      </div>
    </footer>
  );
}
export default Footer;
