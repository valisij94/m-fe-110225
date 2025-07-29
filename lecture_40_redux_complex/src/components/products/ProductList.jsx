import ProductCard from "./ProductCard";

export default function ProductList( { products} ) {
  return (
    <>
      <h2>Product List Component</h2>
      <div className="productsContainer" style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gap: "10px"}}>
        {products.map(product => <ProductCard key={product.id} product={product}/>)}
      </div>
    </>
  )
}