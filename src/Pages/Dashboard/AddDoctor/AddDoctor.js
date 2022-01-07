import React, { useState } from 'react';
import { TextField, Input, Button } from '@mui/material';

const AddDoctor = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ image, setImage ] = useState(null);
    const [ success, setSuccess ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://tranquil-mesa-75244.herokuapp.com/doctors', {
        method: 'POST',
        body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccess('Doctor added successfully')
                console.log('Doctor added successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleSubmit}>
            <TextField 
                sx={{ width: '50%' }}    
                label="Name"
                type="name"
                required 
                onChange={ e => setName(e.target.value) }
                variant="standard" 
            />
            <br />
            <TextField 
                sx={{ width: '50%', marginBlock: '10px' }}    
                label="Email"
                type="email"
                required
                onChange={ e => setEmail(e.target.value) }
                variant="standard" 
            />
            <br />
            <Input
                sx={{ width: '25%', marginBlock: '10px' }}
                accept="image/*" 
                type="file"
                onChange={ e => setImage(e.target.files[0]) }
            />
            <br />
            <Button variant="contained" type="submit">
                Add Doctor
            </Button>
            </form>
            { success && <p style={{ color: 'green' }}> {success} </p> }
        </div>
    );
};

export default AddDoctor;