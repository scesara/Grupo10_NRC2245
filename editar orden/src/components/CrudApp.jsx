import React, { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "1",
    constellation: "Entregado",
  },
  {
    id: 2,
    name: "2",
    constellation: "Guardado",
  },
  {
    id: 3,
    name: "3",
    constellation: "Cancelado",
  },
  {
    id: 4,
    name: "4",
    constellation: "Cancelado",
  },
  {
    id: 5,
    name: "5",
    constellation: "Entregado",
  },
];

export const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null)
    //Si la variable es null haremos una inserción
    // cuando la variable sea true será una actualización

    const createData = (data) => { 
        //creamos un id on el Date.now(estampa de tiempo en el seg actual)
        data.id = Date.now()
        setDb([...db, data] )
    }
    
    const updateData = (data) => { 
        let newData = db.map((el) => (el.id === data.id ? data : el))
        setDb(newData)
    }
    
    const deleteData = (id) => { 
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id} ' ?`)
        if (isDelete){

            let newData = db.filter((el) => el.id !== id)
            setDb(newData)
        } else {
            return
        }
    }
    
  return (
    <div>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <br></br>
      <br></br>
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};
