import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./Producto.js"
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
  
Producto.hasMany(Producto_Carrito, {
    foreignKey: "productoCarritoid",
    sourceKey: "id"
});

Producto_Carrito.belongsTo(Producto, {
    foreignKey: "productoCarritoid",
    targetKey: "id"
});