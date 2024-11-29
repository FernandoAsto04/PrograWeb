import React from 'react';
import {Card, Box, Paper, Grid2} from '@mui/material';

export default function Pruebas() {
    return(
        <Card sx={{ boxShadow: 'none', border: 'none' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, padding: 2 }}>
                <Paper sx={{ flex: 1, padding: 2, textAlign: 'center', boxShadow: 'none', border: 'none' }}>
                    Columna 1
                </Paper>
                <Paper sx={{ flex: 1, padding: 2, textAlign: 'center', boxShadow: 'none', border: 'none' }}>
                    Columna 2
                </Paper>
            </Box>
        </Card>
    );
}

/*
-----------------------------------------------------------------------------------
• PRUEBA 0: 
-----------------------------------------------------------------------------------


-----------------------------------------------------------------------------------
• PRUEBA 0: 
-----------------------------------------------------------------------------------


-----------------------------------------------------------------------------------
• PRUEBA 0: 
-----------------------------------------------------------------------------------


-----------------------------------------------------------------------------------
• PRUEBA 04: 2 COLUMNAS CON CARD, BOX, PAPER (SIN BORDES)
-----------------------------------------------------------------------------------
    return(
        <Card sx={{ boxShadow: 'none', border: 'none' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, padding: 2 }}>
                <Paper sx={{ flex: 1, padding: 2, textAlign: 'center', boxShadow: 'none', border: 'none' }}>
                    Columna 1
                </Paper>
                <Paper sx={{ flex: 1, padding: 2, textAlign: 'center', boxShadow: 'none', border: 'none' }}>
                    Columna 2
                </Paper>
            </Box>
        </Card>
    );

-----------------------------------------------------------------------------------
• PRUEBA 03: 2 COLUMNAS CON CARD, BOX, PAPER
-----------------------------------------------------------------------------------
    return(
        <Card>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, padding: 2 }}>
                <Paper style={{ flex: 1, padding: 16, textAlign: 'center' }}>Columna 1</Paper>
                <Paper style={{ flex: 1, padding: 16, textAlign: 'center' }}>Columna 2</Paper>
            </Box>
        </Card>
    );

-----------------------------------------------------------------------------------
• PRUEBA 02: 2 COLUMNAS CON CARD, GRID2, PAPER
-----------------------------------------------------------------------------------
    return(
        <Card>
            <Grid2 container spacing={2} padding={2}>
                <Grid2 item xs={6}>
                    <Paper style={{ padding: 16, textAlign: 'center' }}>Columna 1</Paper>
                </Grid2>
                <Grid2 item xs={6}>
                    <Paper style={{ padding: 16, textAlign: 'center' }}>Columna 2</Paper>
                </Grid2>
            </Grid2>
        </Card>
    );

-----------------------------------------------------------------------------------
• PRUEBA 01: 2 COLUMNAS CON GRID2, PAPER
-----------------------------------------------------------------------------------
    return(
        <Grid2 container spacing={2}>
            <Grid2 item xs={6}>
                <Paper style={{ padding: 16, textAlign: 'center' }}>Columna 1</Paper>
            </Grid2>
            <Grid2 item xs={6}>
                <Paper style={{ padding: 16, textAlign: 'center' }}>Columna 2</Paper>
            </Grid2>
        </Grid2>
    );
    
*/