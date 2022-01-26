import React from 'react';
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
const Navigation = (props) => {
  return (
    <ul className={style.list}>
      {
        props.sections.map(e => <Link to={`/catg${e.rid}`} key={e.rname || "rand"} className={style.listItem}>{e.rname || "Без категории"}</Link>)
      }
    </ul>
  )
}



export default Navigation