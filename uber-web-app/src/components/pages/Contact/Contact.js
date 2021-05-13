import React, { Component } from "react";
import ContactForm from './ContactForm/ContactForm';
import Header from '../../part/Header/Header';
import Footer from '../../part/Footer/Footer';
import './Contact.scss';

class Contact extends Component {
    render() {
        return (
            <>
                <Header />
                <section id="my-section">
                    <ContactForm></ContactForm>
                </section>
                <Footer />
            </>
        )
    }
}

export default Contact;