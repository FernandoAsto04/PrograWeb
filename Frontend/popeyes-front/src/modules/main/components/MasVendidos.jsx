import listaMasVendidos from "../../../data/dataMasVendidos";


function MasVendidos(){

    return(
        <div>
            {listaMasVendidos.map((mv) => (
                <div>
                    <img src={mv}></img>
                    <h2>{mv}</h2>
                    <p>{mv}}</p>
                    <button>Agregar al pedido</button> Creo que el botón se puede añadir en un useContext
                </div>
            ))} 
        </div>
    )
}
export default MasVendidos;