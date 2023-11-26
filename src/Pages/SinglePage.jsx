import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, fetchBook, fetchBooks } from "../reducer/action";
import axios from "axios";

const SinglePage = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  // console.log(books);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBook());
    }
  }, [dispatch, books.length]);

  useEffect(() => {
    if (id) {
      const currentBooks = books.find((book) => book.id == id);
      console.log(currentBooks);
      currentBooks && setCurrentBook(currentBooks);
    }
  }, [id, books]);

  const handleAddToCart = (id) => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((r) => {
        dispatch(addToCart(r.data));
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // console.log(currentBook);

  return (
    <div>
      <div className=" flex px-10 py-10">
        <div className="border-[1px] border-slate-600 px-10 py-10">
          <img src={currentBook.image} alt="singlepage" />
        </div>
        <div>
          <h1 className="text-red-700 text-2xl px-10 italic">
            {currentBook.title}{" "}
            <span className="text-black text-sm">
              (Paperback) | Released: 07 Mar 2023
            </span>
          </h1>
          <p className="text-sm px-10">
            (Author) ,{" "}
            <Link className="text-red-600 text-sm">{currentBook.author}</Link>{" "}
            (Author) ,{" "}
            <Link className="text-red-600 text-sm">{currentBook.author}</Link>
            (Author) ,{" "}
            <Link className="text-red-600 text-sm">Anup Chalise</Link> (Author)
            , <Link className="text-red-600 text-sm">Connie Qiu </Link>(Author)
            | Publisher: McGraw-Hill Education
          </p>
          <hr className=" border-slate-500  border-[0.5px] mt-4 w-[90%] m-auto" />
          <h1 className="px-10 py-10 text-red-800 text-4xl">
            ₹ {currentBook.price}
          </h1>
          <p className="text-slate-300 line-through px-10">₹6,194</p>
          <p className="px-10  text-green-800 text-sm">International Edition</p>
          <p className="px-10">
            Ships within{" "}
            <span className="text-bold text-slate-900 text-xl">
              18-20 Business Days
            </span>
          </p>
          <p className="text-sm text-slate-900 px-10 py-5">
            Free Shipping in India and low cost Worldwide.
          </p>
          <div className="px-10">
            <button
              onClick={() => handleAddToCart(id)}
              className="px-[150px] py-3 bg-red-700 text-white mt-2 rounded-md hover:bg-red-500"
            >
              BuyNow
            </button>
            <button className="px-[150px] py-3  text-red-700 mt-2 rounded-md ml-2 border-[1px] border-red-600">
              Add to wishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
