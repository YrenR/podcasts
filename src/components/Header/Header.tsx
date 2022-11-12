import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";

const Header = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            color="primary"
            sx={{ flexGrow: 1, textDecoration: "none", fontWeight: 600 }}
          >
            Podcaster
          </Typography>
          <FiberManualRecordTwoToneIcon color="primary" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
