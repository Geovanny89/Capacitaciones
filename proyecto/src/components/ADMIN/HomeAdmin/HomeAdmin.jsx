import React from 'react'
import Empresa from '../Empresa/Empresa'
import './homeAdmin.css'
import Nav from '../NavBar/Nav'
import CrearEmpresa from '../Empresa/Crear/CrearEmpresa'

export default function HomeAdmin() {
  return (
    <div >
      <Nav/>
      <div id="crearEmpresa"> {/* Agrega este elemento con el identificador */}
        <CrearEmpresa /> {/* Renderiza el formulario de creación aquí */}
      </div>
      <Empresa/>


    </div>
  )
}
