import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto_Pedido } from "./Producto_Pedido.js"

export const Producto = sequelize.define(
    "Producto",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        precio_base: DataTypes.FLOAT,
        descuento: DataTypes.FLOAT,
        precio_final: DataTypes.FLOAT,
        imagen: DataTypes.STRING,

        es_mas_vendido:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },

        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

Producto.hasMany(Producto_Pedido, {
    foreignKey: "productoid",
    sourceKey: "id"
});

Producto_Pedido.belongsTo(Producto, {
    foreignKey: "productoid",
    targetKey: "id"
});

