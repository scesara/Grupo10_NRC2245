const express = require("express");
const router = express.Router();
const ordennu = require("../modelos/OrdenNu.js");

router.post("/nuevaorden", async (req, res) => {
        
        const {fecha, ancho, largo, peso , Nombredestinatario,Tipodedocumento, Numerodedocumento,
            Departamento, ciudad, direccion, telefono, Nombredelremitente, Numerodelremitente, pago} = req.body //object turning into the request body
    const onueva = new ordennu({fecha, ancho, largo, peso , Nombredestinatario,Tipodedocumento, Numerodedocumento,
        Departamento, ciudad, direccion, telefono, Nombredelremitente, Numerodelremitente, pago})  //asigning values of the request

    await onueva.save() //saves on the data base

    console.log(onueva); //show object with atributes
    res.json({status:"received"}); // confirmation
});

router.get("/", async (req, res) => {
    const orde = await ordennu.find(); //finds ALL the objects within the data base
    console.log(orde); //shows to console contents of teh object
    res.json(orde); //answers the proper format
});