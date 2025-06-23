
import './App.css'
import Human from './components/human/Human'
import SimpleCounter from './components/simpleCounter/SimpleCounter'
import SimpleInput from './components/simpleInput/SimpleInput'


function App() {

  console.log('Render App component')
  return (
    <>
      <SimpleInput placeholder="Something"/>
      <SimpleInput placeholder="Required input" required={true}/>
      <Human humanName="Human1"/>
    </>
  )

}

export default App
