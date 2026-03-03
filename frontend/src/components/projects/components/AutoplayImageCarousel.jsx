import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AutoplayImageCarousel({ mainImg, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false); // controla si es manual
  const intervalRef = useRef(null);
  const [bounce, setBounce] = useState(false);
  const hasCarousel = images.length > 1;

  const onImageChange = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 400);
  };

  const changeImage = (newIndex) => {
    setCurrentIndex(newIndex);
    if (onImageChange) onImageChange(newIndex); // notifica al padre
  };

  const prevImage = () => {
    setIsManual(true); // ahora es manual
    changeImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setIsManual(true); // ahora es manual
    changeImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // inicializa auto-slide solo si no está en modo manual
  useEffect(() => {
    if (!isManual) {
      intervalRef.current = setInterval(() => {
        changeImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isManual, images.length]);

  return (
    <>
      {!hasCarousel ? (
          <div className="image-carousel">
            <img className="card-img" src={`projects/${images[0]}`} alt={name} />
          </div>
        ) : (
        <motion.div
          className="project"
          animate={bounce ? { scale: [1, 1.01, 0.998, 1] } : {}}
          transition={{ duration: 0.3 }}
        >

          <div className="carousel">
          <img
            src={`projects/${images[currentIndex]}`}
            alt={`slide-${currentIndex}`}
            className="card-img"
          />
        </div>
        </motion.div>

      )}
    </>
  );
}

export default AutoplayImageCarousel;
