import React from 'react';
import style from "./table.module.css";
import TableRow from './tableRow';

const Table = (props) => {
  return (
    <div key={23} >
      {props.products.map(( p, index) => {
        return (
          <table className={style.table} key={index} >
            <thead className={style.thead} key={p.rname}>
              <tr >
                <td colSpan="5"  >
                  <h1>{p.rname || "Без категории"}</h1>
                </td>
              </tr>
            </thead>
            <tbody >
              {p.goods.map(product => {
                return (
                  <tr key={product.gid}>
                    <TableRow key={product.gid}
                      id={product.gid}
                      name={product.gname}
                      price={product.gprice}
                      amount={product.amount}
                      totalPrice={product.totalPrice} />
                  </tr>)
              })}
            </tbody>
          </table>
        )
      })}
    </div>
  )
}

export default Table;