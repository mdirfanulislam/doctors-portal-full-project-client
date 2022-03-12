import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import footer from '../../../images/footer-bg.png';

const styles = {
    footer_bg: {
        backgroundImage: `url(${footer})`
    }
}

const Footer = () => {
    return (
        <section style={ styles.footer_bg }  className="footer-section">
            <div className="row text-white mt-5 m-4">
            <div className="col-xs-3 col-md-3">
                    <h6 className="text-dark">Doctors</h6>
                    <p>Good Performace</p>
                    <p>Good Performace</p>
                    <p>Good Performace</p>
                    <p>Feedback</p>
                    <p>Feedback</p>
                    <p>Feedback</p>
                </div>
                <div className="col-xs-3 col-md-3">
                    <h6 className="text-dark">Services</h6>
                    <p>Good Performace</p>
                    <p>Good Performace</p>
                    <p>Good Performace</p>
                    <p>Feedback</p>
                    <p>Feedback</p>
                    <p>Feedback</p>
                </div>
                <div className="col-xs-3 col-md-3">
                <h6 className="text-dark">Our Health</h6>
                    <p>Good Performace</p>
                    <p>Good Performace</p>
                    <p>Good Performace</p>
                    <p>Feedback</p>
                    <p>Feedback</p>
                    <p>Feedback</p>
                </div>
                <div className="col-xs-3 col-md-3">
                <h6 className="text-dark">Our Address</h6>
                    <p>London 501 street road, USA</p>
                    <div>
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                    <FontAwesomeIcon className="icon" icon={faGoogle} />
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </div>
                    <p className="mt-5 fw-bold">Call Now</p>
                    <strong className="bg-light text-dark p-2">+8801853936650</strong>
                </div>
            </div>
            <p className="copy text-center mt-5 text-light">Copyright © doctors-portal-21a0a.web.app</p>
        </section>
    );
};

export default Footer;