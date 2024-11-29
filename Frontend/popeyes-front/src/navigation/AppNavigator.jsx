//IMPORT - LIBRERÍAS
import React from 'react';
import {Routes, Route} from 'react-router-dom';

//IMPORT - COMPONENTES
import Principal from '../modules/main/screens/Principal';
import Login from '../modules/auth/screens/LoginScreen';
import MisPedidos from '../modules/mispedidos/screens/MisPedidosScreen';
import Locales from '../modules/locales/screens/LocalesScreen';
import Menu from '../modules/menu/screens/MenuScreen';
import AgregarPedido from '../modules/agregar_pedido/screens/AgregarPedidoScreen'
import Dashboard from '../modules/admin/screens/DashboardScreem';
import Locales_Admin from '../modules/admin/screens/Locales_Admin';
import Combos_Admin from '../modules/admin/screens/Combos_Admin';
import X_Principal from '../modules/X_Principal';
import X_Pruebas from '../modules/X_Pruebas';

function AppNavigator() {
    return (
        <Routes>
            <Route path='/' element={<X_Principal/>}/> {/* Aquí debería ir el Principal elaborado por Fernando, de momento esta así para ir más rápido */}
            <Route path='/pruebas' element={<X_Pruebas/>}/>
            <Route path='/principal' element={<Principal/>}/>            
            <Route path='/login' element={<Login/>}/>
            <Route path='/mispedidos' element={<MisPedidos/>}/>
            <Route path='/locales' element={<Locales/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/agregar_pedido' element={<AgregarPedido/>}/>            
            <Route path='/admin' element={<Dashboard/>}/>
            <Route path='/admin/locales' element={<Locales_Admin/>}/>
            <Route path='/admin/combos' element={<Combos_Admin/>}/>
        </Routes>
    );
  }
  
  export default AppNavigator;