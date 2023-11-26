import React, { useState } from "react";

const data = [
  "https://www.bookswagon.com/bannerimages/86_inr.jpg?v=2.5",
  "https://www.bookswagon.com/bannerimages/80_inr.jpg?v=2.1",
  "https://www.bookswagon.com/bannerimages/79_inr.jpg?v=2.5",
  "https://www.bookswagon.com/bannerimages/83_inr.jpg?v=1.9",
  "https://www.bookswagon.com/bannerimages/84_inr.jpg?v=3.1",
  "https://www.bookswagon.com/bannerimages/81_inr.jpg?v=3.1",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-[100%] relative mt-1">
      <button
        className="opacity-70 absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={prevSlide}
      >
        Previous
      </button>
      <img
        className="w-full"
        src={data[currentImage]}
        alt={`Slide ${currentImage + 1}`}
      />
      <button
        className="opacity-70 absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={nextSlide}
      >
        Next
      </button>

      <div className="dots absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {data.map((_, index) => (
          <span
            key={index}
            className={
              index === currentImage
                ? "dot active mx-1 w-4 h-4 bg-gray-100 rounded-full inline-block"
                : "dot mx-1 w-4 h-4 bg-gray-400 rounded-full inline-block"
            }
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
