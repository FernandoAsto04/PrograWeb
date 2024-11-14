function crearPromocion(id, titulo, descripcion, imagen, precioN, precioDes){

    return{
        id:id,
        titulo:titulo,
        descripcion:descripcion,
        imagen:imagen,
        precioN:precioN,
        precioDes:precioDes,
        estado:1
    }
};


const listaPromociones = [
    crearPromocion(1,"Lunes de alitas personal", "10 alitas y bla bla bla", "https://www.popeyes.com.pe/media/catalog/product/2/1/2146467183.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300&format=jpeg", "19.90", "34.90"),
    crearPromocion(2,"Lunes de alitas power", "10 alitas y bla bla bla", "https://www.popeyes.com.pe/media/catalog/product/2/1/2146468163.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300&format=jpeg", "19.90", "34.90"),
    crearPromocion(3,"Lunes de alitas dúo", "10 alitas y bla bla bla", "https://www.popeyes.com.pe/media/catalog/product/2/1/2146468164.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300&format=jpeg", "19.90", "34.90"),
    crearPromocion(4,"Promo Festi 6 piezas", "10 alitas y bla bla bla", "https://www.popeyes.com.pe/media/catalog/product/2/1/2146466041.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300&format=jpeg", "19.90", "34.90"),
    crearPromocion(5,"Combo 10 nuggets", "10 alitas y bla bla bla", "https://www.popeyes.com.pe/media/catalog/product/2/1/2146467672.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300&format=jpeg", "19.90", "34.90"),
    crearPromocion(6,"Promo FCombo Más", "10 alitas y bla bla bla", "https://www.popeyes.com.pe/media/catalog/product/2/1/2146467662.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300&format=jpeg", "19.90", "34.90")
];

export default listaPromociones;