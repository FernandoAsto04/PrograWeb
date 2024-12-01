import {useEffect, useState} from 'react';
import FormLocalesDespachos from '../components/06_FormLocalesDespachos.jsx';
import ListaLocalesDespachos from '../components/06_ListaLocalesDespachos.jsx';
import {
    obtenerLocalesDespachos,
    crearLocalDespacho
} from "../services/06_LocalesDespachoServices.js"

export default function LocalesDespachosScreen() {
    const [localesdespachos, setLocalesDespachos] = useState([]); //Antes: publicaciones, setPublicaciones

    useEffect(() => {
        const cargarLocalesDespachos = async () => {
            const datos = await obtenerLocalesDespachos();  // Usamos el servicio obtenerLocalesDespachos
            setLocalesDespachos(datos || []);
        };
        cargarLocalesDespachos();
    }, []);

    const agregarLocalDespacho = async (nuevoLocalDespacho) => {
        const localdespachoCreado = await crearLocalDespacho(nuevoLocalDespacho);
        if(localdespachoCreado){
            setLocalesDespachos([...localesdespachos, localdespachoCreado]);
        }
    };

    return (
        <div>
            <h1>• Gestión de LocalesDespachos</h1>
            <FormLocalesDespachos
                agregarLocalDespacho={agregarLocalDespacho}
            />

            {/* NOTA: Al parecer "ListaLocalesDespachos" no es necesario, ya que no se crea algo como tal, sino que se relacionan otras cosas */}
            <ListaLocalesDespachos
                localesdespachos={localesdespachos}
            />
        </div>
    );
}
