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
                <br></br>
                <li><Link to={`/pruebas`}>X_PRUEBAS</Link></li>
                <li><Link to={`/prueba_01_UsuariosScreen`}>X_PRUEBA_01_UsuariosScreen</Link></li>
                <li><Link to={`/prueba_02_DireccionScreen`}>X_PRUEBA_02_DireccionScreen</Link></li>
                <li><Link to={`/prueba_03_TipoDocumentoScreen`}>X_PRUEBA_03_TipoDocumentoScreen</Link></li>
                <li><Link to={`/prueba_04_LocalesScreen`}>X_PRUEBA_04_LocalesScreen</Link></li>
                <li><Link to={`/prueba_05_DespachosScreen`}>X_PRUEBA_05_DespachosScreen</Link></li>
                <li><Link to={`/prueba_06_LocalesDespachoScreen`}>X_PRUEBA_06_LocalesDespachoScreen</Link></li>
                <li><Link to={`/prueba_07_PiezaScreen`}>X_PRUEBA_07_PiezaScreen</Link></li>
                <li><Link to={`/prueba_08_NuggetScreen`}>X_PRUEBA_08_NuggetScreen</Link></li>
                <li><Link to={`/prueba_09_SandwichScreen`}>X_PRUEBA_09_SandwichScreen</Link></li>
                <li><Link to={`/prueba_10_TamanioPapaScreen`}>X_PRUEBA_10_TamanioPapaScreen</Link></li>
                <li><Link to={`/prueba_11_SalsaScreen`}>X_PRUEBA_11_SalsaScreen</Link></li>
                <li><Link to={`/prueba_12_RollScreen`}>X_PRUEBA_12_RollScreen</Link></li>
                <li><Link to={`/prueba_13_ExtraScreen`}>X_PRUEBA_13_ExtraScreen</Link></li>
                <li><Link to={`/prueba_14_ComboScreen`}>X_PRUEBA_14_ComboScreen</Link></li>
                <li><Link to={`/prueba_15_ExtrasScreen`}>X_PRUEBA_15_ExtrasScreen</Link></li>
                <li><Link to={`/prueba_16_ComboExtraServicesScreen`}>X_PRUEBA_16_ComboExtraServicesScreen</Link></li>
            </ul>
        </div>
    );
}
