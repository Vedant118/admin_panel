import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { CgProfile  } from 'react-icons/cg';
import image from "./unnamed.jpg";
import { useStyles } from "../HeaderStyles";
//import { Link } from "react-router-dom";

export default function Profile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "MyProfile", icon: <CgProfile /> },
    { label: "Logout", icon: <ExitToAppIcon /> },
    { label: "Signin", icon: <ExitToAppIcon /> },
    { label: "settings", icon: <SettingsIcon /> },
  ];
  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<Avatar src={image} className={classes.navAvatar}></Avatar>} className="text-light"
      >Diney </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropDownData.map((item, i) => (
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
