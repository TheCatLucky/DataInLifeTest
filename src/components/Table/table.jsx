import React from "react";
import style from "./table.module.css";
import TableRow from "./tableRow";

const Table = ({ products }) => {
  return (
    <div key={23} >
      {products.map((p) => {
        return (
          <table className={style.table} key={p.rid} >
            <thead className={style.thead} >
              <tr >
                <td colSpan="5"  >
                  <h1>{p.rname}</h1>
                </td>
              </tr>
              <tr>
                <td>Id</td>
                <td>Название</td>
                <td>Цена</td>
                <td>Количество</td>
                <td>Сумма</td>
              </tr>
            </thead>
            <tbody >
              {p.goods.map(product => {
                return (
                  <tr key={product.gid}>
                    <TableRow
                      id={product.gid}
                      name={product.gname}
                      price={product.gprice}
                      amount={product.amount}
                      totalPrice={product.totalPrice} />
                  </tr>);
              })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Table;