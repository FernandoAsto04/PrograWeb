import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ThemeProvider, createTheme, CssBaseline, Container, Card, Box, Paper, Typography, TextField, Button, Link, InputAdornment, Autocomplete, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export default function LocalesScreen() {

  //THEME
  const customTheme = createTheme({
    typography: {
      fontFamily: 'Open Sans, Helvetica Neue', // Predeterminado
      h1: {fontSize: "30px", fontWeight: 780, marginBottom: "40px"},                    // "Encuentra nuestra tienda más cerca de ti"
      h2: {fontSize: "14px", fontWeight: 500, marginBottom: "10px"},                    // "El menú, las ofertas especiales, ..."
      h3: {fontSize: "15px", fontWeight: 780, marginBottom: "10px", color: "#F25600"},  // "(5122) AREQUIPA FOOD COURT"
      h4: {fontSize: "13px"},                                                           // "Av. Porongoche 500 Local 01B, Paucarpata, Arequipa, Arequipa,"
      h5: {fontSize: '13px', fontWeight: 700, color: 'white'},                          // Boton "Ver local"
      h6: {fontSize: "13px", fontWeight: 780, marginBottom: "10px"},                    // "Tipo de Despacho"
      h7: {fontSize: "12px", fontWeight: 780, color:"white", textAlign:"center", backgroundColor: "#FF7F00"}, // "Nueva Tienda"
    },
    
    components: {
      MuiCssBaseline: { // CSS
        styleOverrides: {
          '.Box_01::-webkit-scrollbar': {width: '6px'},
          '.Box_01::-webkit-scrollbar-thumb': {backgroundColor: 'gray', borderRadius: '4px'},
          '.Box_01::-webkit-scrollbar-track': {backgroundColor: '#e0e0e0', borderRadius: '4px'},
          '.MuiAutocomplete-listbox::-webkit-scrollbar': { width: '6px' },
          '.MuiAutocomplete-listbox::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray',
            borderRadius: '4px',
          },
          '.MuiAutocomplete-listbox::-webkit-scrollbar-track': {
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
          },
        }},

      MuiButton: { // Button
        styleOverrides: {
          root: { // Predeterminado
            width: '100%', backgroundColor: 'rgb(255, 51, 0)', borderRadius: '50px', boxShadow: 'none',
            '&:hover': {backgroundColor: 'rgba(255, 51, 0, 0.8)', boxShadow: 'none'},
      }}},

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
              '& .MuiInputBase-input': {
                padding: '4px',
              },
      }}}},

      MuiAutocomplete: { // || Autocomplete ||
        styleOverrides: {
          option: {
            color: "#333333", // Color de texto
            padding: "8px 16px", // Espaciado
            fontSize: "14px", // Tamaño de fuente
            "&[aria-selected='true']": {
              backgroundColor: "#f0f0f0", // Color de fondo para la opción seleccionada
              color: "#000000", // Color de texto para la opción seleccionada
            },
            "&:hover": {
              backgroundColor: "rgba(242, 86, 0, 1) !important", // Color de fondo en hover
              color: "white",
              fontWeight: 700,
            },
          },
          popper: {
            boxShadow: "none", // Sombra del menú desplegable
            borderRadius: "4px", // Bordes redondeados del menú
          },
          listbox: {
            maxHeight: "200px", // Altura máxima de la lista para habilitar la barra desplazadora
            overflowY: "auto", // Habilita la barra desplazadora en la lista de opciones
          },    
      }},

      MuiInputAdornment: { // || InputAdornment ||
        styleOverrides: {
          root: {
            position: 'absolute', // Asegura que el adornment se quede al final
            right: '0px', // Ajuste del espacio derecho
            marginRight: '0px',
          },
        },
      },

      MuiLink: { // Link
        styleOverrides: {
          root: { // Predeterminado
            color: '#000000de', textDecoration: 'none',
            '&:hover': {textDecoration: 'underline'},
      }}},
    }
  });

  const opciones = [
    { label: "Arequipa - (5122) Arequipa Food Court", locacion: "(5122) AREQUIPA FOOD COURT", calle: "Av. Porongoche 500 Local 01B, Paucarpata, Arequipa", distrito: "Arequipa", ciudad: "Arequipa", region: "Arequipa", cod_postal: "04001", pais: "PE", telefono: "01 631-6000", retiro_tienda: true, delivery: true, nueva_tienda: false },
    { label: "Callao - (5115) Bellavista", locacion: "(5115) BELLAVISTA", calle: "Mall Aventura Plaza Bellavista (Av. Oscar R. Benavides N° 3866)", distrito: "Bellavista", ciudad: "Callao", region: "Callao", cod_postal: "070102", pais: "PE", telefono: "01 631-6000", retiro_tienda: true, delivery: true, nueva_tienda: false },
    { label: "Lima - (5127) Benavides", locacion: "(5127) BENAVIDES", calle: "Av. Alfredo Benavides N° 5431 Mz. D2 Lt. 18, Urb. Las Gardenias, Santiago de Surco", distrito: "Santiago de surco", ciudad: "Lima", region: "Lima", cod_postal: "150140", pais: "PE", telefono: "01 631-6000", retiro_tienda: true, delivery: true, nueva_tienda: false },
    { label: "Cajamarca - (5158) Cajamarca", locacion: "(5158) CAJAMARCA", calle: "Av. Vía de Evitamiento Norte Lote 1A - Interior FC 02, en el segundo nivel del Centro Comercial Real Plaza Cajamarca", distrito: "Cajamarca", ciudad: "Cajamarca", region: "Cajamarca", cod_postal: "060101", pais: "PE", telefono: "01 631-6000", retiro_tienda: true, delivery: false, nueva_tienda: true },
    { label: "Lima - (5100) Centro Cívico", locacion: "(5100) CENTRO CÍVICO", calle: "Av. Garcilaso de la Vega N° 1337", distrito: "El Agustino", ciudad: "Lima", region: "Lima", cod_postal: "150101", pais: "PE", telefono: "01 631-6000", retiro_tienda: true, delivery: true, nueva_tienda: false }
  ];

  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  // Función - Filtro de tiendas
  const tiendasFiltradas = opciones.filter((tienda) =>
    tienda.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  //Función - Botón 'Ver Local'
  function handleClickVerLocal() {
    navigate("/"); // Colocar la ruta
  };

  return (
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <Container sx={{ width: "1240px", height: "700px", px: "20px", display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
      <Card sx={{ width: "100%", height: "100%", boxShadow: 'none' }}>
        <Box sx={{ height: "100%", display: 'flex', flexDirection: 'row' }}>

          {/*COLUMNA PRINCIPAL 01 - BUSCADOR DE TIENDA */}
          <Paper sx={{ width: "720px", display: "flex", justifyContent: "center", alignItems: "center", flex: 1, backgroundColor:'#F8F8F8', boxShadow: 'none' }}>
            <Card sx={{ maxWidth: "400px", pt: "30px", pb: "100px", px: "30px", display: "flex", justifyContent: "left", flexDirection: "column", backgroundColor:'#F8F8F8', boxShadow: 'none' }}>
              <Typography variant='h1'> Encuentra nuestra tienda más cerca de ti </Typography>
              <Typography variant='h2'> El menú, las ofertas especiales y los precios pueden variar según el restaurante de Popeyes. </Typography>

              <Autocomplete
                freeSolo
                options={opciones}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                sx={{backgroundColor: 'white'}}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Ingresa nombre de tienda o dirección" variant="outlined" fullWidth
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        endAdornment: (
                          <InputAdornment position="end" sx={{ mr: '8px' }}>
                            {inputValue ? (
                              <IconButton onClick={() => setInputValue('')} sx={{ mr: '-8px' }}>
                                <ClearIcon />
                              </IconButton>
                            ) : (
                              <SearchIcon />
                            )}
                          </InputAdornment>
                        ),
                      }}}
                  />
                )}
              />
            </Card>
          </Paper>

          {/*COLUMNA PRINCIPAL 02 - OPCIONES DE TIENDAS FILTRADAS */}
          <Box className="Box_01" sx={{ width: "720px", maxHeight: "100%", padding: "16px", display: "flex", justifyContent: "left", flexDirection: "column", flex: 1, overflowY: "auto" }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', gap: 2 }}>
              {tiendasFiltradas.map((tienda) => (
                <Paper key={tienda.value} sx={{ flex: 1, borderBottom: '2px solid #e6ebf1', boxShadow: 'none' }}>
                  <Box sx={{ p: "20px", display: 'flex', justifyContent: 'left', flexDirection: 'row', gap: 3 }}>

                    {/* SECCIÓN 01 - INFORMACIÓN PRINCIPAL */}
                    <Paper sx={{ maxWidth: "240px", display: "flex", justifyContent: "left", flexDirection: "column", boxShadow: 'none' }}>
                      <Typography variant='h3'>{tienda.locacion}</Typography>
                      <Typography variant='h4'>
                        {tienda.calle} <br/>
                        {tienda.distrito}, {tienda.ciudad}, {tienda.region} <br/>
                        {tienda.cod_postal}, {tienda.pais} <br/>
                        <Link className='Link_01' href='tel:631-6000'>{`Teléfono: ${tienda.telefono}`}</Link>
                      </Typography>
                      <br />
                      <Button variant="contained" onClick={handleClickVerLocal} sx={{ py: "10px", px: "35px", width: 'fit-content', textTransform: 'none' }}>
                        <Typography variant="h5">Ver local</Typography>
                      </Button>
                    </Paper>

                    {/* SECCIÓN 02 - TIPO DE DESPACHO */}
                    <Paper sx={{ display: "flex", justifyContent: "left", flexDirection: "column", boxShadow: 'none' }}>

                      <Typography variant='h6'>Tipo de Despacho</Typography>
                      
                      {/* Condicionales para los valores de retiro_tienda, delivery y nueva_tienda */}
                      <Paper sx={{display:"flex", justifyContent:"left", alignItems:'center', flexDirection:"row", gap: 1, boxShadow: 'none'}}>
                        {tienda.delivery && (
                          <>
                            <DeliveryDiningIcon sx={{color: "#F25600" }} />
                            <Typography variant='h4' sx={{pr:'16px'}}>Delivery</Typography>
                          </>
                        )}
                        {tienda.retiro_tienda && (
                          <>
                            <LocationOnIcon sx={{mr: '-4px',color: "#F25600" }} />
                            <Typography variant='h4'>Retiro en Tienda</Typography>
                          </>
                        )}
                      </Paper>

                      {tienda.nueva_tienda && (
                        <>
                          <br/>
                          <Typography sx={{py:"5px"}} variant='h7'>Nueva Tienda</Typography>
                        </>
                      )}
                    </Paper>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Card>
    </Container>
  </ThemeProvider>
)};