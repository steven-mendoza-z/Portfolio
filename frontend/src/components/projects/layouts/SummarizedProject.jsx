import { useState } from "react";
import { motion } from "framer-motion";
import ImageCarousel from "../components/AutoplayImageCarousel";
import ProjectLinks from "../components/ProjectLinks";

export function SummarizedProject ({
  mainImg,
  name,
  description,
  images = [],
  stack = [],
  problemAnalisis = null,
  architecture = null,
  links = {},
}) {
  const [section, setSection] = useState("summary");
  const selectSection = (next) => setSection(next);

  const hasStack = stack && stack.length > 0;
  
  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
        <div className="project-box column center brief">

          <ImageCarousel mainImg={mainImg} images={images} />

          <div className="card-description gap5">
              {/* Title & Description */}
              <p className="h5 text-hl2">{name}</p>
              <p className="t-body6 text-hl3">{description}</p>

              {/* Stack */}
              <div className="full-w row-left gap30 align">
                {hasStack && (
                  <div className="project-stack row">
                    {stack.map((tech) => (
                      <div key={tech.name}>
                        <img src={tech.img} alt={tech.name} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap10">
                <ProjectLinks links={links}/>

                </div>
            </div>
          </div>
      </div>
      )}

export default SummarizedProject ;
