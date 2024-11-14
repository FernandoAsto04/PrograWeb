const cartas = [
    {
        id: 1,
        titulo: "Nuevos Banquetes",
        descripcion: "Disfruta de nuestros combos exclusivos de 18 piezas de pollo a más, para compartir con amigos y en familia.",
        img: "https://www.popeyes.com.pe/media/wysiwyg/Banner-destacado-Banquetes-560x700.png",
        estado: 1
    },
    {
        id: 2,
        titulo: "¡Nuevas Alitas picantes con Salsas!",
        descripcion: "¡Descubre nuestras nuevas alitas picantes con Salsas! Elige la salsa perfecta para acompañarlas: BBQ, Acevichada, Cocona o Rocoto Dulce. ¡Sabores únicos para cada antojo!",
        img: "https://www.popeyes.com.pe/media/wysiwyg/popeyes/Bannersdestacados/Banner_Destacado_Desktop_560px_x_700px_Alitas_Picantes_1_.webp",
        estado: 1
    }
];

function Extras() {
    return (
        <div className="cartas-wrapper">
            {cartas.map((carta) => (
                <div key={carta.id} className="cartas-container">
                    <div className="imagen-container">
                        <img src={carta.img} alt={carta.titulo}></img>
                    </div>
                    <span className="contenido-container">
                        <h2>{carta.titulo}</h2>
                        <p>{carta.descripcion}</p>
                        <button>Ver más</button>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Extras;
