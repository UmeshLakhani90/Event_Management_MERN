import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  // const notify = () => {
  //   toast.success('',{
  //     position:toast.POSITION.TOP_RIGHT,
  //   });
  // }

  const [name, setName] = useState(""); // for name
  const [login_email, setLoginEmail] = useState(""); // for email
  const [reg_email, setRegEmail] = useState(""); // for email
  const [login_password, setLoginPassword] = useState(""); // for password
  const [reg_password, setRegPassword] = useState(""); // for password
  const [role, setRole] = useState(""); // for role

  // const [successMessage, setSuccessMessage] = useState(""); // State for success message
  // const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleChange = (e) => {
    setRole(e.target.value);  // Update the role state when the user selects an option
  };

  const handleLogin = async (e) => {

    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/login", { login_email, login_password });
      localStorage.setItem("token", data.token);
      toast.success("Login successful!");
      //alert("Login successful");
      // setSuccessMessage("Login successful! Welcome!");
      // setErrorMessage(""); // Clear any previous error messages
    } catch (err) {
      toast.error("Invalid username or password. Please try again.");
      // alert("Login failed");
      // setErrorMessage("Invalid username or password. Please try again.");
      // 		setSuccessMessage(""); // Clear any previous success messages
    }
  };

  const handleRegister = async (e) => {
    //setLoading(true);
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, reg_email, reg_password, role });
      // alert("Registration successful");


      toast.success("Registration successful!");
      // setSuccessMessage("Registration successful!");
      // setErrorMessage(""); // Clear any previous error messages
    } catch (err) {
      //console.log(err);
      //alert("Registration failed");
      toast.error("Registration failed. Please try again.");
      // setErrorMessage("Registration failed. Please try again.");
      // 		setSuccessMessage(""); // Clear any previous success messages
    }
  };

  return (
    <div className="App">
      <section className="page-title bg-2">

        <div className="container">

          <div className="row">

            <div className="col-md-12">
              <div className="block">
                <h1>Authentication</h1>
                <p>User Login / Register Form </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
      {/* {successMessage && (
        <p style={{ color: "green", marginTop: "20px" }}>{successMessage}</p>
      )}
      {errorMessage && (
        <p style={{ color: "red", marginTop: "20px" }}>{errorMessage}</p>
      )} */}
      {/* contact form start */}
      <section className="login-form">
        <div className="container">
          <div className="row">
            <div className="col">
              <fieldset className="border p-4">
                <legend className="w-auto">SIGN IN</legend>
                <form id="contact-form1" onSubmit={handleLogin}>
                  <div className="block">
                    <div className="form-group">
                      <label htmlfor="exampleInputEmail1" className="float-left">Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Please Enter email" required value={login_email} onChange={(e) => setLoginEmail(e.target.value)} />
                      <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mt-2">
                      <label htmlfor="exampleInputPassword1" className="float-left">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Please Enter Password" value={login_password} onChange={(e) => setLoginPassword(e.target.value)} required />
                    </div>
                    <div className="form-check float-left">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary mt-4">LOGIN</button>
                    </div>
                  </div>
                </form>
              </fieldset>
            </div>

            <div className="col">
              <fieldset className="border p-4">
                <legend className="w-auto">CREATE A NEW ACCOUNT</legend>
                <form id="contact-form1" onSubmit={handleRegister}>
                  <div className="block">
                    <div className="form-group">
                      <label htmlfor="firstname" className="float-left">Name</label>
                      <input type="text" className="form-control" placeholder="Please Enter First name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                      <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlfor="regemail" className="float-left">Email</label>
                      <input type="text" className="form-control" name="email" placeholder="Please Enter Email" value={reg_email} onChange={(e) => setRegEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlfor="regpassword" className="float-left">Password</label>
                      <input type="password" className="form-control" name="password" placeholder="Please Enter Password" value={reg_password} onChange={(e) => setRegPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlfor="regrole" className="float-left">Role</label>
                      <select className="form-control" name="role" value={role} onChange={handleChange} required>
                        <option>Please select role</option>
                        <option value="attendee">Attendee</option>
                        <option value="organizer">Organizer</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <div className="form-check float-left">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary mt-4">SIGN UP</button>
                    </div>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;