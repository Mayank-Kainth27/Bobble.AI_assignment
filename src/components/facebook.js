import React from 'react';

import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';

const responseFacebook = (response) => {
    window.alert("Sign up complete");
    return <Redirect to='wel' />
}


const Facebook = () => {
    return (
        <FacebookLogin
            appId="373559786979290"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="facebtn"
            icon="fa-facebook"
        />
    )
}

export default Facebook;