import { useEffect } from "react"
import ProductList from "../components/products/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";

export default function ProductsPage() {

  const { products, status } = useSelector( state => state.products );
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( fetchProducts() );
  }, []);

  return (
    <div className="page productsPage">
      <h2>Products in our store</h2>
      { status === 'loading' && <p>Please, wait...</p> }
      <ProductList products={products}/>
    </div>
  )
}