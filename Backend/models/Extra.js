import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Producto } from "./Producto";

export const Extra = sequelize.define(
    "Extra", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: DataTypes.STRING,
        tipo: DataTypes.STRING,
        
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

export const Producto_Extra = sequelize.define(
    "Producto_Extra",{
        estado:{
            seccion: DataTypes.STRING
        },

    },{
        timestamps:false,
        freezeTableName:true
    }
);

Extra.belongsToMany(Producto,{
    through: Producto_Extra
});

Producto.belongsToMany(Extra,{
    through: Producto_Extra
});