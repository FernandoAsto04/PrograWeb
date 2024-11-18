import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Combo } from "./Combo.js";


export const TamanioPapa = sequelize.define(
    "TamanioPapa",{
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

TamanioPapa.hasMany(Combo, {
    foreignKey: "tamaniopapaId",
    sourceKey: "id"
});

Combo.belongsTo(TamanioPapa, {
    foreignKey: "tamaniopapaId",
    targetKey: "id"
});