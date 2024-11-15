import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

//Falta agregar las FK
export const Usuario_Direccion = sequelize.define(
    "Usuario_Direccion",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },{
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);
