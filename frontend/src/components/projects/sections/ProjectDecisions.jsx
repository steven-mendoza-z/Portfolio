import Tags from "../../ui/Tags";
import Tech from "../../ui/Tech";
import AutoplayImageCarousel from "../components/AutoplayImageCarousel";
import ProjectLinks from "../components/ProjectLinks";
import Text from "../../atomics/Text";

export function ProjectDecisions({
  mainImage,
  title,
  subtitle,
  description,
  images = [],
  stack = [],
  links = {},
  tags = [],
}) {
    
  const hasStack = stack && stack.length > 0;
  const hasTags = stack && tags.length > 0;
  
  return (
    <div className="project-overview row center gap30">
        <div className="project-description column-left gap20">
            {/* Title & Description */}
            <div className="column-left full-w gap10">
                <div className="column-left full-w row gap20">
                    <div className="column-left">
                        <Text as="h3" size="lg" color="highlight-1" adaptative>{title}</Text>
                        <Text size="md" color="color-1">{subtitle}</Text>
                    </div>                
                </div>
                <Text size="sm" color="highlight-2" adaptative>{description}</Text>
            </div>

            <div className="full-w column-left gap10">
                {/* Tags */}
                {hasTags && (
                    <Tags tags={tags}/>
                )}

                {/* Stack */}
                {hasStack && (
                    <div className="project-stack row">
                    {stack.map((tech) => (
                        <Tech key={tech.name} tech={tech} size="lg"/>
                    ))}
                    </div>
                )}
            </div>

            {/* Links */}
            <ProjectLinks links={links}/>
        </div>

        <AutoplayImageCarousel
            mainImg={mainImage}
            images={images}
        />
    </div>
  )};

export default ProjectDecisions;
