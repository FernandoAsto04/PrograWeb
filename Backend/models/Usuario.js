import { DataTypes } from "sequelize";
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
            type: DataTypes.STRING
        },
        apellidos:{
            type: DataTypes.STRING
        },
        correo:{
            type: DataTypes.STRING
        },
        contrasenia:{
            type: DataTypes.STRING
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