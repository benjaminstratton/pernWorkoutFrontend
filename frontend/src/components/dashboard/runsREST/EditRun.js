import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const EditRun = (props) => {
  const [run, setRun] = useState({...props.run})

  const handleChange = (e) => {
    setRun({ ...run, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(run)
    props.handleUpdate(run)
  }

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
    <details>
        <summary>Edit Run</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            value={run.date.slice(0, -14)}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="distance">Distance: </label>
          <input
            type="number"
            name="distance"
            value={run.distance}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="time">Time: </label>
          <input
            type="number"
            name="time"
            value={run.time}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
      {/* <button onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Edit Run Workout</h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="date"
                  label="Date"
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  value={run.date.slice(0, -14)}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="distance"
                  label="Distance"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">miles</InputAdornment>
                    ),
                  }}
                  type="number"
                  value={run.distance}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="time"
                  label="Time"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">minutes</InputAdornment>
                    ),
                  }}
                  type="number"
                  value={run.time}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
              >
                Edit
              </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                onClick={handleClose}
              >
                Close
              </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal> */}
    </>
  );
};

export default EditRun;
