import React, { useState } from 'react';
import './nav.css';

export default function Nav() {
    const [isOpen,setIsOpen]= useState(false)
    
   
  return (
    <div className='navbar'>
        <div className="nav_logo">Code</div>
            <div className={`nav_items ${isOpen && 'open'}`}>
                <a href="#crearEmpresa">Crear Empresas</a>
                <a href="#">Documentos</a>
                <a href="#">Cursos</a>
                <a href="">Logout</a>

            </div>
            <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
                
            </div>
        

    </div>
  )
}
