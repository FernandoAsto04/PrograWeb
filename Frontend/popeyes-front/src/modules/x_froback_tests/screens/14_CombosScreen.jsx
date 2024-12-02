import {useEffect, useState} from 'react';
import FormCombos from '../components/14_FormCombos.jsx';
import ListaCombos from '../components/14_ListaCombos.jsx';
import {
    obtenerCombos,
    crearCombo
} from "../services/14_ComboServices.js"

export default function CombosScreen() {
    const [combos, setCombos] = useState([]);

    useEffect(() => {
        const cargarCombos = async () => {
            const datos = await obtenerCombos();
            setCombos(datos || []);
        };
        cargarCombos();
    }, []);

    const agregarCombo = async (nuevoCombo) => {
        const comboCreado = await crearCombo(nuevoCombo);
        if(comboCreado){
            setCombos([...combos, comboCreado]);
        }
    };

    return (
        <div>
            <h1>• Gestión de Combos</h1>
            <FormCombos
                agregarCombo={agregarCombo}
            />

            <ListaCombos
                combos={combos}
            />
        </div>
    );
}
