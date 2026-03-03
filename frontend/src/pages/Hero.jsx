import { useState } from "react";
import { self } from "../data/self";
import { socials } from "../data/socials";
import renderHighlightedText from "../helpers/RenderHighlightedText";
import RevealStagger from "../components/anims/RevealStagger";
import Reveal from "../components/anims/Reveal";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="hero" className="flex section hero">
      <Reveal initDelay={40}>
        <img
          src={self.image}
          alt="Steven Mendoza portrait"
          className={`profile-img ${loaded ? "visible" : ""}`}
          onLoad={() => setLoaded(true)}
        />
      </Reveal>
      

      <RevealStagger
        className="hero-content column"
        as="div"
        stagger={80}
        baseDelay={80}
        threshold={0}
      >
        <div className="hero-header column">
          <h1 className="h1 text-hl2">{self.name}</h1>

          <h2 className="hero-subtitle">
            {self.title.map((line) => (
              <span key={line} className="h2">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <p className="hero-desc t-body4 text-hl3">
          {renderHighlightedText(self.description, "keywords")}
        </p>

        <div className="full-w gap30 row center hero-socials">
          {socials.map((social) => (
            <a
              href={social.url}
              className="social"
              key={social.name}
              rel="noopener noreferrer"
            >
              <img src={`socials/${social.img}`} alt={social.name} className="icon-inverter" />
            </a>
          ))}
        </div>
      </RevealStagger>
    </section>
  );
}
export default Hero;
