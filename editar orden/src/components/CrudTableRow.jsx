import React from "react";
import Button from "react-bootstrap/Button";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constellation} </td>
      <td align="center">
        <Button onClick={() => setDataToEdit(el)} variant="primary" size="sm">
          Editar
        </Button>
        {"  "}
        <Button onClick={() => deleteData(el.id)} variant="danger" size="sm">
          Eliminar
        </Button>
      </td>
    </tr>
  );
};
