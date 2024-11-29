import {Link} from "react-router-dom";

export default function Principal() {
    return(
        <div>
            <ul>
                <li><Link to={`/principal`}>PRINCIPAL</Link></li>
                <li><Link to={`/login`}>LOGIN</Link></li>
                <li><Link to={`/mispedidos`}>MISPEDIDOS</Link></li>
                <li><Link to={`/locales`}>LOCALES</Link></li>
                <li><Link to={`/menu`}>MENU</Link></li>
                <li><Link to={`/agregar_pedido`}>AGREGAR_PEDIDO</Link></li>
                <li><Link to={`/admin`}>ADMIN</Link></li>
                <li><Link to={`/admin/locales`}>ADMIN_LOCALES</Link></li>
                <li><Link to={`/admin/combos`}>ADMIN_COMBOS</Link></li>
                <li><Link to={`/pruebas`}>X_PRUEBAS</Link></li>
            </ul>
        </div>
    );
}
