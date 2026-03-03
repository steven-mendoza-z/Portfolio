import React, { useState } from "react";

export function ProjectNav({ elements = [], onSelect, init = null }) {
  const [active, setActive] = useState(init);
  const [highlightPosition, setHighlightPosition] = useState(0);

  const handleClick = (name, index) => {
    setActive(name);
    setHighlightPosition(index);
    onSelect?.(name);
  };

  return (
    <nav className="project-nav" aria-label="Project navigation">
      {elements.map((element, index) => (
        <button
          key={element}
          aria-label={element}
          className={`row gap10 ${active === element ? "selected" : ""}`}
          data-tooltip={element}
          onClick={() => handleClick(element, index)}
        >
          <p className="t-body5">{element}</p>
        </button>
      ))}
    </nav>
  );
}

export default ProjectNav;
