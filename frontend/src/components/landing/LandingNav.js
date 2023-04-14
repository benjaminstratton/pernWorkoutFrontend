import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const LandingNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="landing-navbar-logo-container">
        <h2>Push It!</h2>
      </div>
      <div className="landing-navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <button className="landing-signin-button">Sign In</button>
      </div>
      <div className="landing-navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
    </nav>
  );
};

export default LandingNav;
