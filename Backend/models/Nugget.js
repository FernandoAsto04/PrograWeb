import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Combo } from "./Combo.js";


export const Nugget = sequelize.define(
    "Nugget",{
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

Nugget.hasMany(Combo, {
    foreignKey: "NuggetId",
    sourceKey: "id"
});

Combo.belongsTo(Nugget, {
    foreignKey: "NuggetId",
    targetKey: "id"
});