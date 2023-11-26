import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromCart } from "../reducer/action";

const Cart = () => {
  const [count, setCount] = useState(0);
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div className="border-[1px]  border-slate-700 w-[80%]  rounded-md h-auto ml-[160px] mt-[20px]">
          {cartItems.map((book) => {
            return (
              <div>
                <div className="flex">
                  <div className="px-5 py-2">
                    <img src={book.image} alt="" />
                  </div>
                  <div className="px-1">
                    <h1 className="px-10 text-2xl text-slate-900 py-2">
                      {book.title}
                    </h1>
                    <p className="px-10 py-2 text-blue-500">
                      <span className="text-red-600">By:</span> {book.author}
                    </p>
                    <p className="text-red-800 px-12 py-2">
                      ₹{book.price}
                      <span className="line-through ml-4">₹475</span>
                    </p>
                    <div className="flex px-10">
                      <div className="flex gap-[5px]">
                        <button
                          className="px-[15px] py-[0px] bg-red-300 text-white rounded-sm"
                          onClick={() => setCount(count + 1)}
                        >
                          +
                        </button>
                        <p className="text-black px-[15px] py-[0px] bg-red-400 my-4">
                          {count}
                        </p>
                        <button
                          disabled={count === 0}
                          className="px-[15px] py-[0px] bg-red-300 text-white rounded-sm"
                          onClick={() => setCount(count - 1)}
                        >
                          -
                        </button>
                      </div>
                      <div>
                        <p className="px-20 text-red-800">
                          Total Price : ₹{book.price}
                        </p>
                      </div>
                      <div>
                        <button className="px-[20px] py-[10px] bg-red-700 text-white mt-2 rounded-md hover:bg-red-500">
                          Move to WishList
                        </button>
                        <button
                          onClick={() => handleRemove(book.id)}
                          className="px-[20px] py-[10px]  text-red-700 mt-2 rounded-md ml-1  border-[1px] border-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <hr className=" border-slate-500  border-[0.5px] mt-4 w-[90%] m-auto" />
          <div className="flex justify-between mt-3">
            <div className="mt-2 px-2 py-2">
              <p className="text-2xl text-slate-800 px-5 py-1">Total Items:1</p>
              <p className="text-2xl text-slate-800 px-5 py-1">
                Total Gross : ₹366
              </p>
              <p className="text-bs text-green-800 px-5 py-1">
                Ships within 1-2 days.
              </p>
            </div>
            <div className="mt-10">
              <p className="text-2xl text-slate-800 px-5 py-1">
                Shipping (in India) : ₹39
              </p>
              <p className="text-2xl text-slate-800 px-5 py-1">
                Amount Payable : ₹405
              </p>
              <button className="px-[20px] py-[10px] bg-red-700 text-white mt-2 rounded-md hover:bg-red-500 ml-8">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
