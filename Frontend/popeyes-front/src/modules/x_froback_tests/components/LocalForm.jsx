import { useState } from 'react';

const LocalForm = ({ agregarLocal }) => {
    const [nombre, setNombre] = useState('');       //Antes: titulo, setTitulo
    const [direccion, setDireccion] = useState(''); //Antes: contenido, setContenido
    const [telefono, setTelefono] = useState('');         //Antes: autor, setAutor

    const handleSubmit = (e) => {
        e.preventDefault();
        const local = { nombre, direccion, telefono };

        agregarLocal(local);

        // Limpiar el formulario
        setNombre('');
        setDireccion('');
        setTelefono('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <button type="submit">
                {'Crear Publicación'}
            </button>
        </form>
    );
};

export default LocalForm;
