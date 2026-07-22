import { useState } from "react";
import ProjectNav from "../components/ProjectNav";
import { ManualCarousel } from "../../ui/ManualCarousel";
import ProjectOverview from "../sections/ProjectOverview";
import Reveal from "../../anims/Reveal";
import Text from "../../atomics/Text";

export function DetailedProjectDesktop({
  mainImage,
  title,
  subtitle,
  description,
  
  overviewImages = [],
  galleryImages = [],

  stack = [],
  architecture = null,
  keyDecisions = null,
  reliability = null,
  links = {},
  tags = [],
}) {
  const [section, setSection] = useState("Overview");

  const nav = [
    "Overview",
    architecture ? "Architecture" : null,
    keyDecisions ? "Key decisions" : null,
    reliability ? "Reliability" : null,
    "Images"
  ].filter(Boolean);



  return (
    <Reveal
      className="full-w column center"
      key="card"
    >
      <div className="project-box full-w column center gap20">
        <div className="flex-center">
          <ProjectNav
            init={"Overview"}
            elements={nav}
            onSelect={setSection}
          />
        </div>

        <div className="project-section flex-center">
          {section === "Overview" && (
            <ProjectOverview
              mainImage={mainImage}
              title={title}
              subtitle={subtitle}
              description={description}
              images={overviewImages}
              stack={stack}
              links={links}
              tags={tags}
            />
          )}

          {section === "Architecture" && (
            <ManualCarousel
              items={architecture}
              renderItem={(arch) => (
                <div className="project-diagram column">
                  <img
                    key={arch.title}
                    src={arch.image}
                    alt={arch.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    draggable={false}
                    className="card-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="diagram-header">
                    <Text size="md" color="highlight-1">{arch.title}</Text>
                  </div>
                </div>
              )}
            />      
          )}

          {section === "Images" && (
            <ManualCarousel
              items={galleryImages}
              renderItem={(src) => (
                <img
                  key={src}
                  src={`projects/${src}`}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  draggable={false}
                  className="card-img"
                  loading="lazy"
                  decoding="async"
                />
              )}
            />      
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default DetailedProjectDesktop;
