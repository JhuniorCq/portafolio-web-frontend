import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Home } from './pages/Home/Home'
import { Projects } from './pages/Projects/Projects'
import { Technologies } from './pages/Technologies/Technologies'

function App () {
  return (
    // El #root es mi contenedor principal, ahí colocaré la imagen de fondo
    <div className='background'>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
