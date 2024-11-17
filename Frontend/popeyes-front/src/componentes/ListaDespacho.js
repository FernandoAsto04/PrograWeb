const listaDespacho = ({despacho}) => {
    return (
        <ul>
            {despacho.map((despacho, index)=>(
                <li key = {index}>
                    <h3>{despacho.LocalId}</h3>
                    <h2>{despacho.DespachoId}</h2>

                </li>
            ))}
        </ul>
    )
}