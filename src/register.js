import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    try {
      console.log(userData);
      const response = await axios.post(
        "http://localhost:3001/register",
        userData
      );
      // Redirect to dashboard or another protected route
      window.location.href = "/login";
    } catch (error) {
      setError("try again");
      console.log("400");
    }
  };

  return (
    <div>
      <div>
        <h2>Register Page</h2>
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
              <h3>submit</h3>
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}
export default Register;
