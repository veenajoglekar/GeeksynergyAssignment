import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const users = JSON.parse(localStorage.getItem('userList')) || [];
    let userIndex = users.findIndex((x) => {
      return x.name === username && x.password === password;
    });
    if(userIndex !== -1){
      localStorage.setItem('user', JSON.stringify(users[userIndex]))
      window.dispatchEvent(new Event("storage"));
      alert("User logged in successfully");
      setTimeout(() => {
        navigate('/dashboard')
      },500)
    }
  }
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-dark mt-5">Login Form</h2>
            <div class="card my-5">
              <form class="card-body cardbody-color p-lg-5">
                {/* <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile">
            </div> */}

                <div class="mb-3">
                    <label style={{fontWeight: '600', textAlign: 'left', marginLeft: "5px"}} className="form-label w-100">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="User Name"
                    value={username}
                    onChange={(evt) => {setUsername(evt.target.value)}}
                  />
                </div>
                <div class="mb-3">
                    <label style={{fontWeight: '600', textAlign: 'left', marginLeft: "5px"}} className="form-label w-100">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(evt) => {setPassword(evt.target.value)}}
                  />
                </div>
                <div class="text-center">
                  <button onClick={() => {loginUser()}} type="button" class="btn btn-dark px-5 mb-5 w-100">
                    Login
                  </button>
                </div>
                <div
                  id="emailHelp"
                  class="form-text text-center mb-5 text-dark"
                >
                 Not Registered?{" "}
                  <a onClick={() => navigate("/signup")} class="cp text-dark fw-bold">
                    {" "}
                    Create an Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
