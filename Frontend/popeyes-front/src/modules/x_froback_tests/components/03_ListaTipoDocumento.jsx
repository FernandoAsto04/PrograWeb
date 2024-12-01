export default function ListaTipoDocumento({ tipodocumentos, eliminarTipoDocumento, prepararEdicion }) {
    return (
        <ul>
            {tipodocumentos.map((tipodocumento, index) => (
                <li key={index}>
                    <h3>{`TIPODOCUMENTO con index: ${index}`} </h3>
                    <p>{`• id: ${tipodocumento.id}`}</p>
                    <p>{`• nombre: ${tipodocumento.nombre}`}</p>
                    <p>{`• estado: ${tipodocumento.estado}`}</p>
                </li>
            ))}
        </ul>
    );
};

