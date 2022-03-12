import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Typography, Button, Container } from '@mui/material';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgb(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
}

const AppointmentBanner = () => {
    return (
      <Container style={appointmentBanner} sx={{ flexGrow: 1, marginBottom: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '440px', marginTop: '-110px' }} src={doctor} alt="" />
                </Grid>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                <Box>
                <Typography variant="h6" sx={{mb: 5}} style={{ color: '#0d6efd' }}>
                    Appointment
                </Typography>
                <Typography variant="h4" style={{ color: 'white' }}>
                    Make an Appointment Today
                </Typography>
                <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi qui porro dolor assumenda molestiae tempore aliquid fuga suscipit unde quaerat sit facere corrupti, quidem inventore repellendus.
                </Typography>
                <Button variant="contained" style={{ backgroundColor: '#0d6efd' }}>Learn More...</Button>
              </Box>
                </Grid>
            </Grid>
        </Container>


        // <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        //   <Grid container spacing={2}>
        //     <Grid item xs={12} md={6}>
        //       <img 
        //         style={{ width: 430, marginTop: '-110px' }} 
        //         src={doctor} alt="" 
        //       />
        //     </Grid>
        //     <Grid item xs={12} md={6} sx={{ 
        //         display: 'flex', 
        //         justifyContent: 'flex-start',
        //         alignItems: 'center',
        //         textAlign: 'left'
        //     }}>
              // <Box>
              //   <Typography variant="h6" sx={{mb: 5}} style={{ color: '#0d6efd' }}>
              //       Appointment
              //   </Typography>
              //   <Typography variant="h4" style={{ color: 'white' }}>
              //       Make an Appointment Today
              //   </Typography>
              //   <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi qui porro dolor assumenda molestiae tempore aliquid fuga suscipit unde quaerat sit facere corrupti, quidem inventore repellendus.
              //   </Typography>
              //   <Button variant="contained" style={{ backgroundColor: '#0d6efd' }}>Learn More...</Button>
              // </Box>
        //     </Grid>
        //   </Grid>
        // </Box>
    );
};

export default AppointmentBanner;