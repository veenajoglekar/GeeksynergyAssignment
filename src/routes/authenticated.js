import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../views/About/about";
import Dashboard from "../views/Dashboard/dashboard";
import Home from "../views/Home/home";

const Authenticated = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
                <Route path="/" element={<Navigate to={'/home'}/>}></Route>
                <Route path="*" element={<Navigate to={'/home'}/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
        </Route>
        <Route path="/" element={<Navigate to={'/home'}/>}></Route>
        <Route path="*" element={<Navigate to={'/home'}/>}></Route>
      </Routes>
    </>
  );
};

export default Authenticated;
