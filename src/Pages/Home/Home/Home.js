import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import PatientsReviews from './../PatientsReviews/PatientsReviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Treatment></Treatment>
            <AppointmentBanner></AppointmentBanner>
            <PatientsReviews></PatientsReviews>
            <ContactUs></ContactUs>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;