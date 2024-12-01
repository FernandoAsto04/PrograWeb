
// NOTA: Al parecer "ListaLocalesDespachos" no es necesario, ya que no se crea algo como tal, sino que se relacionan otras cosas

export default function ListaLocalesDespachos({ localesdespachos }) {
    return (
        <ul>
            {localesdespachos.map((localdespacho, index) => (
                <li key={index}>
                    <h3>{`LOCALDESPACHO con index: ${index}`} </h3>
                    <p>{`• id: ${localdespacho.id}`}</p>
                    <p>{`• estado: ${localdespacho.estado}`}</p>
                </li>
            ))}
        </ul>
    );
};
