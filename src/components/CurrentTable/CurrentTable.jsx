import React from 'react';
import style from "./../Table/table.module.css";
import TD from './../Table/tableRow';

const CurrentTable = (props) => {
  let currentProd = [props.products.find((e) => e.rid === props.id)];
  return (
    <div >
      {currentProd.map(p => {
        return (
          <table className={style.table} key={p}>
            <thead className={style.thead}>
              <tr >
                <td colSpan="5">
                  <h1>{p.rname}</h1>
                </td>
              </tr>
            </thead>
            <tbody>
              {p.goods.map(product => {
                return (
                  <tr key={product.gid}>
                    <TD key={product.gid} id={product.gid} name={product.gname} price={product.gprice} amount={product.amount}
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

export default CurrentTable;