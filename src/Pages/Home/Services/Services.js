import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        id: 1, name: "Flouride Treatment", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolor molestiae dicta quos esse voluptatibus! Maxime accusamus cum unde mollitia?", img: fluoride
    },
    
    {
        id: 2, name: "Cavity Filling", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolor molestiae dicta quos esse voluptatibus! Maxime accusamus cum unde mollitia?", img: cavity
    },
    
    {
        id: 3, name: "Teeth Whitening", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolor molestiae dicta quos esse voluptatibus! Maxime accusamus cum unde mollitia?", img: whitening
    }
  ]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: '#0d6efd' }} variant="h6" component="div">
                    OUR SERVICES
                    </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    {
                        services.map(service => <Service 
                        service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;