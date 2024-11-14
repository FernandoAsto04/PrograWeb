import listaPromociones from "../../../data/dataPromociones";

function Promociones() {
    return (
        <div className="promo-container">
            <h2 className="promo-seccion">Promociones</h2>
            <div className="promo-cards-container">
                {listaPromociones.map((promo) => (
                    <div key={promo.id} className="promo-card">
                        <img src={promo.imagen} alt={promo.titulo} className="promo-image" />
                        <h2 className="promo-title">{promo.titulo}</h2>
                        <p className="promo-description">{promo.descripcion}</p>
                        <div className="promo-price">
                            <span className="price">S/ {promo.precioN}</span>
                            {promo.precioDes && <span className="old-price">S/ {promo.precioDes}</span>}
                        </div>
                        <button className="promo-button">Agregar al pedido</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Promociones;
