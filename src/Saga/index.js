import { all } from "redux-saga/effects";
import { productsWatcher } from "./productsSaga";

export function* rootWatcher() {
  yield all([productsWatcher()])
}