import React from 'react';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Detail.css'

const DetailView = ({ toyInfo, onBackButton, latitude, longitude, google}) => {

    console.log(latitude + "," + longitude);
    return (
        <Container>
            <Box className="contentBox">
                <Stack spacing={2} className='box'>
                    <Typography gutterBottom variant="h2" className="text">
                        <img src={toyInfo.mainImage} alt="toyImage" height="150"/>
                    </Typography>
                    <Typography gutterBottom variant="h2" className="text">
                        {toyInfo.name}
                    </Typography>
                    <Typography gutterBottom variant="h2" className="text">
                        {toyInfo.code}
                    </Typography>
                    <Typography gutterBottom variant="h2" className="text">
                        {toyInfo.receiveDate}
                    </Typography>
                    <div className='maps'>
                        <Map google={google} zoom={14} className="maps"
                            initialCenter={{ lat: latitude, lng: longitude }}>
                            <Marker
                                key={1}
                                name={"My Position"}
                                position={{ lat: latitude, lng: longitude }}
                            />
                        </Map>
                    </div>                    
                    <Button variant="contained" onClick={() => onBackButton()}>Voltar</Button>

                </Stack>
            </Box>
        </Container>
    );
};


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAPS_KEY
})(DetailView);