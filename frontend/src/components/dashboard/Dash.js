import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

// Components

const Dashboard = ({setAuth}) => {

  const [name, setName] = useState("");
  const [allWorkouts, setAllWorkouts] = useState([]);

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      })
      const parseData = await response.json()
      setAllWorkouts(parseData)
      setName(parseData[0].user_name)
    } catch (err) {
      console.error(err.message)
    }
  }

  const logout = (e) => {
      e.preventDefault()
      try {
        localStorage.removeItem("token")
        setAuth(false)
        toast.success("Logged out successfully!")
      } catch (err) {
        console.log(err.message)
      }
  }

  useEffect(() => {
    getProfile();
  }, [])

  return (
    <>
      <h1>Dashboard</h1>
      <h2>{name}</h2>
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
