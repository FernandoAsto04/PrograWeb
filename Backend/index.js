import express from 'express';
import cors from 'cors';
import { sequelize } from './database/database.js';
import { Usuario } from './models/Usuario.js';
import { where } from 'sequelize';
import { Direccion } from './models/Direccion.js';

const app = express();
const port = 3002;

app.use(express.json());
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
















app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});