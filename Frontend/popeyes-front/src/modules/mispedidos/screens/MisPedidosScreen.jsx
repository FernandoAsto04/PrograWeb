import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ThemeProvider, createTheme, Container, Card, Box, Paper, Typography, TextField, Select, MenuItem, Button, Link} from '@mui/material';

export default function MisPedidos_Screen() {

  //THEME
  const customTheme = createTheme({
    typography: {
      fontFamily: 'Open Sans, Helvetica Neue', // Predeterminado
      h1: {fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 780}, // "Sigue tu pedido"
      h2: {fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 500}, // "Para saber el estado de tu pedido, ..."
      h3: {fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 500, }, // "Elige tu canal | Escribe tu número de pedido"
      h4: {fontSize: 'clamp(10px, 1.8vw, 13px)', fontWeight: 780, color: 'white'}, // En Boton: "Buscar"
      h5: {fontSize: 'clamp(12px, 1.8vw, 14px)', textAlign: 'center'} // "Si tienes consultas sobre tu pedido, ..."
    },
    components: {
      MuiTextField: { // TextField
        styleOverrides: {
          root: { // Predeterminado
            '& .MuiOutlinedInput-root': {
              '& fieldset': {borderRadius: '8px'},
              '&.Mui-focused fieldset': {borderColor: 'orange'},
              '& input::placeholder': {
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                color: '#000000',
                opacity: 0.7,
                transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
              },
              '& input:focus::placeholder': {
                transform: 'translateX(-100%)',
              },
              '& .MuiInputBase-input': {
                padding: '16px',
      }}}}},

      MuiSelect: { // Select
        styleOverrides: {
          root: { // Predeterminado
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'orange',
      }}}},

      MuiButton: { // Button
        styleOverrides: {
          root: { // Predeterminado
            width: '100%', backgroundColor: 'rgb(255, 51, 0)', borderRadius: '50px', boxShadow: 'none',
            '&:hover': {backgroundColor: 'rgba(255, 51, 0, 0.8)', boxShadow: 'none'},
      }}},

      MuiLink: { // Link
        styleOverrides: {
          root: { // Predeterminado
            color: '#F25600', textDecoration: 'none',
            '&:hover': {textDecoration: 'underline'},
      }}},
    },
  });

  const [opcionSelect, setOpcionSelect] = useState();
  const navigate = useNavigate();

  //Función - Botón 'Buscar'
  function handleClickBuscar() {
    navigate('/'); // Colocar la ruta
  }

  //Función - Select 'Web, Callcenter'
  const handleChangeSelect = (e) => {
    setOpcionSelect(e.target.value);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', px: 2}}>
        <Card sx={{ width: '100%', maxWidth: { xs: '100%', sm: '90%', md: '820px' }, mt: '60px', mb: '20px', p: { xs: '16px', sm: '24px', md: '40px', lg: '56px' }, boxSizing: 'border-box', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
          <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4}}>

            {/*|| COLUMNA 01 - IMAGEN ||*/}
            <Paper sx={{minWidth: '130px', boxShadow: 'none', display: 'flex', justifyContent: 'center'}}>
              <Card sx={{display: 'flex', justifyContent: 'center', alignItems: 'start', boxShadow: 'none'}}>
                <Box component='img' alt='Logo_Pollo_Pedido' src='https://www.popeyes.com.pe/static/version1730924885/frontend/Ngr/popeyes/es_PE//images/ordertracking/ordertracking.jpg' sx={{width: { xs: '100px', sm: '130px' }, height: 'auto'}} />
              </Card>
            </Paper>

            {/*|| COLUMNA 02 - SIGUE TU PEDIDO ||*/}
            <Paper sx={{minWidth: { xs: '100%', md: '520px' }, display: 'flex', justifyContent: 'left', flexDirection: 'column', boxShadow: 'none'}}>

              <Typography variant='h1' sx={{mb: '15px'}}>¡Sigue tu pedido!</Typography> <br/>

              <Typography variant='h2' sx={{mb: '30px'}}>Para saber el estado de tu pedido, ingresa el número de pedido que te envíamos al correo en el momento de realizar tu compra</Typography>

              <Box sx={{display: 'flex', justifyContent: 'left', flexDirection: { xs: 'column', sm: 'row' }, gap: 2}}>

                {/* SUBSECCIÓN 01 - SELECT */}
                <Paper sx={{flex: 1, boxShadow: 'none'}}>
                  <Typography variant='h3'>Elige tu canal</Typography>
                  <Select
                    labelId='select-label'
                    value={opcionSelect || ''}
                    onChange={handleChangeSelect}
                    label='Selecciona'
                    displayEmpty
                    sx={{width: '100%', my: '12px'}}
                  >
                    <MenuItem value='' disabled>Selecciona</MenuItem>
                    <MenuItem value='Web'>Web</MenuItem>
                    <MenuItem value='CallCenter'>CallCenter</MenuItem>
                  </Select>
                </Paper>

                {/* SUBSECCIÓN 02 - TEXTFIELD */}
                <Paper sx={{flex: 1, boxShadow: 'none'}}>
                  <Typography variant='h3'>Escribe tu número de pedido</Typography>
                  <TextField type='text' placeholder='N° de Pedido' sx={{width: '100%', my: '12px'}} />
                </Paper>
              </Box>

              <Button variant='contained' onClick={handleClickBuscar} sx={{width: 'fit-content', my: '12px', py: '13px', px: '32px', textTransform: 'none'}}>
                <Typography variant='h4'>Buscar</Typography>
              </Button>

            </Paper>

          </Box>
        </Card>

        <Typography variant='h5' sx={{mt: '36px', mb: '10px'}}>Si tienes consultas sobre tu pedido, llámanos <Link href='tel:631-6000'>AQUÍ 631-6000</Link></Typography>
        
      </Container>
    </ThemeProvider>
  );
}
