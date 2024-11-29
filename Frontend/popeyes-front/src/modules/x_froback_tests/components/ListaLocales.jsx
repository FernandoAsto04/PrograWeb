const ListaLocales = ({ locales }) => {
    return (
        <ul>
            {locales.map((local, index) => (
                <li key={index}>
                    <h3>{`LOCAL con index ${index}`} </h3>
                    <p>{`• id: ${local.id}`}</p>
                    <p>{`• nombre: ${local.nombre}`}</p>
                    <p>{`• direccion: ${local.direccion}`}</p>
                    <p>{`• telefono: ${local.telefono}`}</p>
                    <p>{`• estado: ${local.estado}`}</p>
                </li>
            ))}
        </ul>
    );
};

export default ListaLocales;
