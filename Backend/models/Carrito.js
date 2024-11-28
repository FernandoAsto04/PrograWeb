import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Combo } from "./Combo.js"
import { Combo_Extra } from "./Combo.js";

//Falta poner la FK
export const Carrito = sequelize.define(
    "Carrito",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        total: DataTypes.FLOAT,
        fecha_creacion: DataTypes.DATE,
        fecha_actualizacion: DataTypes.DATE,

        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

const ComboCarrito = sequelize.define(
    "ComboCarrito",{
            cantidad: DataTypes.INTEGER,
            subtotal: DataTypes.FLOAT,
            estado: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
    },{
        timestamps:false,
        freezeTableName:true
    }
);

Carrito.belongsToMany(Combo,{
    through: ComboCarrito
});

Combo.belongsToMany(Carrito,{
    through: ComboCarrito
});

ComboCarrito.hasMany(Combo_Extra, {
    foreignKey: "comboExtraId",
    sourceKey: "id"
});

Combo_Extra.belongsTo(ComboCarrito, {
    foreignKey: "comboExtraId",
    targetKey: "id"
});