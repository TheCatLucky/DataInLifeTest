import React from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
const Navigation = ({ sections }) => {
  return (
    <ul className={style.list}>
      {
        sections.map(e => <Link to={`/catg${e.rid}`} key={e.rname || "rand"} className={style.listItem}>{e.rname || "Без категории"}</Link>)
      }
    </ul>
  );
};



export default Navigation;