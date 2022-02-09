import React from "react";
import { useDispatch } from "react-redux";
import { setGoods, setSelected } from "../../Store/Actions/ProfileActions";
import style from "./Table.module.css";

const TableRow = ({ amount, totalPrice, price, id, name }) => {
  const dispatch = useDispatch();
  const handleAmount = (e) => {
    const currentPrice = e.target.value * price;
    const totalAmount = e.target.value - amount;
    if (e.target.value < 0) {
      return;
    }
    if (e.target.value > 99) {
      return 99;
    }
    dispatch(setGoods(e.target.value, id, currentPrice, totalAmount, currentPrice - totalPrice));
  };
  const handleChange = () => {
    const productToSelect = {};
    const prod = `product[${id}]`;
    productToSelect[prod] = +amount;
    dispatch(setSelected(productToSelect));
  };
  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input className={style.input}
          type={"number"}
          min={"0"}
          max={"99"}
          value={amount}
          onChange={(e) => handleAmount(e)}
          onBlur={handleChange}
        ></input>
      </td>
      <td>{totalPrice}</td>
    </>
  );
};

export default TableRow;