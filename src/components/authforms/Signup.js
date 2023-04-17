import React, { useState } from "react";
import "./Auth.css";
import AuthNav from "./AuthNav";
import LandingBackground from "../../Assets/Landing-background.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    sex: "",
    height: "",
  });
  const { name, email, password, dob, sex, height } = inputs;
  const sexs = [
    {
      value: "U",
      label: "Other",
    },
    {
      value: "M",
      label: "Male",
    },
    {
      value: "F",
      label: "Female",
    },
  ];

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, password, dob, sex, height };
      const response = await fetch("https://workout-api.herokuapp.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Signed up successfully! ");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="Auth">
      <AuthNav />
      <div className="auth-container">
        <div className="auth-image-container">
          <img src={LandingBackground} alt="" />
        </div>
        <div className="auth-form-section">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "orange",
                width: "3.5rem",
                height: "3.5rem",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign Up</h2>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    label="Full Name"
                    type="text"
                    value={name}
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    helperText="Must be 6-16 characters and contain UPPERCASE, lowercase, and special characters (!@#$...)"
                    type="password"
                    value={password}
                    autoComplete="new-password"
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="dob"
                    label="Date of birth"
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    value={dob}
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="sex"
                    label="Sex"
                    select
                    value={sex}
                    onChange={(e) => handleChange(e)}
                  >
                    {sexs.map((sex) => (
                      <MenuItem key={sex.value} value={sex.value}>
                        {sex.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="height"
                    label="Height"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">in.</InputAdornment>
                      ),
                    }}
                    type="number"
                    value={height}
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
            <Link to="/login">Already have an account? Log In</Link>
          </Box>
        </div>
      </div>
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
    </div>
  );
};

export default Signup;
