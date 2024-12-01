import {useEffect, useState} from 'react';
import FormTipoDocumento from '../components/03_FormTipoDocumento.jsx';
import ListaTipoDocumento from '../components/03_ListaTipoDocumento.jsx';
import {
    obtenerTipoDocumentos,
    obtenerTipoDocumento,
    crearTipoDocumento,
    actualizarTipoDocumento,
    eliminarTipoDocumento,
} from "../services/03_TipoDocumentoServices.js"

// Usuarios - Usuario - usuario - nuevoUsuario - usuarioCreado - usuarioActualizado
// Direcciones - Direccion - direccion - nuevaDireccion - direccionCreada - tipodocumentoActualizado
// TipoDocumentos - TipoDocumento - tipodocumento - tipodocumentos - nuevoTipoDocumento - tipodocumentoCreado - tipodocumentoActualizado

export default function TipoDocumentoScreen() {
    const [tipodocumentos, setTipoDocumentos] = useState([]); //setTipoDocumentos
    const [tipodocumentoEditable, setTipoDocumentoEditable] = useState(null); // setTipoDocumentoEditable

    useEffect(() => {
        const cargarTipoDocumentos = async () => {
            const datos = await obtenerTipoDocumentos();  // Usamos el servicio obtenerPublicaciones
            setTipoDocumentos(datos || []);
        };
        cargarTipoDocumentos();
    }, []);

    const agregarTipoDocumento = async (nuevoTipoDocumento) => {
        const tipodocumentoCreado = await crearTipoDocumento(nuevoTipoDocumento);
        if(tipodocumentoCreado){
            setTipoDocumentos([...tipodocumentos, tipodocumentoCreado]);
        }
    };

    const actualizarUnTipoDocumento = async (id, tipodocumentoActualizado) => {
        const actualizado = await actualizarTipoDocumento(id, tipodocumentoActualizado);
        setTipoDocumentos(
            tipodocumentos.map((tipodocumento) =>
                tipodocumento.id === id ? actualizado : tipodocumento
            )
        )
        setTipoDocumentoEditable(null);
    };

    const eliminarUnTipoDocumento = async (id) => {
        await eliminarTipoDocumento(id);
        setTipoDocumentos(tipodocumentos.filter(tipodocumento => tipodocumento.id !== id));
    };

    const prepararEdicion = (tipodocumento) => {
        setTipoDocumentoEditable(tipodocumento);
    };

    return (
        <div>
            <h1>• Gestión de TipoDocumentos</h1>
            <FormTipoDocumento
                agregarTipoDocumento={agregarTipoDocumento}
                tipodocumentoEditable={tipodocumentoEditable} // Pasamos la publicación a editar
                actualizarTipoDocumento={actualizarUnTipoDocumento}
            />
            <ListaTipoDocumento
                tipodocumentos={tipodocumentos}
                eliminarTipoDocumento={eliminarUnTipoDocumento}
                prepararEdicion={prepararEdicion} // Pasamos la función para preparar edición
            />
        </div>
    );
}
