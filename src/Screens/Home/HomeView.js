import { Container, Typography, Box, Button } from '@mui/material';
import React from 'react';
import './Home.css';

function HomeView({ count, runStatus, onClickStart, onClickStop, onClickErase }) {

    let variantStart = 'primary';
    let labelStart = 'Iniciar';
    let variantStop = 'primary';
    let variantErase = 'primary';
    if (runStatus === 0) {
        variantStart = 'primary';
        labelStart = 'Iniciar';
        variantStop = 'disabled';
        variantErase = 'disabled';
    } else if (runStatus === 1) {
        variantStart = 'primary';
        labelStart = 'Pausar';
        variantStop = 'primary';
        variantErase = 'primary';
    } else if (runStatus === 2) {
        variantStart = 'primary';
        labelStart = 'Iniciar';
        variantStop = 'disabled';
        variantErase = 'disabled';
    } else if (runStatus === 3) {
        variantStart = 'primary';
        labelStart = 'Despausar';
        variantStop = 'disabled';
        variantErase = 'primary';
    }
    return (
        <Container>
            <Box className="boxContador">
                <Typography variant='h1'>Contador - {count} </Typography>
                <Button variant={variantStart} className='buttonHome' onClick={onClickStart}>{labelStart}</Button>
                <Button variant={variantStop} className='buttonHome' onClick={onClickStop}>Parar</Button>
                <Button variant={variantErase} className='buttonHome' onClick={onClickErase}>Zerar</Button>
            </Box>
        </Container>
    );
}
export default HomeView;