import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, Container, Card, Typography } from '@mui/material';
import SignupForm from '../components/FormSignup';

export default function Register_Screen() {
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

  const handleRegister = async (formData) => {
    try {
      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Error en el registro:', response.statusText);
      }
    } catch (error) {
      console.error('Error al conectarse al servidor:', error);
    }
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
        <Card
          sx={{
            width: { xs: '100%', sm: '50%' },
            py: '40px',
            px: '30px',
            boxSizing: 'border-box',
            boxShadow: 'none',
          }}
        >
          <SignupForm onSubmit={handleRegister} />
        </Card>
      </Container>
    </ThemeProvider>
  );
}
