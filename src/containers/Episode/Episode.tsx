import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { selectEpisodeByPodcastIdEpisodeId, selectPodcasts, selectPodcastsByPodcastId } from "../../selectors";
import { useAppDispatch, useAppSelector } from "../../hooks";
import PodcastSidebar from "../../components/PodcastSidebar/PodcastSidebar";
import { getEpisodesAsync, getTopPodastsAsync } from "../../store/slices/podcastSlice";
import EpisodeDetail from "./EpisodeDetail/EpisodeDetail";

type EpisodeParams = { podcastId: string; episodeId: string };

const Episode = () => {
  const { podcastId, episodeId } = useParams<EpisodeParams>();
  const { status } = useAppSelector(selectPodcasts);
  const podcast = useAppSelector((state) => selectPodcastsByPodcastId(state, podcastId));
  const episode = useAppSelector((state) => selectEpisodeByPodcastIdEpisodeId(state, podcastId, episodeId));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (podcastId) {
      dispatch(getTopPodastsAsync());
      dispatch(getEpisodesAsync(podcastId));
    }
  }, [dispatch, podcastId]);

  return (
    <Grid container padding={8} justifyContent="space-around">
      <Grid item xs={12} sm={4} md={2}>
        <PodcastSidebar podcast={podcast} />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <EpisodeDetail episode={episode} isLoading={status === "loading"} />
      </Grid>
    </Grid>
  );
};

export default Episode;
