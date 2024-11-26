import express, {json} from 'express';
import cors from 'cors';
import { sequelize } from './database/database.js';


import { Carrito } from './models/Carrito.js';
import { Direccion } from './models/Direccion.js';
import { Documento } from './models/Documento.js';
import { MetodoPago } from './models/MetodoPago.js';
import { Pago } from './models/Pago.js';
import { Pedido } from './models/Pedido.js';
import { Producto_Pedido } from './models/Producto_Pedido.js';
import { Producto } from './models/Combo.js';
import { TipoDocumento } from './models/TipoDocumento.js';
import { TipoPedido } from './models/TipoPedido.js';
import { TipoProducto } from './models/TipoProducto.js';
import { Usuario } from './models/Usuario.js';
import { Local, Local_Despacho } from './models/Local.js';
import { Despacho } from './models/Despacho.js';
import { Pieza } from './models/Pieza.js';
import { Nugget } from './models/Nugget.js';
import { Sandwich } from './models/Sandwich.js';
import { TamanioPapa } from './models/TamanioPapa.js';
import { Salsa } from './models/Salsa.js';
import { Roll } from './models/Roll.js';
import { MasVendidos } from './models/MasVendidos.js';
import { Seccion } from './models/Seccion.js';
import { Extra } from './models/Extra.js';
import { Bebida } from './models/Bebida.js';

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
/*Usuarios*/

app.get("/usuarios", async function(req, res){
    const usuariosActivos = await Usuario.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(usuariosActivos);
});

app.get("/usuarios/:id", async function(req, res){
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id); //Sirve solo para buscar por ID
    if (usuario) {
        res.status(200).json(usuario);
    }else{
        res.status(404).send("Error al recuperar el usuario")
    }
})

app.post("/usuarios", async function(req, res){
    const data = req.body;
    if (data.nombres && data.apellidos && data.correo && data.contrasenia) {
        const nuevoUsu = await Usuario.create(data);
        res.status(200).json(nuevoUsu);
    }else{
        res.status(404).send("Error al crear el usuario")
    }
});

app.put("/usuarios/:id", async function(req, res){
    const data = req.body;
    try {
        await Usuario.update(data, {
            where: {
                id: req.params.id
            }
        });
        const usu = await Usuario.findOne({  //Es más amplio puede buscar por cualquier otro atributo, sirve como un filtro
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(usu);

    } catch (error) {
        res.status(404).send("Ocurrió un error durante la ejecución")
    }
});

app.delete("/usuarios/:id", async function(req, res){
    const id = req.params.id;
    try {
        await Usuario.update(
            {estado:false}, {where: {id:id}});

        const usu = await Usuario.findByPk(id);
        res.status(200).json(usu);

    } catch (error) {
        res.status(404).send("Error al eliminar al usuario");
    }
});




/*Direccion*/

app.get("/direcciones", async function(req, res){
    const direccActivas = await Direccion.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(direccActivas);
});

app.get("/direcciones/:id", async function(req, res){
    const id = req.params.id;
    const direcc = await Direccion.findByPk(id); //Sirve solo para buscar por ID
    if (direcc) {
        res.status(200).json(direcc);
    }else{
        res.status(404).send("Error al recuperar la direccion")
    }
});

app.post("/direcciones", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const nuevaDirecc = await Direccion.create(data);
        res.status(200).json(nuevaDirecc);
    }else{
        res.status(404).send("Error al crear el usuario")
    }
});

app.put("/direcciones/:id", async function(req, res){
    const data = req.body;
    try {
        await Direccion.update(data, {
            where: {
                id: req.params.id
            }
        });
        const direcc = await Direccion.findOne({  //Es más amplio puede buscar por cualquier otro atributo, sirve como un filtro
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(direcc);

    } catch (error) {
        res.status(404).send("Ocurrió un error durante la ejecución")
    }
});

app.delete("/direcciones/:id", async function(req, res){
    const id = req.params.id;
    try {
        await Direccion.update(
            {estado:false}, {where: {id:id}});

        const direcc = await Direccion.findByPk(id);
        res.status(200).json(direcc);

    } catch (error) {
        res.status(404).send("Error al eliminar la dirección");
    }
});


/*Documento*/
app.get("/documentos", async function(req, res){
    const docActivos = await Documento.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(docActivos);
});

app.get("/documentos/:id", async function(req, res){
    const id = req.params.id;
    const doc = await Documento.findByPk(id); //Sirve solo para buscar por ID
    if (doc) {
        res.status(200).json(doc);
    }else{
        res.status(404).send("Error al recuperar la direccion")
    }
});


app.post("/documentos", async function(req, res){
    const data = req.body;
    if (data.numero) {
        const nuevodoc = await Documento.create(data);
        res.status(200).json(nuevodoc);
    }else{
        res.status(404).send("Error al crear el documento")
    }
});




/*TipoDocumento*/

app.get("/tipodocumentos", async function(req, res){
    const tipdocActivo = await TipoDocumento.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(tipdocActivo);
});

app.get("/comidas")

app.get("/commidas/:id")



app.get("/tipodocumentos/:id", async function(req, res){
    const id = req.params.id;
    const tipdo = await TipoDocumento.findByPk(id); //Sirve solo para buscar por ID
    if (tipdo) {
        res.status(200).json(tipdo);
    }else{
        res.status(404).send("Error al recuperar la direccion")
    }
});

app.post("/tipodocumentos", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const ntipodoc = await TipoDocumento.create(data);
        res.status(200).json(ntipodoc);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

app.post("/tipodocumentos/:id/documentos", async (req, res) =>{
    const datoDoc = req.body;
    const nuevoDoc = await Documento.create(datoDoc);
    const tipdoc = await TipoDocumento.findByPk(req.params.id);
    
    tipdoc.addDocumento(nuevoDoc);
    res.status(200).json(nuevoDoc);
});

app.post("/pieza/:id/tamaniopapa/:id/bebida/:id/extra/:id/combo", async (req, res) =>{
    const datoDoc = req.body;
    const nuevoDoc = await Documento.create(datoDoc);
    
    const tipdoc = await TipoDocumento.findByPk(req.params.id);
    
    tipdoc.addDocumento(nuevoDoc);
    res.status(200).json(nuevoDoc);
});



/*Local*/
app.get("/locales", async function(req, res){
    const localesActivos = await Local.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(localesActivos);
});

app.post("/locales", async function(req, res){
    const data = req.body;
    if (data.nombre && data.direccion && data.telefono) {
        const local = await Local.create(data);
        res.status(200).json(local);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*Despacho */
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
        const despacho = await Despacho.create(data);
        res.status(200).json(despacho);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*Locales_Despacho */

app.get("/localdespacho", async function(req, res){
    const ldActivo = await Local_Despacho.findAll({
        where:{
            estado:true
        }
    });
    res.status(200).json(ldActivo);
});

app.post("/localdespacho", async (req, res) => {
    const { localId, despachosIds } = req.body;

    try {
        // Asignar los despachos al local directamente
        const local = await Local.findByPk(localId);
        const despachos = await Despacho.findAll({ where: { id: despachosIds } });

        await local.setDespachos(despachos); // Sobrescribe los despachos actuales

        res.status(200).json({ message: "Despachos asignados correctamente." });
    } catch (error) {
        console.error(error);
        res.status(500).send("Ocurrió un error al asignar los despachos.");
    }
});


/*Pieza */
app.post("/pieza", async function(req, res){
    const data = req.body;
    if (data.nombre && data.cantidad) {
        const pieza = await Pieza.create(data);
        res.status(200).json(pieza);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*Nugget */
app.post("/nugget", async function(req, res){
    const data = req.body;
    if (data.nombre && data.cantidad) {
        const nugget = await Nugget.create(data);
        res.status(200).json(nugget);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*Sandwich */
app.post("/sandwich", async function(req, res){
    const data = req.body;
    if (data.nombre && data.cantidad) {
        const sand = await Sandwich.create(data);
        res.status(200).json(sand);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*TamanioPapa */
app.post("/tamaniopapa", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const tamanio = await TamanioPapa.create(data);
        res.status(200).json(tamanio);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*Salsa */
app.post("/salsa", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const salsa = await Salsa.create(data);
        res.status(200).json(salsa);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});



/*Roll */
app.post("/roll", async function(req, res){
    const data = req.body;
    if (data.nombre && data.cantidad) {
        const roll = await Roll.create(data);
        res.status(200).json(roll);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*Seccion */
app.post("/seccion", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const seccion = await Seccion.create(data);
        res.status(200).json(seccion);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*Extra */
app.post("/extra", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const extra = await Extra.create(data);
        res.status(200).json(extra);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});

/*Bebida */
app.post("/bebida", async function(req, res){
    const data = req.body;
    if (data.nombre) {
        const bebida = await Bebida.create(data);
        res.status(200).json(bebida);
    }else{
        res.status(404).send("Error al crear el tipo de documento")
    }
});











/*Inicializar */

app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});