import { call, put, takeEvery } from "redux-saga/effects";
import { tableAPI } from "../API/Api";
import { GET_PRODUCTS, SEND_PRODUCTS, setProducts } from "./../Store/Reducers/productsReducer";

const getProducts = () => tableAPI.getProducts();
const sendProducts = (e) => tableAPI.sendProducts(e);
function* fetchProductsWorker() {
  try {
    let data = yield call(getProducts);
    data = data.map(catg => {
      return {
        rid: catg.rid || "nocatg",
        rname: catg.rname || "Без Категории",
        goods: catg.goods = catg.goods.map(g => (
          {
            ...g,
            amount: "",
            totalPrice: 0,
          }
        ))
      };
    });
    yield put(setProducts(data));
  } catch (err) {
    console.log(err);
  }
}
function* sendProductsWorker({ payload }) {
  try {
    yield call(sendProducts, payload);
  } catch (err) {
    console.log(err);
  }
}

export function* productsWatcher() {
  yield takeEvery(GET_PRODUCTS, fetchProductsWorker);
  yield takeEvery(SEND_PRODUCTS, sendProductsWorker);
}