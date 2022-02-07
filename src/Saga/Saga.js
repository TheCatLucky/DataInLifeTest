import { all } from "redux-saga/effects";
import { productsWatcher } from "./ProductsSaga";

export function* rootWatcher() {
  yield all([productsWatcher()]);
}