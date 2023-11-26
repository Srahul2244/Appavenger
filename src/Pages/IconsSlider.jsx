import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IconsSlider = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  const images = [
    {
      images: "https://www.bookswagon.com/Images/staticimages/TodaysDeal.png",
      text: "Todays Deal",
    },
    {
      images: "https://www.bookswagon.com/Images/staticimages/tarot.png",
      text: "TAROT CARDS",
    },
    {
      images: "https://www.bookswagon.com/Images/staticimages/icon5.png",
      text: "FICTIONS BOOKS",
    },
    {
      images: "https://www.bookswagon.com/Images/staticimages/icon2.png",
      text: "NEW ARRIVALS",
    },
    {
      images: "https://www.bookswagon.com/Images/staticimages/icon7.png",
      text: "INTERNATIONAL BEST SELLERS",
    },
    {
      images: "https://www.bookswagon.com/Images/staticimages/icon4.png",
      text: "BOX SETS",
    },
    {
      images: "https://www.bookswagon.com/Images/staticimages/icon8.png",
      text: "AWARD WINNERS",
    },
  ];

  return (
    <div>
      <hr className="border-slate-500  border-[0.5px] mt-4 w-[90%] m-auto" />
      <Slider {...settings} className="w-[100%]  " ref={sliderRef}>
        {images.map((ele, index) => (
          <div key={index} className="mx-2">
            <div className="bg-white rounded-lg overflow-hidden h-[200px] w-[200px] m-auto">
              <img src={ele.images} alt="Best Seller" className="h-30 w-40 " />
              <p className="text-center text-sm font-bold text-gray-800 py-1">
                {ele.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-between w-[90%] m-auto">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Prev
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
      <hr className=" border-slate-500  border-[0.5px] mt-4 w-[90%] m-auto" />
    </div>
  );
};

export default IconsSlider;
