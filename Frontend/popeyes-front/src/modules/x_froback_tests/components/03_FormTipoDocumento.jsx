import { useState, useEffect } from 'react';

export default function FormTipoDocumento({ agregarTipoDocumento, tipodocumentoEditable, actualizarTipoDocumento }) {
    const [nombre, setNombre] = useState('');

    // Si se pasa una publicación editable, llenamos el formulario con esos datos
    useEffect(() => {
        if (tipodocumentoEditable) {
            setNombre(tipodocumentoEditable.nombre);
        }
    }, [tipodocumentoEditable]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tipodocumento = { nombre };

        if (tipodocumentoEditable) {
            actualizarTipoDocumento(tipodocumentoEditable.id, tipodocumento);
        } else {
            agregarTipoDocumento(tipodocumento);
        }

        // Limpiar el formulario
        setNombre('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button type="submit">
                {'Crear Tipodocumento'} {/* tipodocumentoEditable ? 'Actualizar Tipodocumento' : 'Crear Tipodocumento' */} 
            </button>
        </form>
    );
};
