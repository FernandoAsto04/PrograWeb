import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Combo } from "./Combo.js";


export const Pieza = sequelize.define(
    "Pieza",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre:DataTypes.STRING,
        cantidad:DataTypes.INTEGER,

        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

Pieza.hasMany(Combo, {
    foreignKey: "PiezaId",
    sourceKey: "id"
});

Combo.belongsTo(Pieza, {
    foreignKey: "PiezaId",
    targetKey: "id"
});

