import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Carrito } from "./Carrito.js";

// Así se crea un modelo, osea una tabla, se comporta de igual forma como el Modelo Relacional
//Falta la FK Documento
export const Usuario = sequelize.define(
    "Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        correo: DataTypes.STRING,
        contrasenia: DataTypes.STRING,
        numDocumento: DataTypes.STRING,
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

Usuario.hasMany(Carrito, {
    foreignKey: "usuarioId",
    sourceKey: "id"
});

Carrito.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    targetKey: "id"
})
