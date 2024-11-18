import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Combo } from "./Combo";

export const Bebida = sequelize.define(
    "Bebida",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING,
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

Bebida.hasMany(Combo, {
    foreignKey: "bebidaId",
    sourceKey: "id"
});

Combo.belongsToMany(Bebida, {
    foreignKey: "bebidaId",
    targetKey: "id"
});