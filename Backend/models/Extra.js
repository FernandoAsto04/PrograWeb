import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Combo } from "./Combo";

export const Extra = sequelize.define(
    "Extra",{
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

Extra.hasMany(Combo, {
    foreignKey: "extraId",
    sourceKey: "id"
});

Combo.belongsTo(Extra, {
    foreignKey: "extraId",
    targetKey: "id"
});