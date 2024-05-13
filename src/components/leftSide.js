import React, { useState } from "react";
import axios from "axios";

function LeftSide() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token); // Store token in localStorage
      // Redirect to dashboard or another protected route
      window.location.href = "/home";
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <div className="login_left_side">
        <div className="login_miu_logo_container">
          <img
            className="login_miu_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEcVuI0zICPpmUtkmnHXMHGac8xGCQNECpziX8msSsw&s"
            alt="miu logo"
          />
        </div>
        <div className="login_welcome">
          <h1>Welcome back!</h1>
        </div>
        <div className="login_register_button_container">
          <p>
            Do not have account yet?{" "}
            <a className="register_button" href="./register">
              Register
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login_email_container">
            <div className="space_25vw">
              <h3>Email</h3>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="1234567@miu.edu.mn"
                className="login_email_input"
                required
              />
            </div>
          </div>
          <div className="login_password_container">
            <div className="space_25vw">
              <h3>Password</h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="login_password_input"
                required
              />
            </div>
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div className="sign_in_button_container">
            <a href="./home.html">
              <button className="sign_in_button">
                <h3>Sign In</h3>
              </button>
            </a>
          </div>
        </form>
        <div className="forgot_password_container_container">
          <div className="forgot_password_container">
            <h4>
              <a className="forgot_password" href="./forgot_password.html">
                Forgot Password?
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
