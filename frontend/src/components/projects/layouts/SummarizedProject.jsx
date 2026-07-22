import ImageCarousel from "../components/AutoplayImageCarousel";
import ProjectLinks from "../components/ProjectLinks";
import Tech from "../../ui/Tech";
import Text from "../../atomics/Text";

export function SummarizedProject ({
  mainImg,
  name,
  description,
  images = [],
  stack = [],
  links = {},
}) {
  const hasStack = stack && stack.length > 0;

  return (
        <div className="project-box column center brief">

          <ImageCarousel mainImg={mainImg} images={images} />

          <div className="card-description gap5">
              {/* Title & Description */}
              <Text size="xs" color="color-2">{name}</Text>
              <Text size="xxs" color="highlight-2">{description}</Text>

              {/* Stack */}
              <div className="full-w row-left gap30 align">
                {hasStack && (
                  <div className="project-stack row">
                    {stack.map((tech) => (
                      <Tech key={tech.name} tech={tech} size="lg" />
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
