import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Components
import EditRun from "./EditRun";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ShowRuns = ({ allRuns, setRunsChange }) => {
  const [runs, setRuns] = useState([]);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://workout-api.herokuapp.com/dashboard/runs/${id}`, {
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
      const response = await fetch(`https://workout-api.herokuapp.com/dashboard/runs/${editRun.run_id}`, {
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
      <TableContainer component={Paper} sx={{maxWidth: '1000px'}} className="run-table">
        <Table sx={{ minWidth: '350px' }} aria-label="run workout table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Distance&nbsp;(mi)</StyledTableCell>
              <StyledTableCell align="left">Time&nbsp;(min)</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {runs.length !== 0 && runs[0].run_id !== null &&
            runs.map((run) => (
              <TableRow key={run.run_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {run.date.slice(0, -14)}
                </TableCell>
                <TableCell>{run.distance} miles</TableCell>
                <TableCell>{run.time} minutes</TableCell>
                <TableCell align="center">
                <EditRun handleUpdate={handleUpdate} run={run} />
                </TableCell>
                <TableCell align="center">
                <button className="delete-run-button" onClick={() => handleDelete(run.run_id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* Would like to add pagination */}
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowRuns;
