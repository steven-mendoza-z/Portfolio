import SummarizedProject from "../components/projects/layouts/SummarizedProject";
import DetailedProject from "../components/projects/layouts/DetailedProject";
import Text from "../components/atomics/Text";
import { projects } from "../data/projects";

export function Projects() {
  const detailedProjects = projects.filter(p => p.type === "full");
  const summarizedProjects = projects.filter(p => p.type === "brief");

  return (
    <section id="systems" className="section projects">
      <Text as="h2" size="md" color="color-2" className="text-shadow">Systems I’ve Built</Text>

      {detailedProjects.length > 0 && (
        <div className="full-projects">
          {detailedProjects.map(project => (
            <DetailedProject key={project.title} {...project} />
          ))}
        </div>
      )}

      {summarizedProjects.length > 0 && (
        <div className="full-w row center">
          {summarizedProjects.map(project => (
            <SummarizedProject key={project.title} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
