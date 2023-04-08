import React, { Component } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        window.dispatchEvent(new Event("storage"));
        navigate('/login')
    }
  return (
    <>
      <div>
        <nav class="navbar" style={ { backgroundColor : "#375BC8" }}>
          <div className="container-fluid">
            <ul className="nav">
                <li className="nav-item cp">
                    <a class="nav-link text-light active" aria-current="page" onClick={() => {navigate('/home')}} >
                    Dashboard
                    </a>
                </li>
                <li className="nav-item cp">
                    <a class="nav-link text-light" aria-current="page" onClick={() => {navigate('/about')}}  >
                    About
                    </a>
                </li>
                <li  className="nav-item cp">
                    <a class="nav-link text-light" aria-current="page" onClick={()=>{logout()}} >
                        Logout
                    </a>
                </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
