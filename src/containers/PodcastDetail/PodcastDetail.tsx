import React from "react";
import { Link } from "react-router-dom";

const PodcastDetail = () => {
  return (
    <>
      <h1>PodcastDetail</h1>
      <Link to="/">podcast list</Link>
      <Link to="/podcast/1">podcast detail</Link>
      <Link to="/podcast/1/episode/1">episode</Link>
    </>
  );
};

export default PodcastDetail;
