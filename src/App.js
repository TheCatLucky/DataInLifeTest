import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useParams } from 'react-router';
import style from "./App.module.css";
import CurrentTable from './components/CurrentTable/CurrentTable';
import Footer from './components/Footer/footer';
import Navigation from './components/Navigation/Navigartion';
import Table from './components/Table/table';
import { getProducts } from './Store/Reducers/productsReducer';
function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.products.products[0]);
  useEffect(() => {
    if (!state) {
    dispatch(getProducts())}
 },[])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/catg:id" element={<Layout />}/>
        <Route path="*" element={<Layout />}/>
      </Routes>
    </div>
  );
}

export const Layout = () => {
  const products = useSelector(state => state.products.products)
  let id = useParams();
  return (
    <div>
      <div >
        <div className={style.row}>
          {products[0] && <Navigation sections={products} />}
          {!id.id
            ? <Table products={products} />
            : <CurrentTable products={products} id={id.id}  />
          }
        </div>
      </div>
      {products[0] && <Footer />}
    </div>
  )
}

export default App;
