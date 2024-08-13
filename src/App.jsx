import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './pages/About/About'
import { Home } from './pages/Home/Home'

function App () {
  return (
    // El #root es mi contenedor principal, ahí colocaré la imagen de fondo
    <div className='background'>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
