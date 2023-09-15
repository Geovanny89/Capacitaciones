import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmpresas,getDetailEmpresa, deleteEmpresa} from '../../../redux/action';
import './empresa.css'
import Detail from './Detail/Detail';



export default function Empresa() {
  const empresas = useSelector((state) => state.empresas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmpresas());
  }, [dispatch]);
  const mostrarDetalle = (id) => {
    // Despacha la acción para obtener los detalles de la empresa seleccionada
    dispatch(getDetailEmpresa(id));
  };
  const handleEliminarEmpresa =(id)=>{
    const confirmDelete = window.confirm("¿Estas seguro que quiere eliminar la empresa ?")
    if(confirmDelete){
      dispatch(deleteEmpresa(id))
    }
  }
  return (
    <div className='empresas-lis'>
      <h1>Empresas</h1>
      <ul className='list-emp'>
        {empresas.map((empresa) => (
          <li key={empresa._id}><a href="">{empresa.name}  </a>
         <div >
         <button className='btn btn-outline-primary' onClick={() => mostrarDetalle(empresa._id)}>Ver Mas</button>
          <button className='btn btn-outline-danger' onClick={() => handleEliminarEmpresa(empresa._id)}>Eliminar</button>
         </div>
          </li>
         
        ))}
        
      </ul>
      <Detail/>
    </div>
  );
}
