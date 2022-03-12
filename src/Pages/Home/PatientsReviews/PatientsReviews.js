import * as React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import PatientsReview from '../PatientsReview/PatientsReview';
import people_1 from '../../../images/people_1.png';
import people_2 from '../../../images/people_2.png';
import people_3 from '../../../images/people_3.png';

const reviews = [
    {
        id: 1,
        name: "Winson Herry", 
        description: "It is a long established fact that by the readable content of a lot layout. The point of using lorem a more-or-less normal distribu to using content",
        place: "california",
        img: people_1
    },
    {
        id: 2,
        name: "Winlon terry", 
        description: "It is a long established fact that by the readable content of a lot layout. The point of using lorem a more-or-less normal distribu to using content",
        place: "california",
        img: people_2
    },
    {
        id: 3,
        name: "Windon kerry", 
        description: "It is a long established fact that by the readable content of a lot layout. The point of using lorem a more-or-less normal distribu to using content",
        place: "california",
        img: people_3
    },
]


const PatientsReviews = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold', color: '#0d6efd', marginTop: "80px", textAlign: 'start' }} component="div">
                    TESTIMONIAL
                </Typography>
                <Typography sx={{ fontWeight: 500, textAlign: 'start', mb: "40px", mt: "10px" }} variant="h4" component="div">
                    What's Our Patients <br/> Says
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <PatientsReview
                        key={reviews.id}
                        review={review}
                        >
                        </PatientsReview>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default PatientsReviews;