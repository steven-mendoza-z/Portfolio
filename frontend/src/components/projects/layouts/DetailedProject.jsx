import { useEffect, useRef, useState, lazy, Suspense } from "react";
import DetailedProjectMobile from "./DetailedProjectMobile";

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

  const [showDetails, setShowDetails] = useState(false);
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

    if (!isDesktop) {
      setShowDetails(false);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShowDetails(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (!prefetchedRef.current && entry.isIntersecting) {
          prefetchedRef.current = true;
          import("./DetailedProjectDesktop");
        }

        if (ratio >= 0.2) {
          setShowDetails(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "450px 0px", threshold: [0, 0.2] }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [isDesktop]);

  const mobileSummary = (
    <DetailedProjectMobile
      mainImage={mainImage}
      title={title}
      subtitle={subtitle}
      description={description}
      links={links}
    />
  );

  return (
    <div ref={cardRef} className={`project-lazy-shell full-w flex center ${isDesktop ? "desktop" : "mobile"}`}>
      {isDesktop ? (
        showDetails ? (
          <Suspense fallback={null}>
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
        ) : null
      ) : (
        mobileSummary
      )}
    </div>
  );
}
