import React from 'react';
import { Box, Button, Grid, Typography, CircularProgress } from '@mui/material';
import childrenImg from '../../Images/Children.png'
import logoImg from '../../Images/Logo.png'
import './Login.css'
import CustomInput from '../../Components/CustomInput/CustomInput';

const LoginView = ({ isLoading, onClickButton}) => {


    let button = (<Button variant='primary' onClick={onClickButton} >Entrar</Button>);
    if (isLoading){
        button = (<CircularProgress size={25} className="circularProgress"/>)
    }
    return (
        <Grid container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            className='gridClass'>
            <Grid item md={6} sm={6} >
                <Box className='boxImg'>
                    <img src={childrenImg} alt="children" width={'60%'} className="childrenImg" />
                </Box>
            </Grid>
            <Grid item md={6} sm={6}>
                <Box className='boxLogin'>
                    <img src={logoImg} alt="Logo" width={'40px'} className="logo" />
                    <Typography variant="h1">Bem-vindo!</Typography>
                    <CustomInput
                        label="Digite seu e-mail"
                        errorMessage=""
                        placeholder="mario@cqb.com.br"
                        hasError={false}                        
                    />
                    <CustomInput
                        label="Digite sua senha"
                        errorMessage=""
                        placeholder="**************"
                        hasError={false}
                        type="password"
                    />
                    <div className='boxButton'>
                        {button}
                    </div>
                    
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginView;