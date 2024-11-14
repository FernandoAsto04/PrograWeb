import express from 'express'

const app = express();
const port = 1014;

app.use(express.json());



app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
});