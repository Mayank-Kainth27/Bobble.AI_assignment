import React from 'react';

import axios from 'axios';

import '../project.css';
import logo from '../youtube.svg';
import '../scss/googlebtn.scss';
import Facebook from '../components/facebook';
import Google from '../components/google';

const SignUp = (props) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        axios.post('https://reqres.in/api/users', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                window.alert("Sign up complete");
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>

            <div className="logo">
                <img src={logo} alt="logo" height="75" width="200" />
            </div>

            <div className="form">

                <p><b>Sign up</b></p>
                <br />
                <br />
                <h1 className="heading">Create your account</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adiscing eit</p>

                <Google />
                <Facebook />

                <form className="loginform" onSubmit={handleSubmit}>
                    <input className="imput" type="text" placeholder="First Name" required />
                    <input className="imput" type="text" placeholder="Last Name" required />
                    <input className="imput" type="email" placeholder="Email Address" required />
                    <input className="imput" type="password" placeholder="Password" required />

                    <button className="signup">Sign up</button>

                </form>
            </div>

        </div>
    )


}

export default SignUp;