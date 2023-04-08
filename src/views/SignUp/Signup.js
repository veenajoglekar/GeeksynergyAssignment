import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null)
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [professionArr, setProfessionArr] = useState(["Businessman", "Student", "IT", "Finance" ]);

  const register = () => {
    let users = JSON.parse(localStorage.getItem('userList')) || [];
    let obj = {
      name, password, email, phone, profession: selected
    };
    users.push(obj);
    localStorage.setItem('userList', JSON.stringify(users))
    alert("User added successfully")
    navigate('/login')
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-dark mt-5">SignUp Form</h2>
            <div class="card my-5">
              <form class="card-body cardbody-color p-lg-5">
                {/* <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile">
            </div> */}

                <div class="mb-3">
                  <label style={{fontWeight: '600', textAlign: 'left', marginLeft: "5px"}} className="form-label w-100">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Username"
                    placeholder="Name"
                    value={name}
                    onChange={(evt) => {setName(evt.target.value)}}
                  />
                </div>
                <div class="mb-3">
                  <label style={{fontWeight: '600', textAlign: 'left', marginLeft: "5px"}} className="form-label w-100">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(evt) => {setPassword(evt.target.value)}}
                  />
                </div>
                <div class="mb-3">
                  <label style={{fontWeight: '600', textAlign: 'left', marginLeft: "5px"}} className="form-label w-100">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value={email}
                    onChange={(evt) => {setEmail(evt.target.value)}}
                  />
                </div>
                <div class="mb-3">
                  <label style={{fontWeight: '600', textAlign: 'left', marginLeft: "5px"}} className="form-label w-100">Phone No</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="Phone No"
                    value={phone}
                    onChange={(evt) => {setPhone(evt.target.value)}}
                  />
                </div>
                <div class="mb-3">
                <label style={{fontWeight: '600', textAlign: 'left', marginLeft: "5px"}} className="form-label w-100">Profession</label>
                  <select
                    class="form-select"
                    name="profession"
                    value={selected}
                    onChange={
                      (x) => {
                        setSelected(x.target.value)
                      }
                    }
                  >
                    <option disabled selected value> -- select an option -- </option>
                    {
                      professionArr.map( (item) => {
                        return (
                          <option  value={item}>{item}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div class="text-center">
                  <button onClick={() => {register()}} type="button" class="btn btn-dark px-5 mb-5 ">
                    Sign Up
                  </button>
                </div>
                <div
                  id="emailHelp"
                  class="form-text text-center mb-5 text-dark"
                >
                  Already Registered?{" "}
                  <a
                    onClick={() => navigate("/login")}
                    class="cp text-dark fw-bold"
                  >
                    {" "}
                    Login into Account
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

export default Signup;
