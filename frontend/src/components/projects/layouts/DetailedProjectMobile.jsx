import { memo } from "react";
import { motion } from "framer-motion";
import Text from "../../atomics/Text";
import ProjectLinks from "../components/ProjectLinks";

function DetailedProjectMobile({ mainImage, title, subtitle, description, links, priority = false }) {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
      <div className="card detailed-project mobile">
        <img
          className="card-img"
          src={`projects/${mainImage}`}
          alt={title}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width="640"
          height="360"
        />

        <div className="card-description gap20">
          <div className="card-text column-left gap5">
            <div className="column-left">
              <Text as="h3" size="md" color="highlight-1">{title}</Text>
              <Text size="sm" color="color-2" semibold>{subtitle}</Text>
            </div>
            <Text size="xs" color="highlight-2">{description}</Text>
          </div>

          <ProjectLinks links={links} />
        </div>
      </div>
    </motion.div>
  );
}

export default memo(DetailedProjectMobile);
