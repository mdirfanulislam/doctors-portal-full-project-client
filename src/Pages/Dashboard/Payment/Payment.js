import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KBqtuImEDxSGw46L9sFVnOKMKZjVGcjFu4vUJ7s2Jg9nbtVp6sdX3qI5GWqV8rQGCosD5wWdG0WCQgCAq3zJXHQ00fkCRJXym');

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect( () => {
        fetch(`https://tranquil-mesa-75244.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay For: {appointment.patientName} for {appointment.serviceName} </h2>
            <h4>Pay: ${appointment.price}</h4>
            { appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm 
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;