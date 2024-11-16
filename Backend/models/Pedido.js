import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Usuario } from "./Usuario.js";

export const Pedido = sequelize.define(
    "Pedido",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        total: DataTypes.FLOAT,
        fecha_creacion: DataTypes.DATE,
        fecha_actualizacion: DataTypes.DATE,
        
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

Pedido.belongsTo(Usuario, {
    foreignKey: "pedidoid",
    targetKey: "id"
});

Usuario.hasMany(Pedido, {
    foreignKey: "pedidoid",
    sourceKey: "id"
});