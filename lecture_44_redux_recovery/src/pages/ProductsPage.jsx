import { useEffect } from "react"
import ProductList from "../components/products/ProductList";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import Filters from "../components/filters/Filters";
import useFilteredProducts from "../hooks/useFilteredProducts";

export default function ProductsPage() {

  const { filteredProducts, status } = useFilteredProducts();

  console.log(filteredProducts)

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( fetchProducts() );
  }, []);

  return (
    <div className="page productsPage">
      <h2>Products in our store</h2>
      <Filters />
      { status === 'loading' && <p>Please, wait...</p> }
      <ProductList products={filteredProducts}/>
    </div>
  )
}