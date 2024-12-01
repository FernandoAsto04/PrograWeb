import { useState } from 'react';

export default function FormDespachos({ agregarDespacho }) {
    const [nombre, setNombre] = useState('');       //Antes: titulo, setTitulo

    const handleSubmit = (e) => {
        e.preventDefault();
        const despacho = { nombre };

        agregarDespacho(despacho);

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
                {'Crear Despacho'}
            </button>
        </form>
    );
};
