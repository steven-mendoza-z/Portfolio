import Icon from "../../atomics/Icon";
import Text from "../../atomics/Text";
import RowWrapper from "../../ui/RowWrapper";

export function ProjectLinks({links}) {
  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    links && 
    <RowWrapper>
      {Object.entries(links).map(([type, url]) => (
          <button
              key={type}
              type="button"
              className="project-link tooltip-left"
              onClick={() => openLink(url)}
              title={url}
              target="_blank"
              rel="noopener noreferrer"
          >
              <Text size="xxs" semibold>{type}</Text>
              <Icon src="icons/redirect.svg" alt="Open project link" size="md" />
          </button>
      ))}
    </RowWrapper>
  );
}
export default ProjectLinks;
