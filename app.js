const express = require("express");
const app = express();
require("dotenv").config();

// Requerir middleware
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use("/favicon.ico", (req, res) => res.status(204).end());

// Requerir body parser
const bodyParser = require("body-parser");

// Configuración de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Motor de plantillas
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

// Requerir config donde está nuestra base de datos
const { db_connection } = require("./config/db");

// Conexión a la base de datos
db_connection();

// Requerir las rutas
const reserva = require("./routes/reserva.routes");

// Configuración de las rutas
app.use("/api/reservas", reserva);

// Ruta para manejar errores 404
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Levantar el servidor
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log("El servidor está conectado en http://localhost:" + puerto + "/api/reservas");
});
