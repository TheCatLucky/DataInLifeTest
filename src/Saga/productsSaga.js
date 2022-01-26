import { call, put, takeEvery } from "redux-saga/effects";
import { tableAPI } from "../API/Api";
import { setProducts, GET_PRODUCTS, SEND_PRODUCTS } from './../Store/Reducers/productsReducer';

const getProducts = () => tableAPI.getProducts()
const sendProducts = (e) => tableAPI.sendProducts(e)
function* fetchProductsWorker() {
  try {
    const data = yield call(getProducts)
    data.map(catg => {
      if (catg.rid === undefined) {
        catg.rid = "1000";
        catg.rname = "Без категории"
      }
      return (catg.goods.map(good => {
        good.amount = 0
        good.totalPrice = 0
        return good;
      }))
    })
    yield put(setProducts(data))
  } catch (err) {
    console.log(err);
  }
}
function* sendProductsWorker({ payload }) {
  try {
    yield call(sendProducts, payload)
  } catch (err) {
    console.log(err);
  }
}

export function* productsWatcher() {
  yield takeEvery(GET_PRODUCTS, fetchProductsWorker)
  yield takeEvery(SEND_PRODUCTS, sendProductsWorker)
}