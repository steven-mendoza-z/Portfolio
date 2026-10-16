import { motion } from "framer-motion";
import Tags from "../ui/Tags";
import Text from "../atomics/Text";
import renderHighlightedText from "../../helpers/RenderHighlightedText";

export function ExperienceItem({
  company,
  role,
  date,
  location,
  logo,
  logos = logo ? [{ src: logo, alt: company }] : [],
  logoBackground,
  description,
  bullets = [],
  techs = [],
  tags = [],
}) {
  const hasTags = tags.length > 0;

  return (
    <motion.div
      className="experience-item column gap15"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="experience-card card row gap30">
        {/* Logo */}
        {logos.length > 0 && (
          <div
            className="logo-container"
            style={{
              ...(logoBackground && { backgroundColor: logoBackground }),
            }}
          >
            {logos.map((item, index) => (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt ?? company}
                className="experience-logo"
                style={{
                  ...(item.size && { width: item.size, height: item.size }),
                  ...(item.radius !== undefined && { borderRadius: item.radius }),
                }}
              />
            ))}
          </div>
        )}

        {/* Body */}
        <div className="experience-content">
          <div className="column-left">
            <Text size="md" color="highlight-1" adaptative bold>{role}</Text>
            <Text size="md" color="color-2" bold>{company}</Text>
            <Text size="sm" color="highlight-2" adaptative semibold>{location} · {date}</Text>
          </div>

          <div className="experience-body">
            <div className="experience-desc column-left gap20">
              {/* Description */}
              {description && (
                <Text size="sm" color="highlight-2" adaptative>
                  {renderHighlightedText(description)}
                </Text>
              )}
              {/* Bullets */}
              {bullets.length > 0 && (
                <ul className="experience-bullets column-left gap5">
                  {bullets.map((item, idx) => (
                    <Text as="li" key={idx} size="xs" color="highlight-2">
                      {renderHighlightedText(item)}
                    </Text>
                  ))}
                </ul>
              )}
            
            </div>


            {hasTags && (
              <div className="experience-extras gap20">
                <Tags tags={tags}/>
              </div>
            )}
            


          </div>
        </div>
      </div>      
    </motion.div>
  );
}

export default ExperienceItem;
