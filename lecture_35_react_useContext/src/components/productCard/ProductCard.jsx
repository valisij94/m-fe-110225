import { useEffect } from "react";
import { useState } from "react";

export default function ProductCard( { productId } ) {

  const [product, setProduct] = useState({});

  useEffect( () => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then( resp => resp.json())
      .then( data => {
        setProduct(data);
      });
  }, [productId]);

  return (
    <div style={{ border: '1px solid red'}} className='productCardContainer'>
      <h3 className='productName'>{product.title}</h3>
      <p className='productPrice'>{product.price}</p>
      <p className='productDescription'>{product.description}</p>
    </div>
  )
}