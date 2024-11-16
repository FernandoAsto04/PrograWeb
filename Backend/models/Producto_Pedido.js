import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pedido } from "./Pedido.js"
//faltan las pk
export const Producto_Pedido = sequelize.define(
    "Producto_Pedido", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        cantidad: DataTypes.INTEGER,

        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

Pedido.hasMany(Producto_Pedido, {
    foreignKey: "productoPedidoid",
    sourceKey: "id"
});

Producto_Pedido.belongsTo(Pedido, {
    foreignKey: "productoPedidoid",
    targetKey: "id"
});