import React from 'react'
import { useSelector } from 'react-redux';
import './detail.css'

export default function Detail() {
    const detail = useSelector((state)=>state.detail);
  
    if (!detail) {
        return <div>Selecciona una empresa para ver el detalle</div>;
      }
  return (
    <div className='detail'>
        <h2>Detalle de la empresa</h2>
        <p>{detail.name}</p>
        <p> {detail.nit}</p>
        <p>{detail.email}</p>
        <button>Cerrar</button>
    </div>
  )
}
