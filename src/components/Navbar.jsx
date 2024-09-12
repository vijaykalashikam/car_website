import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import { Link } from "react-router-dom";

 const Nav = () => {
  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <LocalCarWashIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Carteryans
          </Typography>
          <Link color="inherit" to="/">Home </Link>
          <Link color="inherit" to="/about_us/">About </Link>
          <Link color="inherit" to="/userlogin/">Signin</Link>
          <Link color="inherit" to="/location">Location </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
