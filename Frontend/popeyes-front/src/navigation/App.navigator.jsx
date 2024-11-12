import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginScreen from '../modules/auth/screens/LoginScreen'
import LocalesScreen from '../modules/locales/screens/LocalesScreen'
import MisPedidosScreen from '../modules/mispedidos/screens/MisPedidosScreen'
import DashboardScreen from "../modules/admin_dashboard/screens/DashboardScreen";

function AppNavigator() {
    return (
        <Routes>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/mispedidos' element={<MisPedidosScreen/>}/>
            <Route path='/locales' element={<LocalesScreen/>}/>
            <Route path="/admin" element={<DashboardScreen/>}/>
        </Routes>
    );
  }
  
  export default AppNavigator;