import {Link} from "react-router-dom";

export default function Principal() {
    return(
        <div>
            <ul>
                <li><Link to={`/login`}>LOGIN_SCREEN</Link></li>
                <li><Link to={`/mispedidos`}>MISPEDIDOS_SCREEN</Link></li>
                <li><Link to={`/locales`}>LOCALES_SCREEN</Link></li>
                <li><Link to={`/menu`}>MENU_SCREEN</Link></li>
                <li><Link to={`/agregar_pedido`}>AGREGAR_PEDIDO_SCREEN</Link></li>
                <li><Link to={`/admin`}>ADMIN</Link></li>
                <li><Link to={`/pruebas`}>PRUEBAS</Link></li>
            </ul>
        </div>
    );
}
