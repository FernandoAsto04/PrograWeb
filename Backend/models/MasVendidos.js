import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Combo } from "./Combo.js";


export const MasVendidos = sequelize.define(
    "MasVendidos",{
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

MasVendidos.hasMany(Combo, {
    foreignKey: "MasVendidosId",
    sourceKey: "id"
});

Combo.belongsTo(MasVendidos, {
    foreignKey: "MasVendidosId",
    targetKey: "id"
});