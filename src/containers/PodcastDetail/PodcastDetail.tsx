import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { selectEpisodeByPodcastId, selectPodcasts } from "../../selectors";
import { useAppDispatch, useAppSelector } from "../../hooks";
import PodcastSidebar from "./components/PodcastSidebar/PodcastSidebar";
import { getEpisodesAsync } from "../../store/slices/podcastSlice";
import EpisodesTable from "./components/EpisodesTable/EpisodesTable";

type PodcastDetailParams = { podcastId: string };

const PodcastDetail = () => {
  const { podcastId } = useParams<PodcastDetailParams>();
  const { topPodcast } = useAppSelector(selectPodcasts);
  const episodes = useAppSelector((state) => selectEpisodeByPodcastId(state, podcastId));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (podcastId) dispatch(getEpisodesAsync(podcastId));
  }, [dispatch, podcastId]);

  const podcasts = topPodcast.response?.feed.entry;
  const podcast = podcasts?.find(({ id }) => id.attributes["im:id"] === podcastId);

  return (
    <Grid container padding={8} justifyContent="space-around">
      <Grid item xs={12} sm={4} md={2}>
        <PodcastSidebar podcast={podcast} />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Card>
          <CardContent>
            <Typography fontWeight="bold">Episodes: {episodes?.resultCount}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ marginTop: 5 }}>
          <CardContent>
            <EpisodesTable episodes={episodes?.results} podcastId={podcastId} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PodcastDetail;
