import { useEffect } from "react"
import ProductList from "../components/products/ProductList";
import { useState } from "react";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => setProducts(data.products));

  }, []);

  return (
    <div className="page productsPage">
      <h2>Products in our store</h2>
      <ProductList products={products}/>
    </div>
  )
}