import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

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