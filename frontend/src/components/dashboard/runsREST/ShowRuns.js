import React, { useState, useEffect } from "react";

// Components
import EditRun from "./EditRun";

const ShowRuns = ({ allRuns, setRunsChange }) => {
  const [runs, setRuns] = useState([]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/dashboard/runs/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });
      setRuns(runs.filter((run) => run.run_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleUpdate = async (editRun) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);
      const response = await fetch(`http://localhost:5000/dashboard/runs/${editRun.run_id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(editRun),
      });
      const parseResponse = await response.json();
      console.log(parseResponse)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setRuns(allRuns);
  }, [allRuns]);

  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Distance</th>
                <th>Time</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {runs.length !== 0 && runs[0].run_id !== null &&
            runs.map((run) => (
                <tr key={run.run_id}>
                    <td>{run.date.slice(0, -14)}</td>
                    <td>{run.distance} miles</td>
                    <td>{run.time} minutes</td>
                    <td>
                        <EditRun handleUpdate={handleUpdate} run={run} />
                    </td>
                    <td>
                        <button onClick={() => handleDelete(run.run_id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowRuns;
