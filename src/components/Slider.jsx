import React, { useState } from "react";

const Slider = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides.length) {
    return null;
  }

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="slider" aria-label="Project slider">
      <button
        type="button"
        className="slider-button slider-button-left"
        onClick={previousSlide}
        aria-label="Previous project"
      >
        ‹
      </button>

      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <article className="slide" key={slide.name}>
              <h3>{slide.name}</h3>
              <p>{slide.description}</p>

              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="slider-button slider-button-right"
        onClick={nextSlide}
        aria-label="Next project"
      >
        ›
      </button>

      <div className="slider-dots" aria-label="Choose project">
        {slides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to ${slide.name}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
