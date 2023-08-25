import React from 'react'
import './home.css';
import Navbar from '../Nabvar/Navbar';

import Redes from '../Redes/Redes';
import Footer from '../Footer/Footer';
import asesoria from '../../assets/aseosira-sald.jpg'
import Contacto from '../Contacto/Contacto';

export default function Home() {
    return (
        <div className='contenedor'>
            <Redes />
  
            <Navbar />
            <div className="inicio">
                <div className='asesoria'>
                    <h2>Asesoria y Procesos de habilitacion para IPS</h2>

                </div>

                <div className="somos-seccion">
                <div className="somos">
                    
                    <img src={asesoria} alt="asesoria-salud" width="350px" height="250px" />
                    
                </div>
                </div>
            </div>
            <div className="conten-somos">
            
            <h2>En (nombre empresa)</h2>
            <br />
            <p className='parrafo'>Ayudamos y ejecutamos los procesos de capacitaciones, asesorías y acompañamos en el proceso de habilitación</p>
            </div>
        <Contacto/>
           


        <Footer/>
        </div>
    )
}
