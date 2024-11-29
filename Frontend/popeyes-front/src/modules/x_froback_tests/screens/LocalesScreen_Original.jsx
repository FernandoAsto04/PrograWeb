import {useEffect, useState} from 'react';
import LocalForm from '../components/LocalForm.jsx';
import ListaLocales from '../components/ListaLocales.jsx';
import {
    obtenerLocales,
    crearLocal
} from "../../locales/services/LocalesService.js"

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
        const publicacionCreada = await crearLocal(nuevoLocal);
        if(publicacionCreada){
            setLocales([...locales, publicacionCreada]);
        }
    };

    return (
        <div>
            <h1>• Gestión de Locales</h1>
            <LocalForm
                agregarLocal={agregarLocal}
            />
            <ListaLocales
                locales={locales}
            />
        </div>
    );
}
