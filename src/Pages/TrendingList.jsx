import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchBooks } from "../reducer/action";
import { useDispatch } from "react-redux";

const TrendingList = () => {
  const books = useSelector((store) => store.book);
  const [startIndex, setStartIndex] = useState(0);
  const [visible, setVisible] = useState(null);
  const dispatch = useDispatch();

  const cardsToShow = 4;

  const goToNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const goToPrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="relative overflow-hidden w-[100%] px-[130px] py-2 text-ellipsis">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${startIndex * (100 / books.length)}%)`,
        }}
      >
        {books
          .slice(startIndex, startIndex + cardsToShow)
          .map((book, index) => (
            <div
              onMouseEnter={() => setVisible(index)}
              onMouseLeave={() => setVisible(null)}
              key={index}
              className="w-[100%] box-border grid grid-cols-4 grid-rows-1 gap-0 h-[300px]"
            >
              <div className="border-4 border-red-400 w-[250px]">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-[100%] h-[80%] hover:border-zinc-200"
                />
                <h3 className="text-sm font-bold text-slate-600 text-center mt-2">
                  {book.title}
                </h3>
                {visible === index && (
                  <Link to={`/product/${book.id}`}>
                    <button className="border-1 border-sky-500 bg-sky-500 text-white mx-16 rounded-md px-4 py-2">
                      Open View
                    </button>
                  </Link>
                )}
                <p className="text-sm text-slate-950 text-center mt-1 ">
                  ${book.price}
                </p>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-20 px-4 py-2 bg-blue-500 text-white rounded-md "
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-20 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
export default TrendingList;
