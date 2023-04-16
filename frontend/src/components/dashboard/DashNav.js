import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const DashNav = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <nav>
      <div className="dash-navbar-logo-container">
        <h2 className="dash-logo">Push It!</h2>
      </div>
      <div className="dash-navbar-links-container">
        <h4>
          Welcome, <span>{props.name}</span>
        </h4>
        <button className="dash-logout-button" onClick={(e) => props.logout(e)}>
          Log Out
        </button>
      </div>
      <div className="dash-navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List className="dash-navbar-menu-items">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText>
                  Welcome, <span>{props.name}</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <Link>Account Settings</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => props.logout(e)}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>
                  Log Out
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};
export default DashNav;
