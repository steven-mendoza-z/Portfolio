import Reveal from "../components/anims/Reveal";
import Text from "../components/atomics/Text";
import { self } from "../data/self";
import renderHighlightedText from "../helpers/RenderHighlightedText";

export function About() {
  return (
    <section id="about" className="section about">
      <Text as="h2" size="md" color="color-2" className="text-shadow">About Me</Text>

      <Reveal className="description">
        {self.aboutMe.map((aboutme, index) => (
          <Text key={index} size="md" color="highlight-2" adaptative>
            {renderHighlightedText(aboutme)}
          </Text>
        ))}
      </Reveal>
    </section>
  );
}

export default About;

