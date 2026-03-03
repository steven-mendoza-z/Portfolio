import { useEffect, useRef, useState, lazy, Suspense } from "react";
import DetailedProjectMobile from "./DetailedProjectMobile";
import Reveal from "../../anims/Reveal";

const DetailedProjectDesktop = lazy(() => import("./DetailedProjectDesktop"));

export default function Project({
  title,
  subtitle,
  description,

  mainImage,
  overviewImages,
  galleryImages,

  stack,
  problemAnalysis,

  architecture,
  keyDecisions,
  reliability,
  
  links,
  tags
}) {
  const cardRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(() =>
    window.matchMedia("(min-width: 1000px)").matches
  );

  // Render pesado solo cuando realmente se ve
  const [showDetails, setShowDetails] = useState(false);
  // Prefetch del chunk cuando está cerca (sin render aún)
  const prefetchedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1000px)");
    const onChange = (e) => setIsDesktop(e.matches);

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        // En mobile nunca mostramos details
        if (!isDesktop) {
          if (showDetails) setShowDetails(false);
          return;
        }

        // ✅ Prefetch cuando está cerca (20% visible)
        if (!prefetchedRef.current && ratio >= 0.2) {
          prefetchedRef.current = true;
          // ⚡ descarga el chunk antes de que lo necesites
          import("./DetailedProjectDesktop");
        }

        // ✅ Mostrar details cuando está muy visible
        if (ratio >= 0.8) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            setShowDetails((prev) => (prev ? prev : true));
          }, 150);
        }

        // ✅ Ocultar cuando casi no se ve
        if (ratio <= 0.1) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            setShowDetails((prev) => (prev ? false : prev));
          }, 200);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.8, 1] }
    );

    observer.observe(el);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  return (
    <div className="full-w flex center">
        {isDesktop ? (
            <Suspense fallback={<DetailedProjectMobile mainImage={mainImage} title={title} subtitle={subtitle} description={description} links={links} />}>
              <DetailedProjectDesktop
                title={title}
                subtitle={subtitle}
                description={description}

                mainImage={mainImage}
                overviewImages={overviewImages}
                galleryImages={galleryImages}

                problemAnalysis={problemAnalysis}
                architecture={architecture}
                keyDecisions={keyDecisions}
                reliability={reliability}

                stack={stack}
                links={links}
                tags={tags}
              />
            </Suspense>
  
        ) : (
          <DetailedProjectMobile mainImage={mainImage} title={title} subtitle={subtitle} description={description} links={links} />
        )}
    </div>
  );
}
