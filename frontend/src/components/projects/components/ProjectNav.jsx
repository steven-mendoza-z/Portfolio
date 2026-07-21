import { useState } from "react";

export function ProjectNav({ elements = [], onSelect, init = null }) {
  const [active, setActive] = useState(init);

  const handleClick = (name) => {
    setActive(name);
    onSelect?.(name);
  };

  return (
    <nav className="project-nav" aria-label="Project navigation">
      {elements.map((element) => (
        <button
          key={element}
          aria-label={element}
          className={`row gap10 ${active === element ? "selected" : ""}`}
          data-tooltip={element}
          onClick={() => handleClick(element)}
        >
          <p className="t-body5">{element}</p>
        </button>
      ))}
    </nav>
  );
}

export default ProjectNav;
