import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Sidebar from "../components/SidebarAdmin";
import Navbar from "../components/NavbarAdmin";
import { useNavigate } from "react-router-dom";
import { obtenerCombos } from "../services/combo/ComboServices";

const Combos = () => {
  const [combos, setCombos] = useState([]);
  const navigate = useNavigate();

  // Función para obtener los combos del backend
  const fetchCombos = async () => {
    try {
      const data = await obtenerCombos();
      if (Array.isArray(data)) {
        setCombos(data);
      } else {
        console.error("Los datos obtenidos no son válidos:", data);
      }
    } catch (error) {
      console.error("Error al obtener los combos:", error);
    }
  };

  useEffect(() => {
    fetchCombos();
  }, []);

  // Simular la lógica de eliminación
  const deleteCombo = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este combo?")) {
      console.log("Desactivando combo con ID:", id);
      // Aquí puedes agregar la lógica de eliminación del backend
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
          marginLeft: "240px", // Asegurar que no se superponga al sidebar
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
                <TableCell><b>Descripción</b></TableCell>
                <TableCell><b>Precio</b></TableCell>
                <TableCell><b>Imagen</b></TableCell>
                <TableCell><b>Estado</b></TableCell>
                <TableCell><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combos.map((combo) => (
                <TableRow key={combo.id}>
                  <TableCell>{combo.nombre || "Sin nombre"}</TableCell>
                  <TableCell>{combo.descripcion || "Sin descripción"}</TableCell>
                  <TableCell>{combo.precio ? `$${combo.precio}` : "Sin precio"}</TableCell>
                  <TableCell>{combo.img || "Sin imagen"}</TableCell>
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
                      onClick={() => deleteCombo(combo.id)}
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