import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pedido } from "./Pedido.js";

export const TipoPedido = sequelize.define(
    "TipoPedido", {
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

//No se porque no funciona D:
TipoPedido.hasMany(Pedido, {
    foreignKey: "tipoPedidoid",
    sourceKey: "id"
});

Pedido.belongsTo(TipoPedido, {
    foreignKey: "tipoPedidoid",
    targetKey: "id"
});