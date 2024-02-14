import { useState, useEffect } from "react";
import { slideItem, slides } from "../lib/constants";
import { cn } from "../lib/utils";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-full w-full relative ">
      {slides.map((slide: slideItem, index: number) => (
        <div
          key={index}
          className={cn(
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none",
            "absolute top-0 left-0 w-full max-h-full  transition-opacity duration-500 bg-red-600 "
          )}
        >
          <img
            src={slide.image}
            alt="slide"
            className="object-cover h-full w-full max-h-[555px]"
          />
        </div>
      ))}
      <div className="absolute  left-1/2 transform -translate-x-1/2 bottom-[5%] flex space-x-2">
        {slides.map((_: any, index: number) => (
          <button
            key={index}
            className={cn(
              index === currentSlide
                ? "bg-white"
                : "border-[4px] border-white bg-transparent",
              "w-6 h-6 rounded-full"
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
