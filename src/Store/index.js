import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import { rootWatcher } from "../Saga";
import { productsReducer } from "./Reducers/productsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  products: productsReducer
})
const store = createStore(rootReducer,

  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);


sagaMiddleware.run(rootWatcher)
export default store;