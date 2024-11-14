import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, Container, Box, Card, Typography, TextField, Link, Button, List, ListItem, InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function Login_Screen() {

  //THEME
  const customTheme = createTheme({
    typography: {
      fontFamily: 'Open Sans, Helvetica Neue', // Predeterminado
      h1: {fontSize: '26px', fontWeight: 900, textAlign: 'center' }, // "Iniciar sesión | Crear cuenta"
      h2: {fontSize: '13px', fontWeight: 500},                       // "Correo electrónico | Contraseña"
      h3: {fontSize: '13px', fontWeight: 500, color: 'white' },      // "Protección de | - "
      h4: {fontSize: '13px', fontWeight: 700},                       // Botones: "Iniciar sesión | Crear cuenta"
      h5: {fontSize: '12px', fontWeight: 700},                       // "reCAPTCHA"
      h6: {fontSize: "12px", color: '#DE1414' },                     // " * "
      h7: {fontSize: '13px', fontWeight: 800, fontFamily: 'Open Sans, Helvetica Neue'} // "Crea una y aprovecha los beneficios"
    },

    components: {
      MuiLink: { // || Link ||
        styleOverrides: {
          root: { // Predeterminado
            fontSize: "15px", color: '#F25600', textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' }
        }},
        variants: [{ // Variantes
          props: { variant: 'custom' }, // Variante: custom
          style: { fontSize: '10px', color: 'white' }, // "Privacidad | Términos"
        }]
      },

      MuiTextField: { // || TextField ||
        styleOverrides: {
          root: { // Predeterminado
            width: '100%', borderRadius: '8px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderRadius: '8px' },
              '&.Mui-focused fieldset': { borderColor: 'orange' },
              '& input::placeholder': {
                fontSize: '14px',
                color: '#000000',
                opacity: 0.7,
                transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
              },
              '& input:focus::placeholder': {
                transform: 'translateX(-100%)',
              },
              '& .MuiInputBase-input': {
                padding: '12px',
              },
      }}}},

      MuiButton: { // || Button ||
        styleOverrides: {
          root: { // Predeterminado
            width: '100%', backgroundColor: 'rgb(255, 51, 0)', borderRadius: '50px', boxShadow: 'none',
            '&:hover': { backgroundColor: 'rgba(255, 51, 0, 0.8)', boxShadow: 'none' },
      }}},

      MuiListItem: { // || ListItem ||
        styleOverrides: {
          root: { // Predeterminado
            fontSize:'14px', paddingLeft: '20px',
            '&::before': { content: '"•"', position: 'absolute', left: '8px', color: '#ff7d00', fontSize: '14px' },
      }}},
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //Función - Botón 'Iniciar sesión'
  function handleClickLogin() {
    navigate('/'); // Colocar la ruta
  }

  //Función - Botón 'Crear cuenta'
  function handleClickCreateAccount() {
    navigate('/'); // Colocar la ruta
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Container sx={{ width: '100vw', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: { xs: 'column', sm: 'row' } }}>
          
          {/*|| • COLUMNA 01 - INICIAR SESIÓN • ||*/}
          <Card sx={{ width: { xs: '100%', sm: '40%' }, height: { xs: 'auto', md: '530px' }, py: '40px', px: '30px', boxSizing: 'border-box', boxShadow: 'none', mb: { xs: 3, sm: 0 }}}>

            <Typography variant='h1' sx={{ mb: '20px' }}> Iniciar sesión </Typography>

            <Typography variant='h2' component='span'> Correo electrónico <Typography variant='h6' component='span'> * </Typography> </Typography>
            <TextField sx={{ mt: "10px", mb: "20px" }} type='email' placeholder='Ej. nombre@mail.com' variant='outlined' required />

            <Typography variant='h2' component='span'> Contraseña <Typography variant='h6' component='span'> * </Typography> </Typography>
            <TextField sx={{ mt: "10px", mb: "20px" }} type={showPassword ? 'text' : 'password'} placeholder='Aa12345' required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={() => setShowPassword((show) => !show)} edge='end'>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
            )}}}/>

            <Typography sx={{ mb: "20px" }}> <Link href='#'> Olvidé mi contraseña </Link> </Typography> {/* Colocar la ruta */}

            <Box sx={{ display: 'flex', justifyContent: 'left', flexDirection: 'row', backgroundColor: 'white' }}>
              <Card sx={{ minWidth: "160px", height: "40px", p: '12px', backgroundColor: '#1A73E8', textAlign: "left" }}>
                <Typography variant='h3' component='span'>
                  Protección de <Typography variant='h5' component='span'> reCAPTCHA </Typography>
                </Typography>
                <Typography variant='h3' sx={{ mt: "4px" }}>
                  <Link variant='custom' href='https://policies.google.com/privacy?hl=es'> Privacidad </Link> - <Link variant='custom' href='https://policies.google.com/terms?hl=es'> Términos </Link>
                </Typography>
              </Card>
              <Card sx={{px: '10px', display: 'flex', justifyContent: 'end', alignItems: 'center', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.08), 2px 0px 5px rgba(0, 0, 0, 0.08), 0px -2px 5px rgba(0, 0, 0, 0.08), -2px 0px 5px rgba(0, 0, 0, 0.08)'}}>
                <Box component='img' alt='Logo de reCAPTCHA' src='https://www.gstatic.com/recaptcha/api2/logo_48.png' />
              </Card>
            </Box>

            <Button variant='contained' onClick={handleClickLogin} sx={{ mt: '10px', py: '12px', px: '20px', textTransform: 'none' }}>
              <Typography variant='h4'>Iniciar sesión</Typography>
            </Button>

          </Card>

          {/*|| • COLUMNA 02 - CREAR CUENTA • ||*/}
          <Card sx={{minWidth: { xs: '100%', sm: '60%' }, height: { xs: 'auto', md: '530px' }, p: '40px', boxSizing: 'border-box', boxShadow: 'none', backgroundColor: '#F8F8F8'}}>

            <Typography variant='h1' sx={{ mb: '65px' }}> Crear cuenta </Typography>

            <Typography variant='h7' sx={{ ml: '8px' }}> Crea una y aprovecha los beneficios: </Typography>

            <List sx={{ mt: '10px', mb: '35px' }}>
              <ListItem>Realiza tus compras de manera más ágil.</ListItem>
              <ListItem>Guarda múltiples direcciones de envío y facturación.</ListItem>
              <ListItem>Realiza el seguimiento a tus compras y revisa tus pedidos realizados.</ListItem>
              <ListItem>Haz una lista de productos favoritos.</ListItem>
            </List>

            <Button variant='contained' onClick={handleClickCreateAccount} sx={{ py: '12px', px: '20px', textTransform: 'none' }}>
              <Typography variant='h4'>Crear cuenta</Typography>
            </Button>
            
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
