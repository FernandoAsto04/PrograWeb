import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Combo } from "./Combo.js";


export const Seccion = sequelize.define(
    "Seccion",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre:DataTypes.STRING,

        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

Seccion.hasMany(Combo, {
    foreignKey: "seccionId",
    sourceKey: "id"
});

Combo.belongsTo(Seccion, {
    foreignKey: "seccionId",
    targetKey: "id"
});