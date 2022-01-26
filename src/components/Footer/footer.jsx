import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./footer.module.css";
import { sendProducts } from './../../Store/Reducers/productsReducer';

const Footer = () => {
  const totalAmount = useSelector(state => state.products.totalAmount)
  const totalPrice = useSelector(state => state.products.totalPrice)
  const selected = useSelector(state => state.products.selected)
  const dispatch = useDispatch()
  const handleClick = () => {
    const formData = new FormData();
    for (let key in selected) {
      formData.append(key, selected[key]);
    }
    dispatch(sendProducts(formData))
  }
  return (
    <div className={style.total}>
      <p>Общее количество товаров : {totalAmount}</p>
      <p>Общая цена товаров : {totalPrice}</p>
      <button onClick={handleClick}>В корзину</button>
    </div>)
}

export default Footer