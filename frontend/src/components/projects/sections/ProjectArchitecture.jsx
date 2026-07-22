import { ManualCarousel } from "../../ui/ManualCarousel";
import Text from "../../atomics/Text";

export function ProjectArchitecture({ architecture = [] }) {
  if (!architecture.length) return null;

  return (
    <div className="project-overview row center gap30">
      <ManualCarousel
        items={architecture}
        renderItem={(item) => {
          const src = typeof item === "string" ? item : item.image;
          const title = typeof item === "string" ? "" : item.title;

          return (
            <div className="project-diagram column">
              <img
                src={src}
                alt={title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                draggable={false}
                className="card-img"
                loading="lazy"
                decoding="async"
              />
              {title && (
                <div className="diagram-header">
                  <Text size="md" color="highlight-1">{title}</Text>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
}

export default ProjectArchitecture;
