const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const SET_TOTAL_AMOUNT = "SET_TOTAL_AMOUNT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_SELECTED = "SET_SELECTED";
export const SET_SELECTED_TO_ZERO = "SET_SELECTED_TO_ZERO";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEND_PRODUCTS = "SEND_PRODUCTS";
export const SET_GOODS = "SET_GOOD_AMOUNT";
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