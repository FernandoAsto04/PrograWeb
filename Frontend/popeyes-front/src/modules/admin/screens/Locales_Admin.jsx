import React from "react";
import { Box, CssBaseline, Toolbar, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Sidebar from '../components/SidebarAdmin';
import Navbar from '../components/NavBarAdmin';
import { useNavigate } from "react-router-dom";

const locales = [
  { id: 1, nombre: "Local 1", direccion: "Av. Principal 123", telefono: "987654321", estado: true },
  { id: 2, nombre: "Local 2", direccion: "Av. Secundaria 456", telefono: "987123456", estado: false },
];

const Locales = () => {
  const navigate = useNavigate();

  const deleteLocal = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este local?")) {
      // Lógica para eliminar el local
      console.log("Eliminando local con ID:", id);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          marginLeft: "240px", // Ancho del sidebar para que no se sobreponga
        }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Gestión de Locales
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate(`/admin/locales/new`)}
          sx={{ marginBottom: 2 }}
        >
          Registrar Local
        </Button>

        {/* Tabla de Locales */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Dirección</b></TableCell>
                <TableCell><b>Teléfono</b></TableCell>
                <TableCell><b>Estado</b></TableCell>
                <TableCell><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locales.map((local) => (
                <TableRow key={local.id}>
                  <TableCell>{local.nombre}</TableCell>
                  <TableCell>{local.direccion}</TableCell>
                  <TableCell>{local.telefono}</TableCell>
                  <TableCell>{local.estado ? "Activo" : "Inactivo"}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => navigate(`/admin/locales/edit/${local.id}`)}
                      sx={{ marginRight: 1 }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => deleteLocal(local.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Locales;