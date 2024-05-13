import React from "react"
import '../../index.css'

function Password() {
    return <div className="login_password_container">
        <div className="space_25vw">
            <h3>
                Password
            </h3>
            <input type="password" placeholder="********" className="login_password_input"/>
        </div>
    </div>
};

export default Password;