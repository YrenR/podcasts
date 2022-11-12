import React from "react";
import { Link } from "react-router-dom";

const Episode = () => {
  return (
    <>
      <h1>Episode</h1>
      <Link to="/">podcast list</Link>
      <Link to="/podcast/1">podcast detail</Link>
      <Link to="/podcast/1/episode/1">episode</Link>
    </>
  );
};

export default Episode;
