import React from 'react';

import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    window.alert("Sign up complete");
}

const Google = () => {
    return (
        <GoogleLogin
            clientId="219800536833-1sttuuq0e12e3nkccbouqfe5rtsv5en4.apps.googleusercontent.com"
            buttonText="SignUp with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default Google;