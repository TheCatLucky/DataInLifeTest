import { changeGood } from './../../Helper/Helper';
const SET_PRODUCTS = "SET_PRODUCTS"
const SET_TOTAL_PRICE = "SET_TOTAL_PRICE"
const SET_TOTAL_AMOUNT = "SET_TOTAL_AMOUNT"
const SET_SELECTED = "SET_SELECTED"
const SET_SELECTED_TO_ZERO = "SET_SELECTED_TO_ZERO"
export const GET_PRODUCTS = "GET_PRODUCTS"
export const SEND_PRODUCTS = "SEND_PRODUCTS"
export const SET_GOOD_AMOUNT = "SET_GOOD_AMOUNT"

const initialState = {
  products: [],
  totalPrice: 0,
  totalAmount: 0,
  selected: {}
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice + +action.payload
      }
    case SET_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: state.totalAmount + +action.payload
      }
    case SET_SELECTED:
      const newSelected = action.payload;
      return {
        ...state,
        selected: { ...state.selected, ...newSelected }
      }
    case SET_GOOD_AMOUNT:
      return {
        ...state,
        products: changeGood(state.products,action.id, action.amount, action.price)
      }
    case SET_SELECTED_TO_ZERO:
      return {
        ...state,
        totalPrice: 0,
        totalAmount: 0,
        selected : {}
      }
  
    default:
      return state
  }
}

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload })
export const setSelectedToZero = () => ({ type: SET_SELECTED_TO_ZERO })
export const setTotalPrice = (payload) => ({ type: SET_TOTAL_PRICE, payload })
export const setTotalAmount = (payload) => ({ type: SET_TOTAL_AMOUNT, payload })
export const setSelected = (payload) => ({ type: SET_SELECTED, payload })
export const getProducts = () => ({ type: GET_PRODUCTS })
export const sendProducts = (payload) => ({ type: SEND_PRODUCTS, payload })
export const setGoodAmount = (amount, id, price) => ({ type: SET_GOOD_AMOUNT, amount, id, price })