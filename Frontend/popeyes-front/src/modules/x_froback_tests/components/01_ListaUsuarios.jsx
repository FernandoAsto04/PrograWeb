export default function ListaUsuarios({ usuarios, eliminarUsuario, prepararEdicion }) {
    return (
        <ul>
            {usuarios.map((usuario, index) => (
                <li key={index}>
                    <h3>{`USUARIO con index: ${index}`} </h3>
                    <p>{`• id: ${usuario.id}`}</p>
                    <p>{`• nombres: ${usuario.nombres}`}</p>
                    <p>{`• apellidos: ${usuario.apellidos}`}</p>
                    <p>{`• correo: ${usuario.correo}`}</p>
                    <p>{`• contrasenia: ${usuario.contrasenia}`}</p>
                    <p>{`• numDocumento: ${usuario.numDocumento}`}</p>
                    <p>{`• admin: ${usuario.admin}`}</p>
                    <p>{`• estado: ${usuario.estado}`}</p>
                    <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                    <button onClick={() => prepararEdicion(usuario)}>Editar</button>
                </li>
            ))}
        </ul>
    );
};

