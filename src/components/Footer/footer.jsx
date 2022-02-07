import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Footer.module.css";
import { sendProducts, getProducts, setSelectedToZero } from "../../Store/Reducers/ProductsReducer";
import { getStateProducts } from "../../Store/Selectors/Selectors";

const Footer = () => {
  const { totalAmount, totalPrice, selected } = useSelector(getStateProducts);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (totalAmount === 0) {
      alert("Товары не выбраны!");
      return;
    }
    const formData = new FormData();
    for (let key in selected) {
      formData.append(key, selected[key]);
    }
    console.log(formData);
    dispatch(sendProducts(formData));
    dispatch(getProducts());
    dispatch(setSelectedToZero());
    alert("Товары отправлены!");
  };
  return (
    <div className={style.total}>
      <p>Общее количество товаров : {totalAmount}</p>
      <p>Общая цена товаров : {totalPrice}</p>
      <button onClick={handleClick}>В корзину</button>
    </div>);
};

export default Footer;