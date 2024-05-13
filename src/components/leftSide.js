import React from 'react';
import Email from './components/email.js'
import Password from './components/password.js';

function RightSide() {
    return <div>
        <div className="login_left_side">
            <div className="login_miu_logo_container">
                <img className="login_miu_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEcVuI0zICPpmUtkmnHXMHGac8xGCQNECpziX8msSsw&s" alt="miu logo"/>
            </div>
            <div className="login_welcome">
                <h1>Welcome back!</h1>
            </div>
            <div className="login_register_button_container">
                <p>Do not have account yet? <a className="register_button" href="./register.html">Register</a></p>
            </div>
            <Email />
            <Password />
            <div className="sign_in_button_container">
                <a href="./home.html">
                    <button className="sign_in_button" >
                        <h3>Sign In</h3>
                    </button>
                </a>
            </div>
            <div className="forgot_password_container_container">
                <div className="forgot_password_container">
                    <h4><a className="forgot_password" href="./forgot_password.html">Forgot Password?</a></h4>
                </div>
            </div>
        </div>
    </div>;
};

export default RightSide;