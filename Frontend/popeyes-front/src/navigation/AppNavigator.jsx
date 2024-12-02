//IMPORT - LIBRERÍAS
import React from 'react';
import {Routes, Route} from 'react-router-dom';

//IMPORT - COMPONENTES
import Principal from '../modules/main/screens/Principal';
import Login from '../modules/auth/screens/LoginScreen';
import SignUp from '../modules/auth/screens/SignUpScreen';
import MisPedidos from '../modules/mispedidos/screens/MisPedidosScreen';
import Locales from '../modules/locales/screens/LocalesScreen';
import Menu from '../modules/menu/screens/MenuScreen';
import AgregarPedido from '../modules/agregar_pedido/screens/AgregarPedidoScreen'
import Dashboard from '../modules/admin/screens/DashboardScreen';
import Combos_Admin from '../modules/admin/screens/Combos_Admin_Screen';

import X_Principal from '../modules/X_Principal';
import X_Pruebas from '../modules/X_Pruebas';

import X_UsuariosScreen from '../modules/x_froback_tests/screens/01_UsuariosScreen';
import X_DireccionScreen from '../modules/x_froback_tests/screens/02_DireccionScreen';
import X_TipoDocumentoScreen from '../modules/x_froback_tests/screens/03_TipoDocumentoScreen';
import X_LocalesScreen from '../modules/x_froback_tests/screens/04_LocalesScreen';
import X_DespachosScreen from '../modules/x_froback_tests/screens/05_DespachoScreen';
import X_LocalesDespachosScreen from '../modules/x_froback_tests/screens/06_LocalesDespachoScreen';

export default function AppNavigator() {
    return (
        <Routes>
            <Route path='/' element={<X_Principal/>}/> {/* Aquí debería ir el Principal elaborado por Fernando, de momento esta así para ir más rápido */}
            <Route path='/principal' element={<Principal/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/mispedidos' element={<MisPedidos/>}/>
            <Route path='/locales' element={<Locales/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/agregar_pedido' element={<AgregarPedido/>}/>
            <Route path='/admin' element={<Dashboard/>}/>
            <Route path='/admin/combos' element={<Combos_Admin/>}/>

            <Route path='/pruebas' element={<X_Pruebas/>}/>
            <Route path='/prueba_01_UsuariosScreen' element={<X_UsuariosScreen/>}/>
            <Route path='/prueba_02_DireccionScreen' element={<X_DireccionScreen/>}/>
            <Route path='/prueba_03_TipoDocumentoScreen' element={<X_TipoDocumentoScreen/>}/>
            <Route path='/prueba_04_LocalesScreen' element={<X_LocalesScreen/>}/>
            <Route path='/prueba_05_DespachosScreen' element={<X_DespachosScreen/>}/>
            <Route path='/prueba_06_LocalesDespachoScreen' element={<X_LocalesDespachosScreen/>}/>
        </Routes>
    );
  }
