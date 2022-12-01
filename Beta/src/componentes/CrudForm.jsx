//rafc
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-bootstrap";

const initialForm = {
  name: "",
  constraseña: "",
  id: null,
};

export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    //Aqui sabemos si sera acctualización o inserción
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <Container>
      <h1 className="nombre-app">InstaYA</h1>
      <Row>
        <Col></Col>
        <Col>
          <h3> {dataToEdit ? "Editar" : "Agregar"} </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="contraseña"
                onChange={handleChange}
                value={form.contraseña}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
            {"  "}
            <Button variant="primary" type="reset" to="/Perfil">
              Limpiar
            </Button>
            <Button variant="primary" type="reset" to="/Perfil" href="/Perfil">
              Iniciar Sesion
            </Button>
            
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

// const handleSubmit = (e) => {

//   e.preventDefault()

//   console.log(form)

//   fetch('/api/task',{

//     method: "POST",

//     body: JSON.stringify(form),

//     headers: {

//         Accept: "application/json",

//         "Content-Type": "application/json"

//         }

//   })

//   .then(res => res.json())

//   .then(data => console.log(data))

//   .catch(error => console.error(error))
