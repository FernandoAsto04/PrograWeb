import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Combo = sequelize.define(
    "Combo", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: DataTypes.INTEGER,
        img: DataTypes.INTEGER,
        descripcion:DataTypes.INTEGER,
        precio:DataTypes.INTEGER,
        masvendido:DataTypes.BOOLEAN,
        
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

export const Combo_Extra = sequelize.define(
    "Combo_Extra",{
        estado:{
            seccion: DataTypes.STRING
        },

    },{
        timestamps:false,
        freezeTableName:true
    }
);

Extra.belongsToMany(Combo,{
    through: Combo_Extra
});

Combo.belongsToMany(Extra,{
    through: Combo_Extra
});