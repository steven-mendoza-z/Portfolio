import { motion } from "framer-motion";
import Techs from "../../pages/Techs";
import Tech from "../ui/Tech";
import Tag from "../ui/Tag";
import Tags from "../ui/Tags";
import renderHighlightedText from "../../helpers/RenderHighlightedText";

export function ExperienceItem({
  company,
  role,
  date,
  location,
  logo,
  description,
  bullets = [],
  techs = [],
  tags = [],
}) {
  const hasStack = techs.length > 0;
  const hasTags = tags.length > 0;

  return (
    <motion.div
      className="experience-item column gap15"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="experience-card card row gap30">
        {logo && (
          <div className="logo-container">
            <img
              src={logo}
              alt={company}
              className="experience-logo"
            />
          </div>
        )}

        <div className="experience-content">
          <div className="experience-header column-left">
            <p className="h2 text-hl4">{role}</p>
            <p className="h4 text-hl2">{company}</p>
            <p className="t-body3 text-hl3">
              {location} · {date}
            </p>
          </div>

          <div className="experience-body">
            <div className="experience-desc column-left gap20">
              {/* Description */}
              {description && (
                <p className="t-body4 text-hl3">
                  {renderHighlightedText(description, "keywords")}
                </p>
              )}
                {/* Bullets */}
              {bullets.length > 0 && (
                <ul className="experience-bullets column-left gap5">
                  {bullets.map((item, idx) => (
                    <li key={idx} className="t-body5 text-hl3">
                      {renderHighlightedText(item, "keywords")}
                    </li>
                  ))}
                </ul>
              )}
            
            </div>


            {hasStack && hasTags && 
            <div className="experience-extras gap20">
              {hasStack && (
                <div className="project-stack gap20 row">
                  {techs.map((tech) => (
                    <Tech key={tech.name ?? tech.id ?? JSON.stringify(tech)} tech={tech} size={25} />
                  ))}
                </div>
              )}

              {hasTags && (
                <Tags tags={tags}/>
              )}
            </div>}
            


          </div>
        </div>
      </div>      
    </motion.div>
  );
}

export default ExperienceItem;
