
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Iniciosesion from './Iniciosesion';
import reactLogo from './assets/instaya.svg'

function App() {
 

  return (
    <div className="App">
      <img   className='fondo' src={reactLogo} />
      <Iniciosesion/>
    </div>
  )
}

export default App
