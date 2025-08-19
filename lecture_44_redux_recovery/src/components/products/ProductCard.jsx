import { useDispatch } from "react-redux"
import { addProduct, dropProduct } from "../../redux/slices/cartSlice";

export default function ProductCard( { product } ) {

  const dispatch = useDispatch();

  return (
    <div className="productCard">
      <h3>{product.title}</h3>
      <img src={product.images?.[0]} alt={product.title}/>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <div className="tagsContainer" style={{display: "flex", gap: "10px"}}>
        {product.tags && product.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <div>
        <button onClick={ () => dispatch( addProduct(product) ) }>Add to Cart</button>
        <button onClick={ () => dispatch( dropProduct(product.id) ) }>Remove from Cart</button>
      </div>
    </div>
  )
}