import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Producto = sequelize.define(
    "Producto", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: DataTypes.INTEGER,
        img: DataTypes.INTEGER,
        descripcion:DataTypes.INTEGER,
        precio:DataTypes.INTEGER,
        masvendido:DataTypes.BOOLEAN,
        
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);