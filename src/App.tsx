import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Episode from "./containers/Episode/Episode";
import PodcastDetail from "./containers/PodcastDetail/PodcastDetail";
import PodcastList from "./containers/PodcastList/PodcastList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<PodcastList />} />
          <Route path="podcast/:podcastId" element={<PodcastDetail />} />
          <Route path="podcast/:podcastId/episode/:episodeId" element={<Episode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
