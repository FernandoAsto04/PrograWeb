import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
  Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function LoginForm({ onSubmit, onForgotPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    correo: '',
    contrasenia: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" component="span">
        Correo electrónico <Typography variant="h6" component="span"> * </Typography>
      </Typography>
      <TextField
        sx={{
          mt: '10px',
          mb: '20px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderRadius: '8px' },
            '&.Mui-focused fieldset': { borderColor: 'orange' },
            '& input::placeholder': {
              fontSize: '14px',
              color: '#000000',
              opacity: 0.7,
              transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
            },
            '& input:focus::placeholder': { transform: 'translateX(-100%)' },
            '& .MuiInputBase-input': { padding: '12px' },
          },
        }}
        type="email"
        name="correo"
        placeholder="Ej. nombre@mail.com"
        value={formData.correo}
        onChange={handleInputChange}
        required
        fullWidth
      />

      <Typography variant="h2" component="span">
        Contraseña <Typography variant="h6" component="span"> * </Typography>
      </Typography>
      <TextField
        sx={{
          mt: '10px',
          mb: '20px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderRadius: '8px' },
            '&.Mui-focused fieldset': { borderColor: 'orange' },
            '& input::placeholder': {
              fontSize: '14px',
              color: '#000000',
              opacity: 0.7,
              transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
            },
            '& input:focus::placeholder': { transform: 'translateX(-100%)' },
            '& .MuiInputBase-input': { padding: '12px' },
          },
        }}
        type={showPassword ? 'text' : 'password'}
        name="contrasenia"
        placeholder="Aa12345"
        value={formData.contrasenia}
        onChange={handleInputChange}
        required
        fullWidth
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

      <Typography sx={{ mb: '20px' }}>
        <Link onClick={onForgotPassword} sx={{ cursor: 'pointer', textDecoration: 'none', color: '#F25600' }}>
          Olvidé mi contraseña
        </Link>
      </Typography>

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: '10px',
          py: '12px',
          px: '20px',
          textTransform: 'none',
          width: '100%',
          backgroundColor: 'rgb(255, 51, 0)',
          borderRadius: '50px',
          boxShadow: 'none',
          '&:hover': { backgroundColor: 'rgba(255, 51, 0, 0.8)', boxShadow: 'none' },
        }}
      >
        <Typography variant="h4">Iniciar sesión</Typography>
      </Button>
    </form>
  );
}
