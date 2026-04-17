import React, { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideImages = (evt) => {
        let button = evt.target.className;

        if (button.includes("left") && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (button.includes("right") && currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        // Optional auto-scroll
        // const interval = setInterval(() => {
        //     setCurrentIndex((prev) =>
        //         prev === slides.length - 1 ? 0 : prev + 1
        //     );
        // }, 3000);
        // return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="image-slider">
            <div className="slider-track">
                {slides.map((slide, index) => (
                    <div 
                        key = {index} 
                        className="slide project-card"
                                                style={{
                        transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 3}rem))`
                    }}
                    >
                        <h3>{slide.name}</h3>
                        <p>{slide.description}</p>
                        <a
                            href={slide.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>

            <div
                className="image-slider-lr-toggle right-toggle fa-solid fa-circle-arrow-right"
                onClick={slideImages}
            ></div>

            <div
                className="image-slider-lr-toggle left-toggle fa-solid fa-circle-arrow-left"
                onClick={slideImages}
            ></div>
        </div>
    );
};

export default Slider;
