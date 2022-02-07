import { changeGood } from "../../Helper/Helper";
import { manageSelected } from "../../Helper/DeleteSelectedItem";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const SET_TOTAL_AMOUNT = "SET_TOTAL_AMOUNT";
const SET_SELECTED = "SET_SELECTED";
const SET_SELECTED_TO_ZERO = "SET_SELECTED_TO_ZERO";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEND_PRODUCTS = "SEND_PRODUCTS";
export const SET_GOODS = "SET_GOOD_AMOUNT";

const initialState = {
  products: [],
  totalPrice: 0,
  totalAmount: 0,
  selected: {}
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case SET_SELECTED:
      const currentSelected = action.payload;
      return {
        ...state,
        selected: manageSelected(state.selected, currentSelected)
      };

    case SET_GOODS:
      return {
        ...state,
        products: changeGood(state.products, action),
        totalAmount: state.totalAmount + +action.totalAmount,
        totalPrice: state.totalPrice + +action.totalPrice
      };
    case SET_SELECTED_TO_ZERO:
      return {
        ...state,
        totalPrice: 0,
        totalAmount: 0,
        selected: {}
      };

    default:
      return state;
  }
};

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
export const setSelectedToZero = () => ({ type: SET_SELECTED_TO_ZERO });
export const setTotalPrice = (payload) => ({ type: SET_TOTAL_PRICE, payload });
export const setTotalAmount = (payload) => ({ type: SET_TOTAL_AMOUNT, payload });
export const setSelected = (payload) => ({ type: SET_SELECTED, payload });
export const getProducts = () => ({ type: GET_PRODUCTS });
export const sendProducts = (payload) => ({ type: SEND_PRODUCTS, payload });
export const setGoods = (
  amount, id, price, totalAmount, totalPrice
) => (
  { type: SET_GOODS, amount, id, price, totalAmount, totalPrice }
);