//IMPORT - PRINCIPAL
import React from 'react';
import {Routes, Route} from 'react-router-dom';

//IMPORT - COMPONENTES
import LoginScreen from './modules/auth/screens/LoginScreen'
import MisPedidosScreen from './modules/mispedidos/screens/MisPedidosScreen'
import LocalesScreen from './modules/locales/screens/LocalesScreen'
import MenuScreen from './modules/menu/screens/MenuScreen'
import Principal from './modules/X_Principal'
import Pruebas from './modules/X_Pruebas'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/Pruebas' element={<Pruebas/>}/>  
      <Route path='/LoginScreen' element={<LoginScreen/>}/>
      <Route path='/MisPedidosScreen' element={<MisPedidosScreen/>}/>
      <Route path='/LocalesScreen' element={<LocalesScreen/>}/>
      <Route path='/MenuScreen' element={<MenuScreen/>}/>      
    </Routes>
  );
}