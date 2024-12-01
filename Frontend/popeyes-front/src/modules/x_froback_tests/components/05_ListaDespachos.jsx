export default function ListaDespachos({ despachos }) {
    return (
        <ul>
            {despachos.map((despacho, index) => (
                <li key={index}>
                    <h3>{`DESPACHO con index: ${index}`} </h3>
                    <p>{`• id: ${despacho.id}`}</p>
                    <p>{`• nombre: ${despacho.nombre}`}</p>
                    <p>{`• estado: ${despacho.estado}`}</p>
                </li>
            ))}
        </ul>
    );
};
