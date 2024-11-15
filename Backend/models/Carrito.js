import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//Falta poner la FK
export const Carrito = sequelize.define(
    "Carrito",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        total: DataTypes.FLOAT,
        fecha_creacion: DataTypes.DATE,
        fecha_actualizacion: DataTypes.DATE,

        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);