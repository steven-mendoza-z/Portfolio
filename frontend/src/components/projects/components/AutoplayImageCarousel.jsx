import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AutoplayImageCarousel({ mainImg, images }) {
  const slides = images.length > 0 ? images : mainImg ? [mainImg] : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [bounce, setBounce] = useState(false);
  const hasCarousel = slides.length > 1;

  useEffect(() => {
    if (!hasCarousel) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setBounce(true);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [hasCarousel, slides.length]);

  useEffect(() => {
    if (!bounce) return;

    timeoutRef.current = setTimeout(() => setBounce(false), 400);
    return () => clearTimeout(timeoutRef.current);
  }, [bounce]);

  if (!slides.length) return null;

  return (
    <>
      {!hasCarousel ? (
          <div className="image-carousel">
            <img className="card-img" src={`projects/${slides[0]}`} alt="" loading="lazy" decoding="async" />
          </div>
        ) : (
        <motion.div
          className="project"
          animate={bounce ? { scale: [1, 1.01, 0.998, 1] } : {}}
          transition={{ duration: 0.3 }}
        >

          <div className="carousel">
          <img
            src={`projects/${slides[currentIndex]}`}
            alt={`slide-${currentIndex}`}
            className="card-img"
            loading="lazy"
            decoding="async"
          />
        </div>
        </motion.div>

      )}
    </>
  );
}

export default AutoplayImageCarousel;
