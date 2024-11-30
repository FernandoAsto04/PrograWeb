import express, {json} from 'express';
import cors from 'cors';
import { sequelize } from './database/database.js';
import { Direccion } from './models/Direccion.js';
import { TipoDocumento } from './models/TipoDocumento.js';
import { MetodoPago } from './models/MetodoPago.js';
import { Extra } from './models/Extra.js';
import { Local } from './models/Local.js';
import { Despacho } from './models/Despacho.js';
import { TipoPedido } from './models/TipoPedido.js';




const app = express();
const port = 3002;


app.use(express.json()); // Estaba así: app.use(json());
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

//Dirección
app.get("/direcciones", async function(req, res){
    const direcActiva = await Direccion.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(direcActiva)
});

app.post("/direcciones", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const nuevaDirecc = await Direccion.create(data);
        res.status(200).json(nuevaDirecc);
    }else{
        res.status(404).send("Error al crear")
    }
});


//TipoDocumento
app.get("/tipodocumento", async function(req, res){
    const tipdocActivo = await TipoDocumento.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(tipdocActivo);
});

app.post("/tipodocumento", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const nuevotipdoc = await TipoDocumento.create(data);
        res.status(200).json(nuevotipdoc);
    }else{
        res.status(404).send("Error al crear")
    }
});


//MetodoPago
app.get("/metodopago", async function(req, res){
    const metopagoActivo = await MetodoPago.findAll({
        where:{
            estado:true
        }
    });
    res.send(200).json(metopagoActivo)
});

app.post("/metodopago", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const nuevometpago = await MetodoPago.create(data);
        res.status(200).json(nuevometpago);
    }else{
        res.status(404).send("Error al crear")
    }
});


//Extras
app.get("/extras", async function(req, res){
    const extraActivo = await Extra.findAll({
        where: {
            estado:true
        }
    });
    res.status(200).json(extraActivo);
});

app.post("/extras", async function(req, res){
    const data = req.body;
    if (data.nombre && data.tipo) {
        const nuevoExtra = await Extra.create(data);
        res.status(200).json(nuevoExtra);
    }else{
        res.status(404).send("Error al crear")
    }
});


//Locales
app.get("/locales", async function(req, res){
    const localActivo = await Local.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(localActivo);
});

app.post("/locales", async function(req, res){
    const data = req.body;
    if (data.nombre && data.direccion && data.telefono) {
        const nuevoLocal = await Local.create(data);
        res.status(200).json(nuevoLocal);
    }else{
        res.status(404).send("Error al crear")
    }
});


//Despacho
app.get("/despacho", async function(req, res){
    const despachoActivo = await Despacho.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(despachoActivo);
});

app.post("/despacho", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const nuevoDespacho = await Despacho.create(data);
        res.status(200).json(nuevoDespacho);
    }else{
        res.status(404).send("Error al crear")
    }
});


//Tipo Pedido
app.get("/tipopedido", async function(req, res){
    const tipedidoActivo = await TipoPedido.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(tipedidoActivo);
});

app.post("/tipopedido", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const nuevotipedido = await TipoPedido.create(data);
        res.status(200).json(nuevotipedido);
    }else{
        res.status(404).send("Error al crear")
    }
});



app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});
