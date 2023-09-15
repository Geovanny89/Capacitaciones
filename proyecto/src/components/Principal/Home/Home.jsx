// import React from 'react'
// import './home.css';
// import Navbar from '../Nabvar/Navbar';

// import Redes from '../Redes/Redes';
// import Footer from '../Footer/Footer';
// import asesoria from '../../assets/aseosira-sald.jpg'
// import Contacto from '../Contacto/Contacto';

// export default function Home() {
//     return (
//         <div className='contenedor'>
            
  
//             <Navbar />
//             <Redes />
//             <div className="inicio">
//                 <div className='asesoria'>
//                     <h2>Asesoria y Procesos de habilitacion para IPS</h2>

//                 </div>

//                 <div className="somos-seccion">
//                 <div className="somos">
                    
//                     <img src={asesoria} alt="asesoria-salud" width="350px" height="250px" />
                    
//                 </div>
//                 </div>
//             </div>
//             <div className="conten-somos">
            
//             <h2>En (nombre empresa)</h2>
//             <br />
//             <p className='parrafo'>Ayudamos y ejecutamos los procesos de capacitaciones, asesorías y acompañamos en el proceso de habilitación</p>
//             </div>
//         <Contacto/>
           


//         <Footer/>
//         </div>
//     )
// }
// import React from 'react';
// import './home.css';
// import Navbar from '../Nabvar/Navbar';
// import Redes from '../Redes/Redes';
// import Footer from '../Footer/Footer';
// import asesoria from '../../assets/aseosira-sald.jpg';
// import Contacto from '../Contacto/Contacto';

// export default function Home() {
//   return (
//     <div className="container-fluid">
//       <Navbar />
//       <div className="inicio">
//         <div className="row">
//           <div className="col-md-12 custom-height">
//             <h2>Asesoría y Procesos de habilitación para IPS</h2>
//           </div>
//           <div className="col-md-6">
//             <img
//               src={asesoria}
//               alt="asesoria-salud"
//               className="img-fluid"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="conten-somos">
//         <h2>En (nombre empresa)</h2>
//         <br />
//         <p className="parrafo">
//           Ayudamos y ejecutamos los procesos de capacitaciones, asesorías y
//           acompañamos en el proceso de habilitación
//         </p>
//       </div>
//       <Contacto />
//       <Redes />
//       <Footer />
//     </div>
//   );
// }
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navbar from '../Nabvar/Navbar';
import Redes from '../Redes/Redes';
import Footer from '../Footer/Footer';
import asesoria from '../../../assets/aseosira-sald.jpg';
import Contacto from '../Contacto/Contacto';
import './home.css'

export default function Home() {
  return (
    <Container fluid>
      <Navbar />
      <div className="inicio">
        <hr />
        <Row>
          <Col md={12} className="custom-height">
            <h2>Asesoría y Procesos de habilitación para IPS</h2>
          </Col>
          
        </Row>
      </div>
      <div className="conten-somos">
        <Row>
          <Col md={6}>
            <Image src={asesoria} alt="asesoria-salud" fluid className="imagen-estilo" />
          </Col>
          <Col md={6}>
            <div className="contenido-texto">
              <h2>En (nombre empresa)</h2>
              <p className="parrafo">
                Ayudamos y ejecutamos los procesos de capacitaciones, asesorías y
                acompañamos en el proceso de habilitación
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Contacto />
      <Redes />
      <Footer />
    </Container>
  );
}

