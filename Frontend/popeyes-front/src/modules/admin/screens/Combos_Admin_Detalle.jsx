import React, { useEffect, useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "../components/SidebarAdmin";
import Navbar from "../components/NavbarAdmin";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerCombo, crearCombo, actualizarCombo } from "../services/combo/ComboServices";
import CombosForm from "../components/CombosForm";

const CombosAdminDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  const [comboData, setComboData] = useState(null);

  const fetchCombo = async () => {
    try {
      const data = await obtenerCombo(id);
      setComboData(data);
    } catch (error) {
      console.error("Error al obtener el combo:", error);
    }
  };

  useEffect(() => {
    if (isEditing) {
      fetchCombo();
    }
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      if (isEditing) {
        await actualizarCombo(id, data);
      } else {
        await crearCombo(data);
      }
      navigate("/admin/combos");
    } catch (error) {
      console.error("Error al guardar el combo:", error);
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
        {isEditing && !comboData ? (
          <p>Cargando...</p>
        ) : (
          <CombosForm
            comboData={comboData || {}}
            isEditing={isEditing}
            onSubmit={handleSubmit}
          />
        )}
      </Box>
    </Box>
  );
};

export default CombosAdminDetalle;