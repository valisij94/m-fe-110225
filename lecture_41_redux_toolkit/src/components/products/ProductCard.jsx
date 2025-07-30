export default function ProductCard( { product } ) {

  return (
    <div className="productCard">
      <h3>{product.title}</h3>
      <img src={product.images?.[0]} alt={product.title}/>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <div className="tagsContainer" style={{display: "flex", gap: "10px"}}>
        {product.tags && product.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </div>
  )
}