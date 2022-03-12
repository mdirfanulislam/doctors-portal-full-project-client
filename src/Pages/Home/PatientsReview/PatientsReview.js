import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card, Grid, CardMedia } from '@mui/material';

const PatientsReview = ({review}) => {
    const { name, description, img, place } = review;
    return (


        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 2, height: "210px" }}>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', marginInlineStart: 40, height: '50px'}}
                    image={img}

                />
                <Typography style={{ width: 'auto', marginTop: -50, color: '#0d6efd', fontWeight: 'bold' }}>
                    {name}
                </Typography>
                <Typography>
                    {place}
                </Typography>
            </Card>
        </Grid>


        // <Grid xs={4} sm={4} md={4} lg={4}>
        //     <Card sx={{ maxWidth: 200 }}>
        //         <CardContent>
        //             <Typography variant="body2" color="text.secondary">
        //             {description}
        //             </Typography>
        //         </CardContent>
        //         <CardHeader
        //             avatar={
        //             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //                 {img}
        //             </Avatar>
        //             }
        //             title={name}
        //             subheader={place}
        //         />
        //     </Card>
        // </Grid>
    );
};

export default PatientsReview;