import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul className='menu-navbar'>
            
            <li><a href="/home">Inicio</a></li>
            <li><a href="">¿Quienes Somos?</a></li>
            <div className="img">
              <img src="" alt="Aqui Iria Un Logo" />  

            </div>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <button  className='btn-ingresar'>Ingresar</button>
        </ul>
        
    </div>
  )
}
