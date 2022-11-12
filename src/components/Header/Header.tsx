import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
    </>
  );
};

export default Header;
