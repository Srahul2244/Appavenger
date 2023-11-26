import axios from "axios";
import * as types from "./actionTypes";

export const getBooks = () => {
  return {
    type: types.GET_BOOKS,
  };
};

export const addToCart = payload => ({
  type: types.ADD_TO_CART,
  payload,
});

export const removeFromCart = payload => ({
  type: types.REMOVE_FROM_CART,
  payload,
});
export const increaseQty = payload => ({
  type: types.INCQTY,
  payload,
});

export const decreaseQty = payload => ({
  type: types.DECQTY,
  payload,
});

export const fetchBooks = (queryParams, page, limit) => dispatch => {
  // const offset = (page - 1) * limit;
  dispatch(getBooks());
  return axios
    .get(`http://localhost:3000/books?_page=${page}`, queryParams)
    .then(r => {
      return dispatch({
        type: types.BOOKS_SUCCESS,
        payload: r.data,
      });
    })
    .catch(e => {
      return dispatch({
        type: types.BOOKS_FAILURE,
      });
    });
};

export const fetchBook = () => dispatch => {
  dispatch({
    type: types.GET_BOOK,
  });
  return axios
    .get("http://localhost:3000/books")
    .then(r => {
      return dispatch({
        type: types.BOOK_SUCC,
        payload: r.data,
      });
    })
    .catch(e => {
      return dispatch({
        type: types.BOOK_FAIL,
      });
    });
};
