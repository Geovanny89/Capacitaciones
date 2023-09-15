// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { crearEmpresa } from '../../../../redux/action';

// export default function CrearEmpresa() {
//     const dispacth= useDispatch();
//     const [name,setName]= useState('');
//     const [nit,setNit]= useState('');
//     const [email, setEmail]= useState('');
//     const [phone,setPhone]= useState('');

//     const handleSubmit= (e)=>{
//         e.preventDefault();
//         const empresaData={
//             name,
//             nit,
//             email,
//             phone
//         }
//         dispacth(crearEmpresa(empresaData)) 
        
//         setName('')
//         setNit('')
//         setNit('')
//         setPhone('')
//     }

//   return (
//     <div className='form-empresa'>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="">
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <label htmlFor="">
//             <input type="text" value={nit} onChange={(e) => setName(e.target.value)} />

//             </label>
//             <label htmlFor="">
//             <input type="text" value={email} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <label htmlFor="">
//             <input type="text" value={phone} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <button className='btn btn-outline-success'>Guardar</button>
//         </form>
//     </div>
//   )
// }
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { crearEmpresa } from '../../../../redux/action';
// import './crearEmpresa.css'

// export default function CrearEmpresa() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [nit, setNit] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [mostrarFormulario, setMostrarFormulario] = useState(false); // Variable de estado para mostr

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const empresaData = {
//       name,
//       nit,
//       email,
//       phone,
//     };
//     dispatch(crearEmpresa(empresaData));

//     setName('');
//     setNit('');
//     setEmail('');
//     setPhone('');
//   };

//   return (
//     <div className='container'>
//       <div className='row justify-content-center'>
//         <div className='col-md-12'>
//           <form onSubmit={handleSubmit}>
//             <div className='form-group'>
//               <label htmlFor='name'>Nombre</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='name'
//                 value={name}
//                 placeholder='Nombre de la empresa'
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='nit'>NIT</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='nit'
//                 value={nit}
//                 placeholder='Nit'
//                 onChange={(e) => setNit(e.target.value)}
//               />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='email'>Email</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='email'
//                 value={email}
//                 placeholder='email@email.com'
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='phone'>Teléfono</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='phone'
//                 value={phone}
//                 placeholder='Télefono'
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             <button type='submit' className='btn btn-outline-success'>
//               Guardar
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearEmpresa } from '../../../../redux/action';
import './crearEmpresa.css'

export default function CrearEmpresa() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [nit, setNit] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const empresaData = {
      name,
      nit,
      email,
      phone,
    };
    dispatch(crearEmpresa(empresaData));

    setName('');
    setNit('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className='form-empresa'>
      {mostrarFormulario && (
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Nombre
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='nit' className='form-label'>
              NIT
            </label>
            <input
              type='text'
              className='form-control'
              id='nit'
              value={nit}
              onChange={(e) => setNit(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='form-label'>
              Teléfono
            </label>
            <input
              type='text'
              className='form-control'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-outline-success'>
            Guardar
          </button>
        </form>
      )}
      <button
        className='btn btn-primary'
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? 'Cancelar' : 'Crear Empresas'}
      </button>
    </div>
  );
}

