import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const CombosForm = ({ comboData = {}, isEditing = false, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: comboData.nombre || "",
    descripcion: comboData.descripcion || "",
    precio: comboData.precio || "",
    img: comboData.img || "",
    masvendido: comboData.masvendido || false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos enviados al backend:", formData);
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Error al guardar el combo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        {isEditing ? "Editar Combo" : "Crear Combo"}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
          fullWidth
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Descripción"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
          required
          fullWidth
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Precio"
          name="precio"
          type="number"
          value={formData.precio}
          onChange={handleInputChange}
          required
          fullWidth
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Imagen"
          name="img"
          value={formData.img}
          onChange={handleInputChange}
          required
          fullWidth
        />
      </Box>
      <Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          {isEditing ? "Actualizar Combo" : "Crear Combo"}
        </Button>
      </Box>
    </form>
  );
};

export default CombosForm;