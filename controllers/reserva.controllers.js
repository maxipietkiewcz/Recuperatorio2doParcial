const ctrlReservas = require("../models/Reserva")


const listarReservas = async (req, res) => {
    try {
        const reservas = await ctrlReservas.findAll();
        res.render("index", { reservas : reservas });
    } catch (error) {
        res.status(500).json({ error : "ocurrio un error en el servidor" });
        console.log(error)
    }
};

const mostrarFormularioCrear = (req, res) => {
    res.render("create");
  };

const guardarReserva = async (req, res) => {
    try {
        const reservas = await ctrlReservas.create(reservas);
        res.redirect("/api/reservas");
    } catch (error) {
        res.status(500).json({ error : "ocurrio un error en el servidor" });
        console.log(error)
    }
};

const mostrarFormularioEditar = async (req, res) => {
    try {
        const id = req.params.id;
        const reservas = await ctrlReservas.findByPk(id);
        res.render("editar", { reservas});
    } catch (error) {
        res.status(500).json({ error : "ocurrio un error en el servidor" });
        console.log(error)
    }
};

const editarReserva = async (req, res) => {
    try {
        const id = req.params.id;
        const reservas = req.body;
        await ctrlReservas.update(reservas, { where: { idReserva: id } });
        res.redirect("/api/reservas");
    } catch (error) {
        res.status(500).json({ error : "ocurrio un error en el servidor" });
        console.log(error)
    }
};

const eliminarReserva = async (req, res) => {
    try {
      const id = req.params.id;
      await Reservas.destroy({ where: { id } });
      res.redirect("/api/reservas");
    } catch (error) {
      res.status(500).json({
        error: "Ocurrió un error en el servidor",
      });
      console.log(error);
    }
  };




module.exports = {
    listarReservas,
    mostrarFormularioCrear,
    guardarReserva,
    mostrarFormularioEditar,
    editarReserva,
    eliminarReserva
};