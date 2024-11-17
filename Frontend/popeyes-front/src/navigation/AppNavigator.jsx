import React from 'react';
import {Routes, Route} from 'react-router-dom';

//IMPORT - COMPONENTES
import LoginScreen from '../modules/auth/screens/LoginScreen'
import MisPedidosScreen from '../modules/mispedidos/screens/MisPedidosScreen'
import LocalesScreen from '../modules/locales/screens/LocalesScreen'
import MenuScreen from '../modules/menu/screens/MenuScreen'
import AgregarPedidoScreen from '../modules/agregar_pedido/screens/AgregarPedidoScreen'
import DashboardScreen from '../modules/admin/screens/DashboardScreem';
import Principal from '../modules/X_Principal'
import Pruebas from '../modules/X_Pruebas'

function AppNavigator() {
    return (
        <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/pruebas' element={<Pruebas/>}/>  
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/mispedidos' element={<MisPedidosScreen/>}/>
            <Route path='/locales' element={<LocalesScreen/>}/>
            <Route path='/menu' element={<MenuScreen/>}/>
            <Route path='/agregar_pedido' element={<AgregarPedidoScreen/>}/>            
            <Route path='/admin' element={<DashboardScreen/>}/>
        </Routes>
    );
  }
  
  export default AppNavigator;