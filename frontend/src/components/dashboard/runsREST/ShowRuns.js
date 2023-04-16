import React, { useState, useEffect } from "react";

// Components

const ShowRuns = ({ allRuns, setRunsChange }) => {
  const [runs, setRuns] = useState([]);

  const deleteRun = async (id) => {
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
                    <td>Edit</td>
                    <td>
                        <button onClick={() => deleteRun(run.run_id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowRuns;
