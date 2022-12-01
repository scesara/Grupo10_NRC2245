import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr align="center">
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3"> Sin datos </td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};
