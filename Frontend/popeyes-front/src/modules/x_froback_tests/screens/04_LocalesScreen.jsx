import {useEffect, useState} from 'react';
import FormLocales from '../components/04_FormLocales.jsx';
import ListaLocales from '../components/04_ListaLocales.jsx';
import {
    obtenerLocales,
    crearLocal
} from "../services/04_LocalServices.js"

export default function LocalesScreen() {
    const [locales, setLocales] = useState([]); //Antes: publicaciones, setPublicaciones

    useEffect(() => {
        const cargarLocales = async () => {
            const datos = await obtenerLocales();  // Usamos el servicio obtenerLocales
            setLocales(datos || []);
        };
        cargarLocales();
    }, []);

    const agregarLocal = async (nuevoLocal) => {
        const usuarioCreado = await crearLocal(nuevoLocal);
        if(usuarioCreado){
            setLocales([...locales, usuarioCreado]);
        }
    };

    return (
        <div>
            <h1>• Gestión de Locales</h1>
            <FormLocales
                agregarLocal={agregarLocal}
            />
            <ListaLocales
                locales={locales}
            />
        </div>
    );
}
