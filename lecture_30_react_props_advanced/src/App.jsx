import './App.css'
import DwarfCard from './components/dwarf/DwarfCard';
import DwarfList from './components/dwarfList/DwarfList';
import SimpleParagraph from './components/paragraph/SimpleParagraph';
import SimpleHeader from './components/simpleHeader/SimpleHeader';
import { dwarwesArray } from './data/dwarwes';

function SimpleWrapper( {children} ) {
  return <div className='simpleWrapperClass'> {children} </div>
}

function App() {

  const describeClickHandler = () => {
    console.log('Clicked on describe!');
  }

  return (
    <>
      <SimpleWrapper>
        <h2>Hello from simple wrapper</h2>
        <p>Paragraph</p>
        <DwarfCard
          dwarfData={dwarwesArray[0]}
          describeClickHandler={describeClickHandler}
        />

        <DwarfList dwarwes={dwarwesArray} />
      </SimpleWrapper>
    </>
  )

}

export default App
