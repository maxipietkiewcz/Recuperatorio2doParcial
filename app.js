const express = require("express");
const app = express();
require("dotenv").config();

//requiriendo middleware
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

//requiriendo body parser
const bodyParser = require("body-parser");
//Configuracion de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

//requiriendo config donde esta nuestra base de datos
const { db_connection } = require("./config/db");
//conexion a la base de datos
db_connection();

//requiriendo rutas
const router = require("./routes/reserva.routes");
app.use("/api/reservas", router);

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

//levantar el servidor
const puerto = process.env.PORT || 3000;
app.listen(puerto, (req, res) => {
  try {
    console.log(
      "El server esta conectado en http://localhost:" + puerto + "/api/reservas"
    );
  } catch (error) {
    res.status(404).send(error);
  }
});
