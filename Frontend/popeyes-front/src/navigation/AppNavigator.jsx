import React from 'react';
import {Routes, Route} from 'react-router-dom';

//IMPORT - COMPONENTES
import LoginScreen from '../modules/auth/screens/LoginScreen'
import MisPedidosScreen from '../modules/mispedidos/screens/MisPedidosScreen'
import LocalesScreen from '../modules/locales/screens/LocalesScreen'
import MenuScreen from '../modules/menu/screens/MenuScreen'
import Principal from '../modules/X_Principal'
import Pruebas from '../modules/X_Pruebas'
import DashboardScreen from '../modules/admin/screens/DashboardScreem';
import Locales_Admin from '../modules/admin/screens/Locales_Admin';
import Combos_Admin from '../modules/admin/screens/Combos_Admin';

function AppNavigator() {
    return (
        <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/pruebas' element={<Pruebas/>}/>  
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/mispedidos' element={<MisPedidosScreen/>}/>
            <Route path='/locales' element={<LocalesScreen/>}/>
            <Route path='/menu' element={<MenuScreen/>}/>
            <Route path='/admin' element={<DashboardScreen/>}/>
            <Route path='/admin/locales' element={<Locales_Admin/>}/>
            <Route path='/admin/combos' element={<Combos_Admin/>}/>
        </Routes>
    );
  }
  
  export default AppNavigator;