import { Tech } from "../components/ui/Tech";
import Reveal from "../components/anims/Reveal";
import { techs } from "../data/techs";

export function Techs() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <section id="techs" className="section techs">
      <h2 className="h4 text-hl2 text-shadow" >Technologies</h2>

      <div className="stacks">
        {techs.map((stack) => (
          <Reveal key={stack.category}>
            <div className="stack-container">
              <div className="stack-header row gap10">
                <p className="t-body3 text-hl3">{stack.category}</p>
                <span className="stick"></span>
              </div>
              <div className="stack">
                {stack.items.map((tech) => (
                  <Tech
                    key={tech.name}
                    tech={tech}
                    size={isMobile ? 25 : 35}
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
