import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, Container, Box, Card, Typography, Button } from '@mui/material';
import LoginForm from '../components/FormLogin';
import { loginUsuario } from '../services/LoginServices';

export default function Login_Screen() {
  const customTheme = createTheme({
    typography: {
      fontFamily: 'Open Sans, Helvetica Neue',
      h1: { fontSize: '26px', fontWeight: 900, textAlign: 'center' },
      h2: { fontSize: '13px', fontWeight: 500 },
      h6: { fontSize: '12px', color: '#DE1414' },
      h4: { fontSize: '13px', fontWeight: 700 },
    },
  });

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await loginUsuario(formData);
      console.log('Inicio de sesión exitoso:', response);
      
      navigate('/');
    } catch (error) {
      console.error('Error en el inicio de sesión:', error.message);
      alert('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/');
  };

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container
        sx={{
          width: '100vw',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Card
            sx={{
              width: { xs: '100%', sm: '40%' },
              height: { xs: 'auto', md: '530px' },
              py: '40px',
              px: '30px',
              boxSizing: 'border-box',
              boxShadow: 'none',
              mb: { xs: 3, sm: 0 },
            }}
          >
            <Typography variant="h1" sx={{ mb: '20px' }}>
              Iniciar sesión
            </Typography>
            <LoginForm onSubmit={handleLogin} onForgotPassword={handleForgotPassword} />
          </Card>
          
          <Card
            sx={{
              minWidth: { xs: '100%', sm: '60%' },
              height: { xs: 'auto', md: '530px' },
              p: '40px',
              boxSizing: 'border-box',
              boxShadow: 'none',
              backgroundColor: '#F8F8F8',
            }}
          >
            <Typography variant="h1" sx={{ mb: '65px' }}>
              Crear cuenta
            </Typography>

            <Typography variant="h7" sx={{ ml: '8px' }}>
              Crea una y aprovecha los beneficios:
            </Typography>

            <Box sx={{ mt: '10px', mb: '35px' }}>
              <ul>
                <li>Realiza tus compras de manera más ágil.</li>
                <li>Guarda múltiples direcciones de envío y facturación.</li>
                <li>Realiza el seguimiento a tus compras y revisa tus pedidos realizados.</li>
                <li>Haz una lista de productos favoritos.</li>
              </ul>
            </Box>

            <Button
              variant="contained"
              onClick={handleCreateAccount}
              sx={{
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
              <Typography variant="h4">Crear cuenta</Typography>
            </Button>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}