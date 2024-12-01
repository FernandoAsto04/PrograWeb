import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Box,
  Divider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function FormSignup({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    numDocumento: '',
    telefono: '',
    correo: '',
    contrasenia: '',
    confirmarContrasenia: '',
    aceptarPromociones: false,
    aceptarTerminos: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        ¿Aún no tienes cuenta? Regístrate
      </Typography>

      <Divider textAlign="left" sx={{ mb: 2 }}>
        <Typography variant="h6">Información personal</Typography>
      </Divider>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Nombre"
          placeholder="Ej. Camila"
          name="nombres"
          value={formData.nombres}
          onChange={handleInputChange}
          required
          fullWidth
        />
        <TextField
          label="Apellidos"
          placeholder="Ej. Torres"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleInputChange}
          required
          fullWidth
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          select
          label="Tipo de Documento"
          name="tipoDocumento"
          value={formData.tipoDocumento}
          onChange={handleInputChange}
          required
          fullWidth
        >
          <MenuItem value="DNI">DNI</MenuItem>
          <MenuItem value="Pasaporte">Pasaporte</MenuItem>
          <MenuItem value="Carnet de Extranjería">Carnet de Extranjería</MenuItem>
        </TextField>
        <TextField
          label="Documento"
          placeholder="DNI 123456789"
          name="numDocumento"
          value={formData.numDocumento}
          onChange={handleInputChange}
          required
          fullWidth
        />
      </Box>

      <TextField
        label="Número de teléfono"
        placeholder="Ej. 987654321"
        name="telefono"
        value={formData.telefono}
        onChange={handleInputChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />

      <Divider textAlign="left" sx={{ mb: 2 }}>
        <Typography variant="h6">Información de inicio de sesión</Typography>
      </Divider>

      <TextField
        label="Correo electrónico"
        placeholder="Ej. nombre@mail.com"
        name="correo"
        value={formData.correo}
        onChange={handleInputChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Contraseña"
        placeholder="Aa12345"
        type={showPassword ? 'text' : 'password'}
        name="contrasenia"
        value={formData.contrasenia}
        onChange={handleInputChange}
        required
        fullWidth
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((show) => !show)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Confirmar contraseña"
        placeholder="Aa12345"
        type={showPassword ? 'text' : 'password'}
        name="confirmarContrasenia"
        value={formData.confirmarContrasenia}
        onChange={handleInputChange}
        required
        fullWidth
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((show) => !show)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="aceptarPromociones"
              checked={formData.aceptarPromociones}
              onChange={handleCheckboxChange}
            />
          }
          label="Acepto recibir promociones y novedades"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="aceptarTerminos"
              checked={formData.aceptarTerminos}
              onChange={handleCheckboxChange}
              required
            />
          }
          label="Acepto la transferencia de datos a empresas asociadas"
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#FF6F00',
          '&:hover': { backgroundColor: '#FF8C00' },
          width: '100%',
          textTransform: 'none',
          py: 1.5,
          mb: 2,
        }}
      >
        Crear cuenta
      </Button>

      <Button
        variant="text"
        sx={{
          width: '100%',
          textTransform: 'none',
          py: 1,
        }}
        onClick={() => window.history.back()}
      >
        Ya tengo cuenta
      </Button>
    </form>
  );
}
