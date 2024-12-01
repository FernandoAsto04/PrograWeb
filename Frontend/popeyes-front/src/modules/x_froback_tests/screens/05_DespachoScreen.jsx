import {useEffect, useState} from 'react';
import FormDespachos from '../components/05_FormDespachos.jsx';
import ListaDespachos from '../components/05_ListaDespachos.jsx';
import {
    obtenerDespacho,
    crearDespacho
} from "../services/05_DespachosServices.js"

export default function DespachosScreen() {
    const [despachos, setDespachos] = useState([]); //Antes: publicaciones, setPublicaciones

    useEffect(() => {
        const cargarDespachos = async () => {
            const datos = await obtenerDespacho();  // Usamos el servicio obtenerDespacho
            setDespachos(datos || []);
        };
        cargarDespachos();
    }, []);

    const agregarDespacho = async (nuevoDespacho) => {
        const usuarioCreado = await crearDespacho(nuevoDespacho);
        if(usuarioCreado){
            setDespachos([...despachos, usuarioCreado]);
        }
    };

    return (
        <div>
            <h1>• Gestión de Despachos</h1>
            <FormDespachos
                agregarDespacho={agregarDespacho}
            />
            <ListaDespachos
                despachos={despachos}
            />
        </div>
    );
}
