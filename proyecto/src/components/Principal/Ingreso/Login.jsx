import React from 'react'

export default function Login() {
  return (
    <div className='login' id='login'>
        <form action="" id='login'>
            <div className="user">
            <span>Nombre de Usuario</span>
            <input type="text" name='user' placeholder='Nombre de Usuario' />
            </div>
            <div className="contrasena">
            <span>Contraseña</span>
            <input type="text" name='user' placeholder='contraseña' />
            </div>
        </form>
    </div>
  )
}
