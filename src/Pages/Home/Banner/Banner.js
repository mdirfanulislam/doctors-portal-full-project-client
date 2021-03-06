import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, marginBottom: 10 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br/>
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, color: 'gray', fontSize: 13, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima perspiciatis numquam aliquid at ab placeat sequi tempore possimus dolor?
                        </Typography>
                        <Link to="/appointment" style={{ textDecoration: 'none', color: 'white'}}><Button variant="contained">Appointment</Button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;