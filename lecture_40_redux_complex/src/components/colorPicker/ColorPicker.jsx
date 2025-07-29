import { useDispatch, useSelector } from "react-redux"
import { setBlue, setGreen, setRed } from "../../redux/actions/colorActions";

export default function ColorPicker() {

  const { red, green, blue } = useSelector( (state) => state.color );

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Color Picker</h3>
      <p>Set Red part</p>
      <input onChange={ (e) => dispatch( setRed(e.target.value)) } value={red} type="range" min="0" max="255" id="red"/>
      <p>Set Green part</p>
      <input onChange={(e) => dispatch( setGreen(e.target.value))} value={green} type="range" min="0" max="255" id="green"/>
      <p>Set Blue part</p>
      <input onChange={(e) => dispatch( setBlue(e.target.value))} value={blue} type="range" min="0" max="255" id="blue"/>
      <h4>Now color has RED={red}, GREEN={green}, BLUE={blue}</h4>
    </div>
  )
}