const Reserva = require("../models/Reserva");

const listarReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.render("index", { reservas: reservas });
  } catch (error) {
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
    console.log(error);
  }
};

const mostrarFormularioCrear = (req, res) => {
  res.render("create");
};

const guardarReserva = async (req, res) => {
  try {
    const reservas = req.body;
    const respuesta = await Reserva.create(reservas);
    res.redirect("/api/reservas");
  } catch (error) {
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
    console.log(error);
  }
};//profe no se porque no anda esto -.- literalmente hice lo mismo en otro repo y funciona

const mostrarFormularioEditar = async (req, res) => {
  try {
    const id = req.params.id;
    const reserva = await Reserva.findByPk(id);
    res.render("editar", { reserva });
  } catch (error) {
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
    console.log(error);
  }
};

const editarReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const reserva = req.body;
    await Reserva.update(reserva, { where: { id: id } });
    res.redirect("/api/reservas");
  } catch (error) {
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
    console.log(error);
  }
};

const eliminarReserva = async (req, res) => {
  try {
    const id = req.params.id;
    await Reserva.destroy({ where: { id } });
    res.redirect("/api/reservas");
  } catch (error) {
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
    console.log(error);
  }
};

module.exports = {
  listarReservas,
  mostrarFormularioCrear,
  guardarReserva,
  mostrarFormularioEditar,
  editarReserva,
  eliminarReserva,
};
