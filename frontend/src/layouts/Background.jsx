import { lazy, Suspense, useEffect, useState } from "react";

const BackgroundParticles = lazy(() => import("../components/anims/BackgroundParticles"));

export function Background() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let timeoutId;
    let idleId;

    const loadParticles = () => setShowParticles(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadParticles, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(loadParticles, 600);
    }

    return () => {
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="bg-image"/>
      {showParticles && (
        <Suspense fallback={null}>
          <BackgroundParticles/>
        </Suspense>
      )}
    </>
  );
}
export default Background;
