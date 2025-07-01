import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, lastname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
      alert("Registration successful");
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }
  };

  return (

    <form onSubmit={handleRegister}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={name} onChange={(e) => setName(e.target.value)} required
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name"
          value={lastname} onChange={(e) => setName(e.target.value)} required
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email} onChange={(e) => setEmail(e.target.value)} required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password} onChange={(e) => setPassword(e.target.value)} required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </form>
    // <form onSubmit={handleRegister}>
    //     <h2>Register</h2>
    //     <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
    //     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //     <button type="submit">Register</button>
    // </form>
  );
};

export default Register;