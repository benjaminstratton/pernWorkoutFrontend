import React, { useState, useEffect } from "react";

const Dashboard = ({setAuth}) => {

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false)
    }

  return (
    <>
      <h1>Dashboard</h1>
      <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
    </>
  );
};

export default Dashboard;
