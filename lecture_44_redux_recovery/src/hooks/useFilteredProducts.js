import { useSelector } from "react-redux";

export default function useFilteredProducts() {

  const { products, status } = useSelector( state => state.products );
  const { priceFrom, priceTo, discounted } = useSelector(state => state.filters);

  let filteredProducts = products.filter( prod => {
    const isGreaterThanMin = priceFrom ? prod.price >= priceFrom : true;
    const isLessThanMax = priceTo ? prod.price <= priceTo : true;
    const isDiscount = discounted ? prod.price < 10 : true;
    return isGreaterThanMin && isLessThanMax && isDiscount;
  });

  return { products, status, filteredProducts }
}