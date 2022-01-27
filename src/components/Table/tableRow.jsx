import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGoodAmount, setSelected, setTotalAmount, setTotalPrice } from '../../Store/Reducers/productsReducer';
import style from "./table.module.css";

const TableRow = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const [total, setTotal] = useState(props.totalPrice);
  const dispatch = useDispatch()
  const handleAmount = (e) => {
    if (e.target.value <0 ) {
      setAmount("")
      return;
    }
    const price = e.target.value * props.price;
    setAmount(e.target.value);
    setTotal(price);
    dispatch(setGoodAmount(e.target.value,props.id, price))
    dispatch(setTotalAmount(e.target.value - amount));
    dispatch(setTotalPrice(e.target.value * props.price - amount * props.price ));
  }
  const handleChange = () => {
    if (amount > 0) {
      const productToDispatch = {};
      const prod = `product[${props.id}]`;
      productToDispatch[prod] = +amount
      dispatch(setSelected(productToDispatch))
    }
  }
  return (
    <>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
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
      <td>{total}</td>
    </>
  )
}

export default TableRow