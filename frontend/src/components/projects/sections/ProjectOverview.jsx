import Tags from "../../ui/Tags";
import Tech from "../../ui/Tech";
import AutoplayImageCarousel from "../components/AutoplayImageCarousel";
import ProjectLinks from "../components/ProjectLinks";

export function ProjectOverview({
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
  
  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-overview row center gap30">
        <div className="project-description column-left gap20">
            {/* Title & Description */}
            <div className="column-left full-w gap10">
                <div className="column-left full-w row gap20">
                    <div className="column-left">
                        <h3 className="h3 text-hl4">{title}</h3>
                        <p className="h4 text-hl">{subtitle}</p>
                    </div>                
                </div>
                <p className="t-body3 text-hl3">{description}</p>
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
                        <Tech key={tech.name} tech={tech} size={20}/>
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

export default ProjectOverview;
