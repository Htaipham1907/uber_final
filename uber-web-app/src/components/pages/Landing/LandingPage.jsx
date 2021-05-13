import React from 'react'
import './LandingPage.css'
import Header from '../../part/Header/Header'
import Footer from '../../part/Footer/Footer'
import indexBg from '../../../resource/images/index-bg.png'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <Header />
            <div id="main-index">
                <img id="index-bg" src={indexBg} alt="Index Picture" />
                <div className="index-intro">
                    <h1>Your ride, on demand</h1>
                    <p>Whether you're headed to work, the airport, or put on the town,
                    Uber conencts you with a reliable ride in minutes. One tap and
                    a car comes directly to you.</p>
                    <Link to="/register">
                        <button className="index-button" type="button">
                            Register with Phone
                        <i className="fa fa-arrow-right"></i>
                        </button>
                    </Link>

                </div>

            </div>
            <Footer />
        </div>
    );
}
export default Landing