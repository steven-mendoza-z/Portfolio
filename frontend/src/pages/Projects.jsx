import SummarizedProject from "../components/projects/layouts/SummarizedProject";
import DetailedProject from "../components/projects/layouts/DetailedProject";
import { projects } from "../data/projects";

export function Projects() {
  const detailedProjects = projects.filter(p => p.type === "full");
  const summarizedProjects = projects.filter(p => p.type === "brief");

  return (
    <section id="systems" className="section projects">
      <h2 className="h4 text-hl2 text-shadow">Systems I’ve Built</h2>

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
