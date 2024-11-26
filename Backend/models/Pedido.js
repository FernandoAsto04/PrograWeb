import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Usuario } from "./Usuario.js";
import { Combo_Extra } from "./Combo.js";

export const Pedido = sequelize.define(
    "Pedido",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        total: DataTypes.FLOAT,
        fecha_creacion: DataTypes.DATE,
        fecha_actualizacion: DataTypes.DATE,
        numPedido: DataTypes.STRING,
        
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);

export const PedidoDetalle = sequelize.define(
    "PedidoDetalle",{
        estado:{
            cantidad: DataTypes.INTEGER,
            estado: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },

    },{
        timestamps:false,
        freezeTableName:true
    }
);

Pedido.belongsToMany(Combo_Extra,{
    through: PedidoDetalle
});

Combo_Extra.belongsToMany(Pedido,{
    through: PedidoDetalle
});





Pedido.belongsTo(Usuario, {
    foreignKey: "pedidoid",
    targetKey: "id"
});

Usuario.hasMany(Pedido, {
    foreignKey: "pedidoid",
    sourceKey: "id"
});