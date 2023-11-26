import React, { useEffect } from "react";
// // import { useDispatch } from "react-redux";
// import axios from "axios";
// import { BooksFailure, BooksSuccess, getBooks } from "../reducer/action";
import TrendingList from "./TrendingList";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../reducer/action";

const Trending = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const fetchBooks = () => {
  //   dispatch(getBooks());
  //   return axios
  //     .get("http://localhost:3000/books")
  //     .then((r) => {
  //       dispatch(BooksSuccess(r.data));
  //     })
  //     .catch((e) => {
  //       dispatch(BooksFailure(e));
  //     });
  // };

  // useEffect(() => {
  //   fetchBooks();
  // }, []);

  const handleNavigate = () => {
    navigate("/product");
  };

  return (
    <div>
      <h1 className="text-2xl text-slate-500 text-center mt-4">Now Trending</h1>
      <div
        onClick={handleNavigate}
        className=" bottom-2 right-2 cursor-pointer text-red-600 px-[100px]"
      >
        See All
      </div>
      <TrendingList />
    </div>
  );
};

export default Trending;
