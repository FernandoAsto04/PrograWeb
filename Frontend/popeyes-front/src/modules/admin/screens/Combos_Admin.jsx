import React from "react";
import { Box, CssBaseline, Toolbar, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Sidebar from '../components/SidebarAdmin';
import Navbar from '../components/NavBarAdmin';
import { useNavigate } from "react-router-dom";

const combos = [
  { id: 1, nombre: "Combo 1", descripcion: "El combo 1 incluye...", precio: "45.9", img: 'aaaa', estado: true },
  { id: 2, nombre: "Combo 2", descripcion: "El combo 2 incluye...", precio: "89.9", img: 'bbbb', estado: false },
];

const Combos = () => {
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
          Gestión de Combos
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate(`/admin/combos/new`)}
          sx={{ marginBottom: 2 }}
        >
          Registrar Combo
        </Button>

        {/* Tabla de Combos */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Descripcion</b></TableCell>
                <TableCell><b>Precio</b></TableCell>
                <TableCell><b>Imagen</b></TableCell>
                <TableCell><b>Estado</b></TableCell>
                <TableCell><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combos.map((combo) => (
                <TableRow key={combo.id}>
                  <TableCell>{combo.nombre}</TableCell>
                  <TableCell>{combo.descripcion}</TableCell>
                  <TableCell>{combo.precio}</TableCell>
                  <TableCell>{combo.img}</TableCell>
                  <TableCell>{combo.estado ? "Activo" : "Inactivo"}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => navigate(`/admin/combos/edit/${combo.id}`)}
                      sx={{ marginRight: 1 }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => deleteLocal(combo.id)}
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

export default Combos;