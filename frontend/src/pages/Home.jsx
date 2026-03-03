import { lazy, Suspense } from "react";


import Hero from "./Hero";
import Experience from "./Experience";
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const Techs = lazy(() => import("./Techs"));


export default function Home() {
  return (
    <>

      <div className="sections column">
        <Suspense fallback={null}>
          <Hero/>
        </Suspense>

        <Suspense fallback={null}>
          <Experience/>
        </Suspense>

        <Suspense fallback={null}>
          <Projects />
        </Suspense>

        <Suspense fallback={null}>
          <About />
        </Suspense>

        <Suspense fallback={null}>
          <Techs />
        </Suspense>
      </div>

    </>
  );
}
