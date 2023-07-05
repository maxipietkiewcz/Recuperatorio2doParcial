const express = require("express");
const reserva = express.Router();
const {
  listarReservas,
  mostrarFormularioCrear,
  guardarReserva,
  mostrarFormularioEditar,
  editarReserva,
  eliminarReserva,
} = require("../controllers/reserva.controllers");

// Ruta para mostrar la lista de reservas
reserva.get("/", listarReservas);

// Ruta para mostrar el formulario de creación de reserva
reserva.get("/crear", mostrarFormularioCrear);

// Ruta para guardar una nueva reserva
reserva.post("/crear", guardarReserva);

// Ruta para mostrar el formulario de edición de reserva
reserva.get("/editar/:id", mostrarFormularioEditar);

// Ruta para actualizar una reserva
reserva.post("/editar/:id", editarReserva);

// Ruta para eliminar una reserva
reserva.get("/eliminar/:id", eliminarReserva);

module.exports = reserva;
