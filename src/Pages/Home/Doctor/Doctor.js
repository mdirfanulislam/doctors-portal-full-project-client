import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <Grid sx={{ mt: 4 }} item xs={12} sm={6} md={4}>
            <img style={{ width: '245px', height: '220px' }} src={`data:image/png;base64,${image}`} alt="" />
            <h3 style={{ fontWeight: 'bold' }}> {name} </h3>
        </Grid>
    );
};

export default Doctor;