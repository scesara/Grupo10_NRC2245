const mongoose = require("mongoose");
const { Schema } = mongoose;

const  ordenShema = new Shema({
        fecha: { type: Date , required: true },
        Ancho: { type: Number, required: true },
        largo: { type: Number , required: true },
        alto: { type: Number , required: true },
        peso: { type: Number, required: true },
        Nombredestinatario: { type: String, required: true },
        Tipodedocumento: { type: String, required: true },
        Numerodedocumento: { type: Number, required: true },
        Departamento: { type: String, required: true },
        ciudad: { type: String, required: true },
        Direccion: { type: String, required: true },
        Telefono: { type: Number , required: true },
        Nombredelremitente: { type: String, required: true },
        Numerodelremitente : { type: Number, required: true },
        pago: { type: String, required: true },

});

module.exports = mongoose.model('ordennu', ordenSchema)