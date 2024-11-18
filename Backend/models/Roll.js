import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Combo } from "./Combo.js";


export const Roll = sequelize.define(
    "Roll",{
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

Roll.hasMany(Combo, {
    foreignKey: "RollId",
    sourceKey: "id"
});

Combo.belongsTo(Roll, {
    foreignKey: "RollId",
    targetKey: "id"
});