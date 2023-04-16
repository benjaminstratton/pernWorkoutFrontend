import React, { useState, useEffect } from "react";

const AddRun = (props) => {
  let emptyRun = { date: "", distance: "", time: "" };
  const [run, setRun] = useState(emptyRun);

    const handleChange = (e) => {
        setRun({ ...run, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(run)
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" value={run.date} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="distance">Distance: </label>
        <input type="number" name="distance" value={run.distance} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="time">Time: </label>
        <input type="number" name="time" value={run.time} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
};

export default AddRun;
