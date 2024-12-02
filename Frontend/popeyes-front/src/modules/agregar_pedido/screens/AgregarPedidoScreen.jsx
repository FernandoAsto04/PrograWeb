import { useEffect, useState } from "react";
import { crearComboExtra, obtenerCombosExtras } from "./AgregarPedido";

export default function ComboExtraScreen(){
    const [comboextra, setComboExtra] = useState([]);
    
    useEffect(() => {
        const cargarComboExtra = async () => {
            const datos = await obtenerCombosExtras();
            setComboExtra(datos || []);
        };
    }, []);

    const agregarComboExtra = async (nuevoComboExtra) => {
        const comboextraCreado = await crearComboExtra(nuevoComboExtra);
        if(comboextraCreado){
            setUsuarios([...comboextra, comboextraCreado]);
        }
    };

    return (
        <div>
            
        </div>
    );

}


