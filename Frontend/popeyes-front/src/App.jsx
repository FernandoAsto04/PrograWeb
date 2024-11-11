//IMPORT - PRINCIPAL
import React from 'react';
import {Routes, Route} from 'react-router-dom';

//IMPORT - COMPONENTES
import LoginScreen from './modules/auth/screens/LoginScreen'
import MisPedidosScreen from './modules/locales/screens/LocalesScreen'
import LocalesScreen from './modules/mispedidos/screens/MisPedidosScreen'

export default function App() {
  return (
    <Routes>
      <Route path='/LoginScreen' element={<LoginScreen/>}/>
      <Route path='/MisPedidosScreen' element={<MisPedidosScreen/>}/>
      <Route path='/LocalesScreen' element={<LocalesScreen/>}/>
    </Routes>
  );
}
