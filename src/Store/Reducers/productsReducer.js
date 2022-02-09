import { manageSelected } from "../../Helper/DeleteSelectedItem";
import { changeGood } from "../../Helper/Helper";
import { SET_GOODS, SET_PRODUCTS, SET_SELECTED, SET_SELECTED_TO_ZERO } from "./../Actions/ProfileActions";

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

