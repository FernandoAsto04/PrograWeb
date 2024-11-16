import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./Producto.js"

export const TipoProducto = sequelize.define(
    "TipoProducto", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: DataTypes.STRING,

        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

TipoProducto.hasMany(Producto, {
    foreignKey: "tipoProductoid",
    sourceKey: "id"
});

Producto.belongsTo(TipoProducto, {
    foreignKey: "tipoProductoid",
    targetKey: "id"
});