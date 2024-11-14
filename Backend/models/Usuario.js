import { DataTypes, INTEGER } from "sequelize";
import { sequelize } from "../database/database.js";
// Así se crea un modelo, osea una tabla, se comporta de igual forma como el Modelo Relacional
export const Usuario = sequelize.define(
    "Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres:{
            type: DataTypes.INTEGER
        },
        apellidos:{
            type: DataTypes.INTEGER
        },
        correo:{
            type: DataTypes.INTEGER
        },
        contrasenia:{
            type: DataTypes.INTEGER
        },
        admin:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue:true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }


);