import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchBooks } from "../reducer/action";
import FilterSort from "../components/FilterSort";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Products = () => {
  const [visible, setVisible] = useState(null);
  const books = useSelector((store) => store.book);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // console.log(books);
  // let limit = 9;

  useEffect(() => {
    if (location || books.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };
      dispatch(fetchBooks(queryParams, page));
    }
  }, [location.search, page]);
  // console.

  return (
    <div className="flex mt-10">
      <div className="w-[20%] px-10 py-10">
        <FilterSort />
      </div>
      <div className="w-[80%]">
        <div className="grid grid-cols-3  gap-4 ">
          {books &&
            books.map((book, index) => (
              <div
                key={index}
                onMouseEnter={() => setVisible(index)}
                onMouseLeave={() => setVisible(null)}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[70%] hover:border-zinc-200"
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
                <p className="text-sm text-slate-950 text-center mt-1">
                  ${book.price}
                </p>
              </div>
            ))}
        </div>
        <div className="flex px-20 py-4 m-auto">
          <button
            className="px-4 -py-2 bg-sky-400 text-white"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            Prev
          </button>
          <p className="mx-10 px-2 py-2 text-red-500 bg-sky-300">{page}</p>
          <button
            className="px-4 -py-2 bg-sky-400 text-white"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
