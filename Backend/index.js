import express, {json} from 'express';
import cors from 'cors';
import { sequelize } from './database/database.js';


import { Carrito } from './models/Carrito.js';
import { Combo } from './models/Combo.js';
import { Despacho } from './models/Despacho.js';
import { Direccion } from './models/Direccion.js';
import { Extra } from './models/Extra.js';
import { Local } from './models/Local.js';
import { MetodoPago } from './models/MetodoPago.js';
import { Pago } from './models/Pago.js';
import { Pedido } from './models/Pedido.js';
import { TipoDocumento } from './models/TipoDocumento.js';
import { TipoPedido } from './models/TipoPedido.js';
import { Usuario } from './models/Usuario.js';

const app = express();
const port = 3002;


app.use(json());
app.use(cors());

async function verificarConexion(){
    try {
        await sequelize.authenticate();
        console.log("Conexión a la DB exitosa")
        await sequelize.sync(); //Sincroniza los cambios 
    } catch (error) {
        console.error("Ocurrió un error al conectarse a la DB", error)
    }
}

app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});
