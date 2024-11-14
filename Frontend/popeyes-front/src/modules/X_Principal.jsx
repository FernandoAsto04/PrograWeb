import {Link} from "react-router-dom";

export default function Principal() {
    return(
        <div>
            <ul>
                <li><Link to={`/LoginScreen`}>LOGIN_SCREEN</Link></li>
                <li><Link to={`/MisPedidosScreen`}>MISPEDIDOS_SCREEN</Link></li>
                <li><Link to={`/LocalesScreen`}>LOCALES_SCREEN</Link></li>
                <li><Link to={`/MenuScreen`}>MENU_SCREEN</Link></li>
                <li><Link to={`/Pruebas`}>PRUEBAS</Link></li>
            </ul>
        </div>
    );
}
