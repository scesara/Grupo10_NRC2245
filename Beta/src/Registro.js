const express = require("express");
const app = express();
const path = require("path");
const { mongoose } = require("./Database");

//setting
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use("/ordennueva", require("./rutas/ruta-orden"));

// static files
app.use(express.static(path.join(__dirname, "src")));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Servidor en puerto ${app.get("port")}`);
});
