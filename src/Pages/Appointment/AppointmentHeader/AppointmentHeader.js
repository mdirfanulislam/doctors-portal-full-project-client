import React from 'react';
import { Container, Grid } from '@mui/material';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';
import bg from '../../../images/bg.png';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgb(45, 58, 74, 0.1)',
    backgroundBlendMode: 'darken, luminosity',
    paddingTop: 30,
    paddingBottom: 60,
}

const AppointmentHeader = ({ date, setDate}) => {
    return (
        <Container style={appointmentBanner} sx={{ marginTop: 'px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;