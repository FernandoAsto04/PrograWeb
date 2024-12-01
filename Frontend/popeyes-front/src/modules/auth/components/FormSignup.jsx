import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { obtenerTipoDocumentos } from '../services/TipoDocumentoServices';

export default function FormSignup({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    contrasenia: '',
    numDocumento: '',
    numeroCel: '',
    tipoDocid: '',
    admin: false
  });

  const [confirmarContrasenia, setConfirmarContrasenia] = useState('');
  const [errorContrasenia, setErrorContrasenia] = useState(false);
  const [tipoDocumentos, setTipoDocumentos] = useState([]);

  useEffect(() => {
    const fetchTipoDocumentos = async () => {
      const documentos = await obtenerTipoDocumentos();
      if (documentos) {
        setTipoDocumentos(documentos);
      }
    };
    fetchTipoDocumentos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contrasenia !== confirmarContrasenia) {
      setErrorContrasenia(true);
      return;
    }

    setErrorContrasenia(false);
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
          name="tipoDocid"
          value={formData.tipoDocid}
          onChange={handleInputChange}
          required
          fullWidth
        >
          {tipoDocumentos.map((doc) => (
            <MenuItem key={doc.id} value={doc.id}>
              {doc.nombre}
            </MenuItem>
          ))}
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
        name="numeroCel"
        value={formData.numeroCel}
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
        label="Confirmar Contraseña"
        placeholder="Aa12345"
        type={showPassword ? 'text' : 'password'}
        value={confirmarContrasenia}
        onChange={(e) => setConfirmarContrasenia(e.target.value)}
        required
        fullWidth
        sx={{ mb: 2 }}
        error={errorContrasenia} 
        helperText={errorContrasenia ? 'Las contraseñas no coinciden' : ''}
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