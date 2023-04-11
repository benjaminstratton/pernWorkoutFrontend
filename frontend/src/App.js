import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Components
import Dashboard from "./components/Dash";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/login"
              element={
                !isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/dashboard" />
              }
            />
            <Route
              exact
              path="/signup"
              element={
                !isAuthenticated ? <Signup setAuth={setAuth} /> : <Navigate to="/dashboard" />
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
