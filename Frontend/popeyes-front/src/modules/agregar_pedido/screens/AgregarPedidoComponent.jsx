import React, {useState} from 'react';
import { ThemeProvider, createTheme, Card, Box, Paper, Typography, Button, Link, IconButton, Avatar, Stepper, Step, StepLabel} from '@mui/material';
import { ArrowForward, ArrowBack, ExpandLess, ExpandMore, Info} from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CssBaseline from '@mui/material/CssBaseline';

export default function AgregarPedido_Screen() {

  //THEME
  const customTheme = createTheme({
    typography: {
      fontFamily: 'Open Sans, Helvetica Neue', // Predeterminado
      h1: {fontSize: '13px', fontWeight: 500, color:'black'}, // Ruta: "Inicio, Menu, Nombre del producto"
      h2: {fontSize: '14px', fontWeight: 700, color: 'white', position: 'absolute', top: 8, left: 8, backgroundColor: '#F25600',borderRadius: '4px'}, // Porcentje de descuento "46% Off"
      h3: {fontSize: '19px', fontWeight: 750, color:'black'}, // Nombre del producto: "Cyber Sándwich Cajún"
      h4: {fontSize: '12.5px', fontWeight: 600, color:'black'}, // Contenido: "2 Sándwiches y 2 Papas, ...", "Retiros disponibles"
      h5: {fontSize: '24px', fontWeight: 750, color:'black'}, // Precio venta: "S/29.90"
      h6: {fontSize: '14px', fontWeight: 750, color:'rgba(0, 0, 0, 0.4)'}, // Precio venta: "S/29.90"
      h7: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '13px', fontWeight: 600, color:'rgba(0, 0, 0, 0.8)'}, // "Envío: Elige una sucursal"
      h8: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '20px', fontWeight: 750, color:'black'}, // Precio venta: "S/29.90"
      h9: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '13px', fontWeight: 750, color:'#D70000', marginLeft:'8px'}, // "Obligatorio"
      h10: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '13px', fontWeight: 600, color:'black'}, // "Selecciona 2 opciones"
      h11: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '13px', fontWeight: 500, color:'#EF6A00', backgroundColor:'rgba(239, 106, 0, 0.2)', borderRadius:'16px', border:'1px solid #EF6A00', padding:'10px'}, // "Selección 0/2"
      h12: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '13px', fontWeight: 500, color:'#4C842A', backgroundColor:'rgba(76, 132, 42, 0.2)', borderRadius:'16px', border:'1px solid #4C842A'}, // "Selección 0/2"
      h13: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '14px', fontWeight: 750, color:'#FF7D00'}, // Precio venta: "S/29.90"
      h14: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '13.5px', fontWeight: 700, color:'#F25600', textTransform: 'none'},
      h15: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '13.5px', fontWeight: 700, color:'white', textTransform: 'none'}, 
      h16: {fontFamily: 'Open Sans, Helvetica Neue', fontSize: '14.5px', fontWeight: 750, color:'black'}, // Nombre del producto: "Cyber Sándwich Cajún"
    },

    components: {
      MuiLink: { // || LINK ||
        styleOverrides: {
          root: { 
            color: 'black', textDecoration: 'none',     // Predeterminado
            '&:hover': { textDecoration: 'underline' }  // Hover
      }}},

      MuiStepIcon: { // || STEP_ICON ||
        styleOverrides: {
          root: {
            color: 'white', border: '2px solid gray', borderRadius: '50%',   // Predeterminado (Pasos futuros)
            '&.Mui-active': { color: 'white', borderColor: '#F25600'},       // Paso actual
            '&.Mui-completed': { color: '#F25600', borderColor: '#F25600' }, // Pasos completados
      }}},

      MuiStepLabel: { // || STEP_LABEL ||
        styleOverrides: {
          label: {
            fontWeight: 750, color: 'rgba(102, 102, 102, 0.7)',     // Predeterminado (Pasos futuros)
            '&.Mui-active': { fontWeight: 750, color: 'black' },    // Paso actual
            '&.Mui-completed': { fontWeight: 750, color: 'black' }, // Pasos completados
      }}},

      MuiStepConnector: { // || STEP_CONNECTOR ||
        styleOverrides: {
          root: {
            width:'78%', marginLeft:'-8px',   // Predeterminado (Pasos futuros)
            '&.Mui-active .MuiStepConnector-line': { borderColor: '#F25600', borderWidth: 2},     // Paso actual
            '&.Mui-completed .MuiStepConnector-line': { borderColor: '#F25600', borderWidth: 2},  // Pasos completados
          },
          line: {
            borderColor: 'gray', borderTopWidth: 2 // Predeterminado
      }}},

      MuiBox: { // || BOX ||
        styleOverrides: {
          root: {
            overflow: 'visible' // Predeterminado
      }}},

      MuiCard: { // || CARD ||
        styleOverrides: {
          root: {
            overflow: 'visible' // Predeterminado
      }}},

      MuiButton: { // || BUTTON ||
        variants: [
          {
            props: { variant: 'variant_01' },
            style: {
              backgroundColor: 'white', borderRadius: '50px', boxShadow: 'none', border: '1px solid #F25600',
              '&:hover': { backgroundColor: 'rgba(255, 51, 0)', boxShadow: 'none', color: 'white',
                '.MuiSvgIcon-root': {color: 'white'},
                '.MuiTypography-root': { color: 'white'},
              },
          }},
          {
            props: { variant: 'variant_02' },
            style: {
              backgroundColor: 'rgb(255, 51, 0)', borderRadius: '50px', boxShadow: 'none',
              '&:hover': { backgroundColor: 'rgba(255, 51, 0, 0.8)', boxShadow: 'none' },
              '&.Mui-disabled': { backgroundColor: 'rgba(255, 51, 0, 0.5)', color: 'rgba(255, 255, 255, 0.5)'},
          }},
      ]},
    },
  });

  // DATA ESTÁTICA: PRODUCTO
  const producto = {
    nombre: 'Cyber Sándwich Cajún',
    descripcion:'2 Sándwiches y 2 Papas Regulares. Salsas: 2 Ají, 2 Mayonesa y 2 Ketchup.',
    precio_base: 54.00,
    porcentaje_descuento: 46,
    precio_final: 29.90,
    imagen: 'https://www.popeyes.com.pe/media/catalog/product/p/p/pp2146468924.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg',
    es_mas_vendidos: true,  // No se usa en esta screen, coloqué manualmente un valor random
    estado: true,           // No se usa en esta screen, coloqué manualmente un valor random
    id_tipo_producto: '1',  // No se usa en esta screen, coloqué manualmente un valor random
  }

  // DATA ESTÁTICA: SECCIONES
  const steps = ['POLLO', 'PAPAS', 'SALSAS', 'EXTRAS'];

  // DATA ESTÁTICA: MENSAJES DE INDICACIONES (POR CADA SECCIÓN)
  const msg_in_steps = [
    { msg: ['Elige tu sándwich favorito'], obligatorio: [true] },
    { msg: ['Elige el tamaño de la papa cajún'], obligatorio: [true] },
    { msg: ['Elige salsas', 'Desea salsas extra'], obligatorio: [true, false] },
    { msg: ['Desea acompañar su orden'], obligatorio: [false] },
  ];

  // DATA ESTÁTICA: MENSAJES DE CANTIDAD POSIBLE A SELECCIONAR (POR CADA SECCIÓN)
  const msg_cant_selections = [
    ['Selecciona 2 opciones'],
    ['Selecciona 2 opciones'],
    ['Selecciona 3 opciones', 'Selecciona entre 0 y 12 opciones'],
    ['Selecciona entre 0 y 12 opciones']
  ];

  // DATA ESTÁTICA: OPCIONES DE SELECCIÓN DE LA SUBSECCIÓN 'POLLO'
  const opciones_pollo = [
    { name: 'Sándwich Ají Mix', price: 0, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146463997_1.png' },
    { name: 'Sándwich mayo', price: 0, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146463996_1.png' },
    { name: 'Sándwich Tártara Golf', price: 0, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146466501_1.png' },
  ]
  
  // DATA ESTÁTICA: OPCIONES DE SELECCIÓN DE LA SUBSECCIÓN "PAPAS"
  const opciones_papas = [
    { name: 'Papa Cajún Regular', price: 0, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146461295.png' },
    { name: 'Papa Cajún Grande', price: 2, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146461294.png' },
    { name: 'Papa Cajún Familiar', price: 5, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146461293.png' },
    { name: 'Papa Cajún Super Familiar', price: 8, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146461296.png' },
  ]

  // DATA ESTÁTICA: OPCIONES DE SELECCIÓN DE LA SUBSECCIÓN "SALSAS"
  const opciones_salsas = [
    { name: '2 Mayonesas', price: 0, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146463587_1.png' },
    { name: '2 Ketchups', price: 0, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146463588_1.png' },
    { name: '2 Ajíes', price: 0, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146465854_1.png' },
  ]

  // DATA ESTÁTICA: OPCIONES DE SELECCIÓN DE LA SUBSECCIÓN "SALSAS EXTRAS"
  const opciones_salsas_extras = [
    { name: 'Extra Mayonesa x1', price: 0.50, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146463587_1.png' },
    { name: 'Extra Ketchup x1', price: 0.50, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146463588_1.png' },
    { name: 'Extra Ají x1', price: 0.60, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146465854_1.png' },
  ]

  // DATA ESTÁTICA: OPCIONES DE SELECCIÓN DE LA SUBSECCIÓN "EXTRAS"
  const opciones_extras = [
    { name: 'Chicharrón Pop', price: 5.90, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146463492_1.png' },
    { name: 'Extra Papa Cajún Familiar', price: 9.90, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146461293.png' },
    { name: '6 Alitas Picantes', price: 12.90, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146461252_1.png' },
    { name: '9 Nuggets', price: 12.90, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146461409_1.png' },
    { name: 'Coca Cola 1 L', price: 8.90, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146465252_1.png' },
    { name: 'Inca Kola Sabor Original 1 L', price: 8.90, img:'https://www.popeyes.com.pe/media/catalog/product/2/1/2146465254_1.png' },
  ]

  // ESTADO: SECCIÓN ACTUAL
  const [currentStep, setCurrentStep] = useState(0);

  // ESTADO: PRECIO_BASE_MOSTRADO
  const [precioBaseMostrado, setPrecioBaseMostrado] = useState(producto.precio_base);

  // ESTADO: PRECIO_FINAL_MOSTRADO
  const [precioFinalMostrado, setPrecioFinalMostrado] = useState(producto.precio_final);

  // FUNCIÓN: ACTUALIZA EL VALOR DE 'precioBaseMostrado' Y 'precioFinalMostrado'
  const handleModificarPrecios = (prec_efecto) => {
    setPrecioBaseMostrado((prevPrecio) => prevPrecio + prec_efecto);
    setPrecioFinalMostrado((prevPrecio) => prevPrecio + prec_efecto);
  };
  
  // ESTADO: CANTIDAD SELECCIONADA (POR CADA SUBSECCIÓN)
  const [cantselectedOptions_pollo, setCantSelectedOptions_Pollo] = useState(0);
  const [cantselectedOptions_papas, setCantSelectedOptions_Papas] = useState(0);
  const [cantselectedOptions_salsas, setCantSelectedOptions_Salsas] = useState(3);
  const [cantselectedOptions_salsas_extra, setCantSelectedOptions_Salsas_Extra] = useState(0);
  const [cantselectedOptions_extras, setCantSelectedOptions_Extras] = useState(0);

  // FUNCIÓN: ACTUALIZA LA CANTIDAD SELECCIONADA 'cantselectedOptions' DE LA SUBSECCIÓN INDICADA
  const handleOptionChange = (funcion_set, cant_select_previa, cant_efecto) => {
    funcion_set(cant_select_previa + cant_efecto);
  };
  
  // ESTADO: EXPANSIÓN
  const [expanded, setExpanded] = useState(true);

  // FUNCIÓN: ACTUALIZACIÓN DEL VALOR DE "expanded"
  const handleExpandClick = () => setExpanded(!expanded);

  // CONSTANTE: OPCIONES DE SELECCIÓN DE CADA SUBSECCIÓN PRESENTE EN LA "SECCIÓN ACTUAL"
  const array_opciones = 
    currentStep === 0 ? [opciones_pollo] :
    currentStep === 1 ? [opciones_papas] :
    currentStep === 2 ? [opciones_salsas, opciones_salsas_extras] :
    currentStep === 3 ? [opciones_extras] : [];

  // CONSTANTE: CANTIDADES SELECCIONADAS DE CADA SUBSECCIÓN PRESENTE EN LA "SECCIÓN ACTUAL"
  const cantidades_cant_selected = 
    currentStep === 0 ? [cantselectedOptions_pollo] :
    currentStep === 1 ? [cantselectedOptions_papas] :
    currentStep === 2 ? [cantselectedOptions_salsas, cantselectedOptions_salsas_extra] :
    currentStep === 3 ? [cantselectedOptions_extras] : 0;

  // CONSTANTE: FUNCIONES SET DE CANTIDAD SELECCIONADA DE CADA SUBSECCIÓN PRESENTE EN LA "SECCIÓN ACTUAL"
  const funciones_set_cant_selected = 
    currentStep === 0 ? [setCantSelectedOptions_Pollo] :
    currentStep === 1 ? [setCantSelectedOptions_Papas] :
    currentStep === 2 ? [setCantSelectedOptions_Salsas, setCantSelectedOptions_Salsas_Extra] :
    currentStep === 3 ? [setCantSelectedOptions_Extras] : noop;

  // CONSTANTE: CANTIDADES MÁXIMAS QUE SE PUEDEN SELECCIONAR EN CADA SUBSECCIÓN PRESENTE EN LA "SECCIÓN ACTUAL"
  const cantidades_max_selected = 
    currentStep === 0 ? [2] :
    currentStep === 1 ? [2] :
    currentStep === 2 ? [3,12] :
    currentStep === 3 ? [12] : 0;

  // CONSTANTE: UNIÓN DE TODAS LAS OPCIONES DE SELECCIÓN DE CADA SUBSECCIÓN ("POLLO, PAPAS, SALSAS, SALSAS EXTRAS, EXTRAS")
  const array_opciones_total = [opciones_pollo, opciones_papas, opciones_salsas, opciones_salsas_extras, opciones_extras];

  // CONSTANTE: NOMBRE DE TODAS LAS OPCIONES CON SU RESPECTIVO VALOR INICIAL DE LAS CANTIDAD SELECCIONADA
  const initialQty = array_opciones_total.reduce((acc, opciones) =>
    {
      opciones.forEach((opcion) => {
        acc[opcion.name] = opciones === opciones_salsas ? 1 : 0;
      });
      return acc;
    }, {}
  );

  // ESTADO: CANTIDAD SELECCIONADA (POR CADA OPCIÓN)
  const [qty, setQty] = useState(initialQty); 

  // FUNCIÓN: ACTUALIZA LA CANTIDAD SELECCIONADA DE LA OPCIÓN RESPECTIVA (INCREMENTAR O DECREMENTAR)
  const handleQuantityChange = (name, action) => {
    setQty(prevQty => {
      const newQty = action === 'increment' ? prevQty[name] + 1 : prevQty[name] > 0 ? prevQty[name] - 1 : 0;
      return { ...prevQty, [name]: newQty };
    });
  };

  // ESTADO: OPCIÓN ACTIVA (PERMITE MOSTRAR O DEJAR DE MOSTRAR LA IMAGEN DE LA OPCIÓN)
  const [activeOption, setActiveOption] = useState(null);

  // FUNCIÓN: ACTUALIZACIÓN DE 'activeOption' (MUESTRA O DEJA DE MOSTRAR LA IMAGEN DE LA OPCIÓN)
  const handleClick = (optionName) => {
    setActiveOption(activeOption === optionName ? null : optionName);
  };

  // FUNCIÓN: ACTUALIZACIÓN DE 'activeOption' (DEJA DE MOSTRAR LA IMAGEN DE LA OPCIÓN)
  const handleMouseLeaveImage = () => {
    setActiveOption(null);
  };

  // ESTADO: CANTIDAD DE PEDIDOS A AGREGAR AL CARRITO
  const [cantPedidos, setCantPedidos] = useState(1);

  const handleClickCantPedidos = (action) => {
    setCantPedidos( prevCant => {
      const newCant = action === 'increment' ? prevCant + 1 : prevCant - 1;
      return newCant;
    })
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box sx={{width: '99vw', height: '98vh', display: 'flex', justifyContent: 'center', alignItems: 'start'}}>
        <Box sx={{width:'64%', pt: '24px'}}>

          {/* || PARTE 01 - RECORRIDO || */}
          <Box sx={{mb: '16px'}}>
            <Typography variant='h1'>
              <Link href="#"> Inicio </Link> {' > '}    {/* Colocar la ruta */}
              <Link href="#"> Menu </Link> {' > '}      {/* Colocar la ruta */}
              {producto.nombre}
            </Typography>
          </Box>

          {/* || PARTE 02 - PERSONALIZACIÓN DEL PEDIDO || */}
          <Box sx={{display:'flex', gap:'32px'}}>

            {/* || SUBPARTE 01 - IMAGEN DEL PRODUCTO CON OFERTA|| */}
            <Box sx={{width:"34%", position:"relative"}} >
              <Avatar sx={{width: '100%', height: 'auto'}} variant="square" alt="Producto" src={producto.imagen}/>
              <Box sx={{mb:'16px'}} >
                <Typography variant="h2" sx={{py:'4px', px:'10px'}}> {producto.porcentaje_descuento}% Off </Typography>
              </Box>
              <Avatar src={producto.imagen} alt={producto.nombre} sx={{ width: '60px', height: '60px', position: 'absolute', top: 0, right: 0, mr: '10px' }} />
            </Box>
    
            {/* || SUBPARTE 02 - INFORMACIÓN DEL PRODUCTO || */}
            <Box sx={{width:"32%", display:"flex", flexDirection:"column", gap:'8px'}}>
              
              <Typography variant="h3" sx={{mb:'40px'}}> {producto.nombre} </Typography>
              <Typography variant="h4" sx={{mb:'10px'}}> {producto.descripcion} </Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="h5"> S/ {precioFinalMostrado.toFixed(2)} </Typography>
                <Typography variant="h6" sx={{ textDecoration: 'line-through', ml: '12px', mt: '4px' }}> S/ {precioBaseMostrado.toFixed(2)} </Typography>
              </Box>

              <Box sx={{width: '100%', my:'15px', py:'20px', borderTop: '1px solid rgba(128, 128, 128, 0.6)', borderBottom: '1px solid rgba(128, 128, 128, 0.6)'}}>
                <Typography variant="h7"> Envío: Elige una sucursal </Typography>
              </Box>
              
              <Typography variant="h4"> Retiros disponibles: </Typography>

              <Paper sx={{display:"flex", alignItems:'center', flexDirection:"row", gap: 2, boxShadow: 'none'}}>
                <LocationOnIcon sx={{mr: '-12px', color: "#F25600" }} />
                <Typography variant='h7'> Retiro en local </Typography>
                <DeliveryDiningIcon sx={{mr: '-12px', color: "#F25600" }} />
                <Typography variant='h7' sx={{pr:'16px'}}> Delivery </Typography>
              </Paper>

            </Box>
    
            {/* || SUBPARTE 03 - SELECCIÓN PERSONALIZADA || */}
            <Box sx={{width:'34%'}}>

              {/* || APARTADO 01 - BARRA DE PROGRESO DE SECCIÓN || */}
              <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label,stepIndex) => (
                    <Step key={label}>
                      <StepLabel> {stepIndex + 1}.{label} </StepLabel>
                    </Step>
                  )
                )}
              </Stepper>

              {/* || RECORRIDO DE OPCIONES PERTENECIENTES AL CURRENT_STEP || */}                
              {array_opciones.map((optionGroup, groupIndex) => 
                (
                  <div key={`group-${currentStep}-${groupIndex}`}>

                    {/* || APARTADO 02 - INSTRUCCIÓN DE SELECCIÓN || */}
                    <Box sx={{ mt: '20px', display: 'flex', alignItems: 'center' }}>
                      <Typography variant='h8'>
                        {msg_in_steps[currentStep].msg[groupIndex]}
                        {msg_in_steps[currentStep].obligatorio[groupIndex] && (
                          <Typography variant='h9'>
                            (Obligatorio)
                          </Typography>
                        )}
                      </Typography>
                    </Box>

                    {/* || APARTADO 03 - OPCIONES DE SELECCIÓN || */}
                    <Card variant="outlined" sx={{ mt: 1, p: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>

                      {/* || SUBAPARTADO 01 - CANTIDAD A SELECCIONAR Y CANTIDAD SELECCIONADA || */}
                      <Box display="flex" justifyContent='space-between' alignItems="center">
                        <Typography variant="h10" sx={{ml:'10px'}}>
                          {msg_cant_selections[currentStep][groupIndex]}
                        </Typography>

                        {msg_in_steps[currentStep].obligatorio[groupIndex] && (
                          <Typography 
                            variant={cantidades_cant_selected[groupIndex] === cantidades_max_selected[groupIndex] ? 'h12' : 'h11'} 
                            sx={{ ml:'60px', py: '4px', px: '12px' }}
                          >
                            {cantidades_cant_selected[groupIndex] === cantidades_max_selected[groupIndex]
                              ? 'Listo'
                              : `Selección ${cantidades_cant_selected[groupIndex]}/${cantidades_max_selected[groupIndex]}`}
                          </Typography>
                        )}

                        <IconButton onClick={handleExpandClick}>
                          {expanded ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </Box>

                      {/* || SUBAPARTADO 02 - OPCIONES DE SELECCIÓN Y BOTONES || */}
                      {expanded && (
                        <Box sx={{mt:'8px'}}>
                          {optionGroup.map((opt, optIndex) =>
                            (
                              <Box key={`opt-${opt.name}-${optIndex}`} sx={{height: '50px', borderTop: optIndex > 0 ? '1px solid black' : 'none',
                                display: (qty[opt.name] > 0 || cantidades_cant_selected[groupIndex] !== cantidades_max_selected[groupIndex]) ? 'flex' : 'none', justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>

                                  <Box onClick={() => handleClick(opt.name)} sx={{width: '70%', my: '4px', display: 'flex', justifyContent: 'left', alignItems: 'center', flexDirection: 'row', position: 'relative', cursor: 'pointer', overflow: 'visible'}}>
                                    <IconButton color="inherit"><Info sx={{fontSize: '14px'}} /></IconButton>
                                    <Avatar src={opt.img} sx={{width: '30px', height: '30px', mr: '8px'}} />
                                    <Box sx={{width: '45%'}}><Typography variant="body2">{opt.name}</Typography></Box>
                                    <Typography variant="h13" sx={{ml: 'auto'}}>{opt.price > 0 && `+S/ ${opt.price.toFixed(2)}`}</Typography>

                                    {activeOption === opt.name && (
                                      <Box sx={{width: '300px', height: '350px', p: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 20, backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ccc', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', flexDirection: 'column'}} onMouseLeave={handleMouseLeaveImage}>
                                        <img src={opt.img} alt="Imagen ampliada" style={{width: '260px', height: '260px'}} />
                                        <Typography variant="h3" sx={{mt: '20px'}}>{opt.name}</Typography>
                                      </Box>
                                    )}
                                  </Box>
                                  
                                  <Box sx={{width: '15%', display: 'flex', justifyContent: 'right', alignItems: 'center', flexDirection: 'row'}}>
                                    <IconButton onClick={() => { handleOptionChange(funciones_set_cant_selected[groupIndex], cantidades_cant_selected[groupIndex], -1); handleQuantityChange(opt.name, 'decrement'); handleModificarPrecios(-opt.price) }} disabled={qty[opt.name] === 0} sx={{width: '30px', height: '30px', fontSize: '14px', fontWeight: 750, color: 'black', border: '1px solid rgba(128, 128, 128, 0.4)', borderRadius: '50%', padding: '8px'}}>-</IconButton>
                                    <Box sx={{minWidth: '50%', display: 'flex', justifyContent: 'center'}}><Typography variant="body2" mx={1}>{qty[opt.name]}</Typography></Box>
                                    <IconButton onClick={() => { handleOptionChange(funciones_set_cant_selected[groupIndex], cantidades_cant_selected[groupIndex], 1); handleQuantityChange(opt.name, 'increment'); handleModificarPrecios(+opt.price) }} disabled={cantidades_cant_selected[groupIndex] === cantidades_max_selected[groupIndex]} sx={{width: '30px', height: '30px', fontSize: '14px', fontWeight: 750, color: 'black', border: '1px solid rgba(128, 128, 128, 0.4)', borderRadius: '50%', padding: '8px'}}>+</IconButton>
                                  </Box>

                              </Box>
                            )
                          )}
                        </Box>
                      )}
                    </Card>
                  </div>
                ),
              )}

              {/* || APARTADO 04 - BOTONES DE NAVEGACIÓN || */}
              <Box sx={{display:"flex", justifyContent:"space-between", mt:'26px'}}>
                
                {currentStep > 0 && (
                  <Button variant="variant_01" sx={{ mr: 'auto', py:'6px', pl:'16px', pr:'20px'}} onClick={() => setCurrentStep(currentStep - 1)} >
                    <Typography variant='h14' sx={{ display: 'flex', alignItems: 'center' }}>
                      <ArrowBack sx={{ width:'20px', height:'20px', mr:'4px'}}/> Volver
                    </Typography>
                  </Button>
                )}
                
                {currentStep < steps.length - 1 && cantidades_cant_selected[0] === cantidades_max_selected[0] ? (
                  <Button variant= 'variant_02' sx={{ ml: 'auto', py:'6px', pl:'20px', pr:'16px' }} onClick={() => setCurrentStep(currentStep + 1)}>
                    <Typography variant='h15' sx={{ display: 'flex', alignItems: 'center' }}>
                      Siguiente <ArrowForward sx={{ width:'20px', height:'20px', ml:'4px'}}/>
                    </Typography>
                  </Button>

                ) : currentStep === steps.length - 1 ? (
                  <Button variant= 'variant_02' sx={{ ml: 'auto' }} onClick={() => alert('• Implementar función "Agregar al pedido"')}>
                    <Typography variant='h15' sx={{ display: 'flex', alignItems: 'center' }}>
                      Agregar al pedido
                    </Typography>
                  </Button>

                ) : null}
              </Box>

            </Box>            
          </Box>
        </Box>
      </Box>

      {/* || BARRA INFERIOR FIJA || */}
      <Box sx={{position: 'fixed', width: '100vw', height: '80px', bottom: 0, left: 0, display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 10, boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'}}>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <Avatar src={producto.imagen} alt={producto.nombre} sx={{ width: '60px', height: '60px', marginRight: '16px' }} />

          <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant="h16"> {producto.nombre} </Typography>
            <Box display="flex" alignItems="center">
                <Typography variant="h5"> S/ {precioFinalMostrado.toFixed(2)} </Typography>
                <Typography variant="h6" sx={{ textDecoration: 'line-through', ml: '12px', mt: '4px' }}> S/ {precioBaseMostrado.toFixed(2)} </Typography>
              </Box>
          </Box>

        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <Box sx={{display: 'flex', mr:'20px', justifyContent: 'right', alignItems: 'center', flexDirection: 'row'}}>
            <IconButton onClick = { () => handleClickCantPedidos('decrement')} disabled={cantPedidos === 1} sx={{width: '40px', height: '40px', fontSize: '14px', fontWeight: 750, color: 'black', border: '1px solid rgba(128, 128, 128, 0.4)', borderRadius: '50%', padding: '8px'}}>-</IconButton>
            <Box sx={{minWidth: '40%', display: 'flex', justifyContent: 'center', textAlign:'center'}}>
              <Typography variant="body2" mx='8px' sx={{width:'20px'}}> {cantPedidos} </Typography>
            </Box>
            <IconButton onClick = { () => handleClickCantPedidos('increment') } sx={{width: '40px', height: '40px', fontSize: '14px', fontWeight: 750, color: 'black', border: '1px solid rgba(128, 128, 128, 0.4)', borderRadius: '50%', padding: '8px'}}>+</IconButton>
          </Box>

          <Button variant='variant_02' sx={{ py:'9px', px:'70px' }} disabled={currentStep !== steps.length - 1} onClick={() => alert('• Implementar función "Agregar al pedido"')}>
            <Typography variant='h15' sx={{ display: 'flex', alignItems: 'center' }}>
              Agregar al pedido
            </Typography>
          </Button>

        </Box>

      </Box>
    </ThemeProvider>
  );
};
