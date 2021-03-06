import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { productsReducer } from "./Reducers/ProductsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootWatcher } from "../Saga/Saga";
const sagaMiddleware = createSagaMiddleware();

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const rootReducer = combineReducers({
  products: productsReducer
});
const persistedStore = loadFromLocalStorage();
const store = createStore(rootReducer,
  persistedStore,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

sagaMiddleware.run(rootWatcher);
window.store = store;
export default store;