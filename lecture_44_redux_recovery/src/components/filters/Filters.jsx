import { useDispatch } from "react-redux"
import { setDiscounted, setPriceFrom, setPriceTo } from "../../redux/slices/filtersSlice";

export default function Filters() {

  const dispatch = useDispatch();

  const isNumber = (num) => {
    return !Number.isNaN(+num);
  }

  return (
    <div className="filtersContainer" style={{display: 'flex', gap: '10px'}}>
      <label for='priceFrom'>Price from</label>
      <input onChange={(e) => { if (isNumber(e.target.value)) dispatch( setPriceFrom(+e.target.value) ) }} id='priceFrom' type='text' />
      <label for='priceTo'>Price to</label>
      <input onChange={(e) => { if (isNumber(e.target.value)) dispatch( setPriceTo(+e.target.value) ) }} id='priceTo' type='text' />
      <label for='discounted'>Discounted</label>
      <input onChange={(e) => { dispatch( setDiscounted(e.target.checked) ) }} id='discounted' type='checkbox'></input>
    </div>
  )
}