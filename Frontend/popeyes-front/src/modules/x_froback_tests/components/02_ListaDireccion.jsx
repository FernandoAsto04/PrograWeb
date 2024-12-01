export default function Listadirecciones({ direcciones, eliminarDireccion, prepararEdicion }) {
    return (
        <ul>
            {direcciones.map((direccion, index) => (
                <li key={index}>
                    <h3>{`DIRECCION con index: ${index}`} </h3>
                    <p>{`• id: ${direccion.id}`}</p>
                    <p>{`• nombre: ${direccion.nombre}`}</p>
                    <p>{`• estado: ${direccion.estado}`}</p>
                    <button onClick={() => eliminarDireccion(direccion.id)}>Eliminar</button>
                    <button onClick={() => prepararEdicion(direccion)}>Editar</button>
                </li>
            ))}
        </ul>
    );
};

