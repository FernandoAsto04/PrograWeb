import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider , AppBar, Toolbar, Button, Typography, Box, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

  //THEME
  const customTheme = createTheme({
  
    typography: {
      fontFamily: 'Open Sans, Helvetica Neue', // Predeterminado
      h1: {fontSize: '14px', fontWeight: 780, color: 'black', // Appbar "Cyber, Promociones, ..."
        '&:hover': { color: '#F25600'}
      },
      h2: {fontSize: '36px', fontWeight: 780}, // "Para saber el estado de tu pedido, ..."
      h3: {fontSize: '14px', fontWeight: 500, color: '#F25600', // "Elige tu canal | Escribe tu número de pedido"
        '&:hover': { color: '#D14500', textDecoration: 'underline', },
      }, 
      h4: {fontSize: 'clamp(10px, 1.8vw, 13px)', fontWeight: 780, color: 'black'}, // En Boton: "Buscar"
      h5: {fontSize: 'clamp(12px, 1.8vw, 14px)', textAlign: 'center'} // "Si tienes consultas sobre tu pedido, ..."
    },
    components: {
      MuiButton: { // Button
        styleOverrides: {
          root: { // Predeterminado
            width: '100%', backgroundColor: 'rgb(255, 51, 0)', borderRadius: '50px', boxShadow: 'none',
            '&:hover': {backgroundColor: 'rgba(255, 51, 0, 0.8)', boxShadow: 'none'},
        }},
        variants: [ // Variantes
          {
            props: { variant: 'custom' }, // Variante: 'custom'
            style: { backgroundColor: 'transparent', color: 'black', textDecoration: 'none',
              '&:hover': { backgroundColor: 'transparent'},
            },
          },
          {
            props: { variant: 'active' }, // Variante: 'active' (Acorde a la sección en la que se encuentra)
            style: { backgroundColor: 'lightorange', color: '#F25600', border: '1px solid #F25600',
              '&:hover': { backgroundColor: 'lightorange' },
            },
          },
        ],
      },
    },
  });

export default function Menu_Screen() {
  const productos = [
    {
      nombre_producto: "Cyber Sándwich Cajún",
      contenido_producto: "2 Sándwiches y 2 Papas Regulares. Salsas: 2 Aji, 2 Mayonesa y 2 Ketchup.",
      precio_oferta: "S/ 29.90",
      precio_antiguo: "S/ 54.90",
      imagen: "https://www.popeyes.com.pe/media/catalog/product/p/p/pp2146468924.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg"
    },
    {
      nombre_producto: "Cyber Power Cajún",
      contenido_producto: "6 Piezas, 4 Nuggets, 4 Alitas, 1 Papa Cajún Familiar y 1 Gaseosa 1L. Salsas: 3 Aji, 3 Mayonesa y 3 Ketchup.",
      precio_oferta: "S/ 49.90",
      precio_antiguo: "S/ 102.90",
      imagen: "https://www.popeyes.com.pe/media/catalog/product/f/o/fotoproducto_powercajun_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg"
    },
    {
      nombre_producto: "Cyber Alitas & Nuggets",
      contenido_producto: "20 alitas o 20 nuggets y 1 papa familiar. Salsas: 4 Aji, 4 Mayonesa y 4 Ketchup.",
      precio_oferta: "S/ 39.90",
      precio_antiguo: "S/ 79.90",
      imagen: "https://www.popeyes.com.pe/media/catalog/product/p/p/pp2146468925.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg"
    }

  ];

  const sections = [
    { name: 'Cyber', id: 'cyber' },
    { name: 'Promociones', id: 'promociones' },
    { name: 'Personales', id: 'personales' },
    { name: 'Duos', id: 'duos' },
    { name: 'Familiares', id: 'familiares' },
    { name: 'Banquetes', id: 'banquetes' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 64; // Ajustar según la altura del AppBar

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        return element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState('cyber');

  return (
    <ThemeProvider theme={customTheme}>

      {/* SECCIÓN - BARRA DE NAVEGACIÓN */}
      <AppBar position="sticky">
        <Toolbar>
          {sections.map(section => (
            <ScrollLink key={section.id} to={section.id} smooth={true} duration={600} offset={-64}>
              <Button variant={activeSection === section.id ? 'active' : 'custom'}>
                <Typography variant='h1'> {section.name} </Typography>
              </Button>
            </ScrollLink>
          ))}
        </Toolbar>
      </AppBar>

      {/* SECCIÓN 02 - SECCIONES */}
      {sections.map(section => (
        <Box key={section.id} id={section.id} p={2}>

          {/* ÁREA 01 - NOMBRE SECCIÓN */}
          <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap:'24px' }}>
            <Typography variant="h2" gutterBottom> {section.name} </Typography>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Typography variant="h3"> Ver todo </Typography> 
            </Link>
          </Box>

          {/* ÁREA 02 - PRODUCTOS */}
          <Box display="flex" flexWrap="wrap" gap={2}>
            {productos.map((producto, index) => (

              <Card key={index} sx={{ minWidth: "420px", display: 'flex', justifyContent: 'space-around' }}>

                {/* SUBCOLUMNA 01 - IMAGEN */}
                <CardMedia sx={{ maxWidth: 190 }} component="img" alt={producto.nombre_producto} image={producto.imagen}/>

                {/* SUBCOLUMNA 02 - INFORMACIÓN */}
                <Box sx={{ maxWidth: 210, display: 'flex', flexDirection: 'column' }}>

                  <Typography variant="h6">{producto.nombre_producto}</Typography>

                  <Typography variant="body2" color="text.secondary">
                    {producto.contenido_producto}
                  </Typography>
                  
                  <Typography variant="h5" color="error">
                    {producto.precio_oferta}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                    {producto.precio_antiguo}
                  </Typography>
                  
                  <Button variant="contained" color="secondary"><Link to={`/agregar_pedido`}>Agregar Pedido</Link></Button>
                </Box>

              </Card>
            ))}
          </Box>

        </Box>
      ))}
    </ThemeProvider>
  );
};