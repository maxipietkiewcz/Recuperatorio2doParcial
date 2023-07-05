// TODO: Crear modelo de datos de Reserva
const { sequelize, DataTypes } = require("../config/db");

const Reserva = sequelize.define(
    "Reserva",
    {
        idReserva: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaReserva: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechaSolicitada: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        costoViaje: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }
)

module.exports = Reserva