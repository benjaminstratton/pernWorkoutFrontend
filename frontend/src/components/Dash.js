import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = ({setAuth}) => {

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false)
        toast.success("Logged out successfully!")
    }

  return (
    <>
      <h1>Dashboard</h1>
      <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Dashboard;
