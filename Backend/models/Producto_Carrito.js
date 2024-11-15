import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//Falta la PK
export const Producto_Carrito = sequelize.define(
    "Producto_Carrito",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        cantidad: DataTypes.INTEGER,
        subtotal: DataTypes.FLOAT,

        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);