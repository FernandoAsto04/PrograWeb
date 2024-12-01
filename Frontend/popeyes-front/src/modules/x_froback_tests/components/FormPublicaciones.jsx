import { useState, useEffect } from 'react';

export default function Form_Publicaciones({ agregarPublicacion, publicacionEditable, actualizarPublicacion }) {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [autor, setAutor] = useState('');

    // Si se pasa una publicación editable, llenamos el formulario con esos datos
    useEffect(() => {
        if (publicacionEditable) {
            setTitulo(publicacionEditable.titulo);
            setContenido(publicacionEditable.contenido);
            setAutor(publicacionEditable.autor);
        }
    }, [publicacionEditable]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const publicacion = { titulo, contenido, autor };

        if (publicacionEditable) {
            actualizarPublicacion(publicacionEditable.id, publicacion);
        } else {
            agregarPublicacion(publicacion);
        }

        // Limpiar el formulario
        setTitulo('');
        setContenido('');
        setAutor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Contenido"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
            />
            <input
                type="text"
                placeholder="Autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
            />
            <button type="submit">
                {publicacionEditable ? 'Actualizar Publicación' : 'Crear Publicación'}
            </button>
        </form>
    );
};
