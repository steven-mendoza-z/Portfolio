import ExperienceItem from "../components/experience/ExperienceItem";
import Text from "../components/atomics/Text";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <Text as="h2" size="md" color="color-2" className="text-shadow">Experience</Text>

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
