import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import style from "./App.module.css";
import AppRouter from "./components/AppRouter/AppRoutes";
import CurrentTable from "./components/CurrentTable/CurrentTable";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigartion";
import Table from "./components/Table/Table";
import { getProducts } from "./Store/Actions/ProfileActions";
function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.products.products[0]);
  useEffect(() => {
    if (!state) {
      dispatch(getProducts());
    }
  }, []);
  return (
    <div>
      <AppRouter />
    </div>
  );
}
export const Layout = () => {
  const products = useSelector(state => state.products.products);
  const { id } = useParams();
  return (
    <div>
      <div >
        <div className={style.row}>
          {products[0] && <Navigation sections={products} />}
          {!id
            ? <Table products={products} />
            : <CurrentTable products={products} id={id} />
          }
        </div>
      </div>
      {products[0] && <Footer />}
    </div>
  );
};


export default App;
