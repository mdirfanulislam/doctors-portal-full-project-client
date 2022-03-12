import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import treatment from '../../../images/treatment.png';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
}

const Treatment = () => {
    return (
        <Container sx={{ flexGrow: 1, marginTop: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={treatment} alt="" />
                </Grid>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{mb: 5}} style={{ fontWeight: 'bold' }}>
                        Exceptional Dental <br/> Care fo Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'gray', fontSize: 18, fontWeight: 400 }}>
                        It is a long established fact that by the readable content of a lot layout. The point of using lorem a more-or-less normal distribu to using `Content here, content here`, making it look like readable English. Many desktop publishing packages and web page.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#0d6efd' }}>Learn More...</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Treatment;