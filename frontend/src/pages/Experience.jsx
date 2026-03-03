import ExperienceItem from "../components/experience/ExperienceItem";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2 className="h4 text-hl2 text-shadow">Experience</h2>

      <div className="column gap40">
        {experience.map((item) => (
          <ExperienceItem
            key={item.company}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
