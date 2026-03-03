import { useEffect, useRef, useState } from "react";

export function ResumeButtonDesktop() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [locked, setLocked] = useState(false);

  const containerRef = useRef(null);

  // Hover behavior (only if NOT locked)
  const handleMouseEnter = () => {
    if (!locked) setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    if (!locked) setMenuVisible(false);
  };

  // Arrow click → toggle lock
  const handleArrowClick = (e) => {
    e.stopPropagation(); // 🔑 evita que el click global lo cierre inmediatamente

    if (locked) {
      setLocked(false);
      setMenuVisible(false);
    } else {
      setLocked(true);
      setMenuVisible(true);
    }
  };

  // Any click closes if locked
  useEffect(() => {
    const handleAnyClick = () => {
      if (locked) {
        setMenuVisible(false);
        setLocked(false);
      }
    };

    document.addEventListener("click", handleAnyClick);
    return () => document.removeEventListener("click", handleAnyClick);
  }, [locked]);

  return (
    <div
      className="download-cv"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main action */}
      <a
        href="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()} // evita cerrar antes de navegar
      >
        <div className="row gap10">
          <p className="t-body5">Resume</p>
          <img src="icons/redirect.svg" alt="Open resume" />
        </div>
      </a>

      {/* Arrow */}
      <div className="arrow" onClick={handleArrowClick}>
        <img src="icons/down-arrow.svg" alt="View options" />
      </div>

      {/* Menu */}
        <div className={`floating-menu ${menuVisible ? "open" : ""}`}>
          <ul>
            <li>
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <p>View Resume</p>
                <img src="icons/redirect.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="Steven_Mendoza_Backend_Engineer.pdf" download onClick={(e) => e.stopPropagation()}>
                <p>Download Resume</p>
                <img src="icons/download.svg" alt="" className="download" />
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default ResumeButtonDesktop;
