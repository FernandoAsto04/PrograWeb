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
import Sidebar from '../components/SidebarAdmin';
import Navbar from '../components/NavbarAdmin';
import { useNavigate } from "react-router-dom";
import { obtenerCombos, desactivarCombo } from "../services/combo/ComboServices";

const CombosAdmin = () => {
  const [combos, setCombos] = useState([]);
  const navigate = useNavigate();

  const fetchCombos = async () => {
    try {
      const data = await obtenerCombos();
      setCombos(data);
    } catch (error) {
      console.error("Error al obtener los combos:", error);
    }
  };

  useEffect(() => {
    fetchCombos();
  }, []);

  const deleteCombo = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas desactivar este combo?")) {
      try {
        const mensaje = await desactivarCombo(id);
        console.log(mensaje);
        fetchCombos();
      } catch (error) {
        console.error("Error al desactivar el combo:", error);
      }
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          marginLeft: "240px",
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
                  <TableCell>{combo.nombre}</TableCell>
                  <TableCell>{combo.descripcion}</TableCell>
                  <TableCell>{combo.precio ? `S/ ${combo.precio}` : "Sin precio"}</TableCell>
                  <TableCell>
                    <img
                      src={combo.img}
                      alt={combo.nombre}
                      style={{ width: "100px", height: "auto", borderRadius: "8px" }}
                    />
                  </TableCell>
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

export default CombosAdmin;
