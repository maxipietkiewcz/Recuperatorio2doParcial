// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const express = require("express");
const router = express.Router();
const {
    listarReservas,
    mostrarFormularioCrear,
    guardarReserva,
    mostrarFormularioEditar,
    editarReserva,
    eliminarReserva,
} = require("../controllers/reserva.controllers");

//ruta para mostrar todas las reservas
router.get("/", listarReservas);

//ruta para mostrar formulario de crear
router.get("/crear", mostrarFormularioCrear);

//ruta para guardar una reserva
router.post("/crear", guardarReserva);

//ruta para mostrar formulario de editar
router.get("/editar/:id", mostrarFormularioEditar);

//ruta para editar una reserva
router.post("/editar/:id", editarReserva);

//ruta para eliminar una reserva
router.get("/eliminar/:id", eliminarReserva);



 module.exports = router;