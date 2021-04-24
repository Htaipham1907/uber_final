import { Component } from "react";
import Header from '../../part/Header/Header'
import Footer from '../../part/Footer/Footer'
import RegisterForm from './RegisterForm/RegisterForm';
import './Register.scss'; 

class Register extends Component{
    render(){
        return(
            <div className="container">
                <Header></Header>
                <section className="register-body">
                    <RegisterForm></RegisterForm>
                </section>
                <Footer></Footer>
            </div>
        )
    };
}

export default Register;