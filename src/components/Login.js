import React, { useState } from "react";
//import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 /* const handleLogin = async () => {
    try {
      await api.post("/login", { email, password });
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };
*/
  const handleLogin = () => {
  if (email === "admin@test.com" && password === "admin123") {
    navigate("/dashboard");
  } else {
    alert("Invalid credentials");
  }
};

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
