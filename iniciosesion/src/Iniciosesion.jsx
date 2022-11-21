import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Iniciosesion() {
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico:</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuerdame" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </div>
  )
}

