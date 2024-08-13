import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__li navbar__li--logo' id='logo'>
          <a href=''>
            <img src='' alt='Logo' />
          </a>
        </li>
        <li className='navbar__li'>
          <a href=''>Inicio</a>
        </li>
        <li className='navbar__li'>
          <a href=''>Sobre mí</a>
        </li>
        <li className='navbar__li'>
          <a href=''>Tecnologías</a>
        </li>
        <li className='navbar__li'>
          <a href=''>Proyectos</a>
        </li>
        <li className='navbar__li'>
          <a href=''>Contáctame</a>
        </li>
      </ul>
    </nav>
  )
}
