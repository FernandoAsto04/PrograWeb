import express from 'express';
import cors from 'cors';
import { sequelize } from './database/database.js';
import { Usuario } from './models/Usuario.js';

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

app.get("/usuarios", async function(req, res){
    const usuariosActivos = await Usuario.findAll();
    res.status(200).json(usuariosActivos);
});

app.post("/usuarios", async function(req, res){
    const data = req.body;
    if (data.nombres && data.apellidos && data.correo && contrasenia) {
        const nuevoUsu = await Usuario.create(data);
        res.status(200).json(nuevoUsu);
    }else{
        res.status(200).send("Error al crear el usuario")
    }
});






app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});