import './App.css'
import DwarfCard from './components/dwarf/DwarfCard.jsx';

function App() {


  return (
    <>
      <DwarfCard
        foo="Bar"
        dwarfData={ {name: 'Torin', nickname: 'The OakShield', weapon: 'Sword', age: 327} }
      />

    </>
  )

}

export default App
