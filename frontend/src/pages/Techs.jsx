import { Tech } from "../components/ui/Tech";
import Reveal from "../components/anims/Reveal";
import Text from "../components/atomics/Text";
import { techs } from "../data/techs";

export function Techs() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <section id="techs" className="section techs">
      <Text as="h2" size="md" color="color-2" className="text-shadow">Technologies</Text>

      <div className="stacks">
        {techs.map((stack) => (
          <Reveal key={stack.category}>
            <div className="stack-container">
              <div className="stack-header row gap10">
                <Text size="sm" color="highlight-2" adaptative>{stack.category}</Text>
                <span className="stick"></span>
              </div>
              <div className="stack">
                {stack.items.map((tech) => (
                  <Tech
                    key={tech.name}
                    tech={tech}
                    size={isMobile ? "lg" : "xl"}
                    showName={true}
                    showDetails={true}
                  />
                ))}
              </div>

              </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Techs;
