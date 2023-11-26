import * as types from "./actionTypes";

const initialState = {
  isError: false,
  isLoading: false,
  isAuth: false,
  book: [],
  books: [],
  cart: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS:
      return {
        ...state,
        isLoading: true,
        book: [],
      };
    case types.BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        book: payload,
      };
    case types.BOOKS_FAILURE:
      return {
        isError: true,
        isLoading: false,
        book: [],
      };
    case types.GET_BOOK:
      return {
        ...state,
        isLoading: true,
        books: [],
      };
    case types.BOOK_SUCC:
      return {
        ...state,
        isLoading: false,
        isError: false,
        books: payload,
      };
    case types.BOOK_FAIL:
      return {
        isError: true,
        isLoading: false,
        books: [],
      };

    case types.ADD_TO_CART:
      const isPresent = state.cart.find(book => {
        return book.id == payload.id;
      });
      let newCart;
      if (isPresent) {
        newCart = state.cart.map(book => {
          if (book.id == payload.id) {
            return {
              ...book,
              qty: book.qty + 1,
            };
          } else {
            return book;
          }
        });
      } else {
        let newPayload = {
          ...payload,
          qty: 1,
        };
        newCart = [...state.cart, newPayload];
      }
      return {
        ...state,
        cart: newCart,
      };

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id != payload),
      };

    default:
      return state;
  }
};
