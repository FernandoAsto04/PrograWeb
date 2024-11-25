import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pedido } from "./Pedido.js";

export const Pago = sequelize.define(
    "Pago",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        monto: DataTypes.FLOAT,
        fecha: DataTypes.DATE,
        
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

Pedido.hasMany(Pago, {
    foreignKey: "pagoid",
    sourceKey: "id"
}); 

Pago.belongsTo(Pedido, {
    foreignKey: "pagoid",
    targetKey: "id"
});

