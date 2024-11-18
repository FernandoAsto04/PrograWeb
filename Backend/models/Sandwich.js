import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Combo } from "./Combo.js";


export const Sandwich = sequelize.define(
    "Sandwich",{
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

Sandwich.hasMany(Combo, {
    foreignKey: "SandwichId",
    sourceKey: "id"
});

Combo.belongsTo(Sandwich, {
    foreignKey: "SandwichId",
    targetKey: "id"
});