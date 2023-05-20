import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import app components
import logo from "../icons/logo.svg";

function Header() {
  return (
    <AppBar color="secondary">
      <Toolbar sx={{ maxWidth: "1280px", width: "100%", margin: "0 auto", justifyContent: "space-between" }}>
        <img src={logo} alt="Parallel Domain Logo" style={{ width: "140px" }} />
        <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
