import './lgn.css'
import ImgBlack from './assets/LOGIN/logo-black.png';
import ImgWhite from './assets/LOGIN/logo-white.png';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import React, { useState } from 'react';
import { Toggle } from "./components/Toggle";




function Login() {
    const [islight, setIsLight] = useState(false);
    const img = islight ? ImgBlack : ImgWhite;
    if (islight == false) {
        document.body.style.backgroundColor = " #343232";
    }
    else {
        document.body.style.backgroundColor = " hsl(0, 4%, 85%)"
    }
    return (
        <>

            <Toggle
                isChecked={islight}
                handlechange={() => setIsLight(!islight)}
            />
            <div className='box' id={islight ? "light" : "root"} data-theme={islight ? "light" : "root"} >

                <img src={img} alt="BIT - LOGO " />
                <label>
                    <GoogleLogin 
                        text = "signin_with"
                        theme={ islight ? "filled_black" : "outlined"}
                        size='medium'
                        shape='rectangular'
                        type = 'standard'
                        onSuccess={credentialResponse => {
                            const decoded = jwtDecode(credentialResponse?.credential);
                            console.log(decoded);
                                                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    /></label>
            </div>
        </>

    )
}

export default Login 