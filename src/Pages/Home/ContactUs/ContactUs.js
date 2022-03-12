import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Grid } from '@mui/material';
import bg from '../../../images/appointment-bg.png';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgb(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 120
}

const ContactUs = () => {
    const Submit = e => {
        alert("Proccess Submit Successfully")
        e.preventDefault();
        e.target.reset();
    }

    return (
        <Container style={appointmentBanner}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8, mb: 3, }} xs={12} md={12}>
                    <Typography sx={{ fontWeight: 'bold', color: '#0d6efd' }} component="div" variant="h6">CONTACT US</Typography>
                    <Typography sx={{ fontWeight: 500, color: 'white', mb: "40px", mt: "10px" }} variant="h4">Always Contact With Us</Typography>
                    <form onSubmit={Submit}>
                        <TextField
                            sx={{ width: '60%', m: 1, borderRadius: 1, backgroundColor: 'white' }}
                            id="standard-basic"
                            label="Email Address"
                            name="email"
                            type="email"
                            variant="outlined"
                            required 
                        />
                        <TextField
                            sx={{ width: '60%', m: 1, borderRadius: 1, backgroundColor: 'white' }}
                            id="standard-basic"
                            label="Subject"
                            name="subject"
                            type="text"
                            variant="outlined"
                            required
                        />
                        <TextField
                            sx={{ width: '60%', m: 1, borderRadius: 1, backgroundColor: 'white' }}
                            id="standard-basic"
                            label="your Message"
                            name="text"
                            type="text"
                            variant="outlined" 
                            required
                        />
                            <br/>
                        <Button sx={{ px: '40px', m: 1 }} type="submit" variant="contained">Submit</Button>
                    </form>
            </Grid>
            </Grid>
        </Container>
    );
};

export default ContactUs;