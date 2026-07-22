import { self } from "../data/self";
import { socials } from "../data/socials";
import renderHighlightedText from "../helpers/RenderHighlightedText";
import RevealStagger from "../components/anims/RevealStagger";
import Reveal from "../components/anims/Reveal";
import Icon from "../components/atomics/Icon";
import Text from "../components/atomics/Text";

export function Hero() {
  return (
    <section id="hero" className="flex section hero">
      <Reveal initDelay={40}>
        <img
          src={self.image}
          alt="Steven Mendoza portrait"
          className="profile-img"
          width="280"
          height="280"
          loading="eager"
          decoding="async"
          fetchPriority="high"
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
          <Text as="h1" size="xxl" color="color-2" adaptative>{self.name}</Text>

          <Text as="h2" className="hero-subtitle">
            {self.title.map((line, index) => (
              <Text
                as="span"
                key={line}
                size={index === 0 ? "xl" : "md"}
                color={index === 0 ? "highlight-1" : undefined}
                adaptative
              >
                {line}
              </Text>
            ))}
          </Text>
        </div>

        <Text className="hero-desc" size="sm" color="highlight-2" adaptative>
          {renderHighlightedText(self.description)}
        </Text>

        <div className="full-w gap30 row center hero-socials">
          {socials.map((social) => (
            <a
              href={social.url}
              className="social"
              key={social.name}
              rel="noopener noreferrer"
            >
              <Icon src={`socials/${social.img}`} alt={social.name} size="xl" className="icon-inverter" />
            </a>
          ))}
        </div>
      </RevealStagger>
    </section>
  );
}
export default Hero;
