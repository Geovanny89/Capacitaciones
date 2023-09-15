// import React from 'react'
// import './contacto.css';

// export default function Contacto() {
//   return (
//     <div className='form-contacto' id='contacto'>
//         <h1>Contactános</h1>
//         <form action="" className='contacto' id='contacto'>
//             <div className="nombre-contacto">
                
//                 <input type="text" name='Nombre' placeholder=' Nombre'/>

//             </div>
//             <div className="apellido-contacto">
                
//                 <input type="text" name='apellido' placeholder=' Apellido'/>

//             </div>
//             <div className="correo-contacto">
                
//                 <input type="text" name='correo' placeholder=' Correo@correo'/>

//             </div>
//             <div className="tel-contacto">
                
//                 <input type="text" name='Telefono' placeholder=' Telefono'/>

//             </div>
//              <div className="textA-contacto">
                
//                 <textarea type="text" name='Telefono' placeholder=' Mensaje'/>

//             </div>
//             <button>Enviar</button>
//         </form>

//     </div>
//   )
// }
import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contacto.css';

export default function Contacto() {
  return (
    <Container id="contacto" className="d-flex justify-content-center align-items-center vh-100">
     
      <Form className="contacto" id="contacto">
      <h1>Contactános</h1>
      <hr />
        <Row>
          <Col>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Correo@correo" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" placeholder="Teléfono" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
