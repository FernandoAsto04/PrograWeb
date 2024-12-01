import { useState } from 'react';

export default function FormLocalesDespachos({ agregarLocalDespacho }) {
    const [localId, setLocalId] = useState('');
    const [despachosIds, setDespachosIds] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const localdespacho = { localId, despachosIds };

        agregarLocalDespacho(localdespacho);

        // Limpiar el formulario
        setLocalId('');
        setDespachosIds('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="LocalId"
                value={localId}
                onChange={(e) => setLocalId(e.target.value)}
            />
            <input
                type="text"
                placeholder="DespachosIds"
                value={despachosIds}
                onChange={(e) => setDespachosIds(e.target.value)}
            />
            <button type="submit">
                {'Crear LocalDespacho'}
            </button>
        </form>
    );
};
