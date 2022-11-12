import React from "react";
import { Link } from "react-router-dom";
import { Counter } from "../counter/Counter";

const PodcastList = () => {
  return (
    <>
      <h1>PodcastList</h1>
      <Counter />
      <Link to="/">podcast list</Link>
      <Link to="/podcast/1">podcast detail</Link>
      <Link to="/podcast/1/episode/1">episode</Link>
    </>
  );
};

export default PodcastList;
