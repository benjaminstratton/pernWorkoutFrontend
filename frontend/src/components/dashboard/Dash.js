import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

// Components
import ShowRuns from "./runsREST/ShowRuns";
import AddRun from "./runsREST/AddRun";

const Dashboard = ({setAuth}) => {

  const [name, setName] = useState("");
  const [allRuns, setAllRuns] = useState([]);

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { token: localStorage.token }
      })
      const parseData = await response.json()
      setAllRuns(parseData)
      setName(parseData[0].user_name)
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleCreate = async (addRun) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json")
      myHeaders.append("token", localStorage.token)
      const response = await fetch("http://localhost:5000/dashboard/runs", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(addRun)
      })
      const parseResponse = await response.json();
      console.log(parseResponse)
      getProfile()
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
  }, [allRuns])

  return (
    <>
      <h1>Dashboard</h1>
      <h2>{name}</h2>
      <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
      <AddRun handleCreate={handleCreate} />
      <ShowRuns allRuns={allRuns} />
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
