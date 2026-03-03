import Tech from "../../ui/Tech";
import ImageCarousel from "../components/ImageCarousel";

export function ProjectArchitecture({architecture}) {
    
  const hasStack = stack && stack.length > 0;
  const hasTags = stack && tags.length > 0;
  
  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-overview row center gap30">
        <Carrousel
            items={architecture}
            renderItem={(src) => (
                <img
                key={title}
                src={src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                draggable={false}
                className="card-img"
                />
            )}
        />     
    </div>
  )};

export default ProjectArchitecture;
