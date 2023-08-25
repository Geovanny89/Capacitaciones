import React from 'react'
import './contacto.css';

export default function Contacto() {
  return (
    <div className='form-contacto' id='contacto'>
        <h1>Contactános</h1>
        <form action="" className='contacto' id='contacto'>
            <div className="nombre-contacto">
                
                <input type="text" name='Nombre' placeholder=' Nombre'/>

            </div>
            <div className="apellido-contacto">
                
                <input type="text" name='apellido' placeholder=' Apellido'/>

            </div>
            <div className="correo-contacto">
                
                <input type="text" name='correo' placeholder=' Correo@correo'/>

            </div>
            <div className="tel-contacto">
                
                <input type="text" name='Telefono' placeholder=' Telefono'/>

            </div>
             <div className="textA-contacto">
                
                <textarea type="text" name='Telefono' placeholder=' Mensaje'/>

            </div>
            <button>Enviar</button>
        </form>

    </div>
  )
}
