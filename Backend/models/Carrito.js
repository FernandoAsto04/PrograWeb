import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto_Carrito } from "./Producto_Carrito.js"

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

Carrito.hasMany(Producto_Carrito, {
    foreignKey: "carritoid",
    sourceKey: "id"
});

Producto_Carrito.belongsTo(Carrito, {
    foreignKey: "carritoid",
    targetKey: "id"
});