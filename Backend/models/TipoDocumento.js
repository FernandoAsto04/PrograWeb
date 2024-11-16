import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "../models/Documento.js";

export const TipoDocumento = sequelize.define(
    "TipoDocumento",{
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

TipoDocumento.hasMany(Documento, {
    foreignKey: "tipodocumentoId",
    sourceKey: "id"
});

Documento.belongsTo(TipoDocumento, {
    foreignKey: "tipodocumentoId",
    targetKey: "id"
});