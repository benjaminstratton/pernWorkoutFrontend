import React from "react";
import "./Landing.css";
import LandingNav from "./LandingNav";
import LandingBackground from "../../Assets/Landing-background.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="Landing">
      <LandingNav />
      <div className="landing-banner-container">
        <div className="landing-bannerImage-container">
          <img src={LandingBackground} alt="" />
        </div>
        <div className="landing-text-section">
          <h1 className="landing-heading">The fastest and easiest way to track your progress!</h1>
          <p className="landing-text">Get started today by creating an account below.</p>
          <Link to="/signup">
            <button className="landing-signup-button">Sign Up <FiArrowRight />{" "}</button>
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
