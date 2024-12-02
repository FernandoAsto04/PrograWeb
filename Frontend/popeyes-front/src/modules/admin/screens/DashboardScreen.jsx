import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from '../components/SidebarAdmin';
import Navbar from '../components/NavBarAdmin';

const DashboardScreen = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Navbar />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: '240px',
        }}
      >
        <Toolbar />
        <h1>Bienvenido al Admin Dashboard</h1>
        <p>Aquí puedes gestionar toda la información y configuraciones de la plataforma.</p>
      </Box>
    </Box>
  );
};

export default DashboardScreen;