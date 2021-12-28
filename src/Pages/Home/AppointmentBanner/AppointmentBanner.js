import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgb(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
            style={{ width: 400, marginTop: '-110px' }} 
            src={doctor} alt="" 
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ 
            display: 'flex', 
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left'
        }}>
          <Box>
            <Typography variant="h6" sx={{mb: 5}} style={{ color: '#0DE87A' }}>
                Appointment
            </Typography>
            <Typography variant="h4" style={{ color: 'white' }}>
                Make an Appointment Today
            </Typography>
            <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi qui porro dolor assumenda molestiae tempore aliquid fuga suscipit unde quaerat sit facere corrupti, quidem inventore repellendus.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#0DE87A' }}>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;