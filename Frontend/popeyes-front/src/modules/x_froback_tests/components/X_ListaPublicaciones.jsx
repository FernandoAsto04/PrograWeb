const ListaPublicaciones = ({ publicaciones, eliminarPublicacion, prepararEdicion }) => {
    return (
        <ul>
            {publicaciones.map((publicacion, index) => (
                <li key={index}>
                    <h3>{publicacion.titulo}</h3>
                    <p>{publicacion.contenido}</p>
                    <p><strong>Autor:</strong> {publicacion.autor}</p>
                    <button onClick={() => eliminarPublicacion(publicacion.id)}>Eliminar</button>
                    <button onClick={() => prepararEdicion(publicacion)}>Editar</button> {/* Botón de editar */}
                </li>
            ))}
        </ul>
    );
};

export default ListaPublicaciones;
