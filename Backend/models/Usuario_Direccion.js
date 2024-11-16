import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Direccion } from "./Direccion.js";
import { Usuario } from "./Usuario.js";

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

Direccion.hasMany(Usuario_Direccion, {
    foreignKey: "usuarioDireccionid",
    targetKey: "id"
});

Usuario_Direccion.belongsTo(Direccion, {
    foreignKey: "usuarioDireccionid",
    sourceKey: "id"
});

Usuario.hasMany(Usuario_Direccion, {
    foreignKey: "usuarioDireccionid",
    targetKey: "id"
});

Usuario_Direccion.belongsTo(Usuario, {
    foreignKey: "usuarioDireccionid",
    sourceKey: "id"
});