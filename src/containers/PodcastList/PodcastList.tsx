import React, { useEffect, useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectPodcasts } from "../../selectors";
import { getTopPodastsAsync } from "../../store/slices/podcastSlice";

import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import Chip from "@mui/material/Chip";
import { PodcastInfo } from "../../models/podcast";
import PodcastListCard from "./components/PodcastListCard/PodcastListCard";

const PodcastList = () => {
  const topPodcasts = useAppSelector(selectPodcasts);
  const podcasts: PodcastInfo[] = topPodcasts.topPodcast.response?.feed.entry || [];
  const dispatch = useAppDispatch();
  const [filterPodcast, setFilterPodcast] = useState<PodcastInfo[]>([]);

  useEffect(() => {
    dispatch(getTopPodastsAsync());
  }, [dispatch]);

  useEffect(() => {
    const topPodcastResponse = topPodcasts.topPodcast.response;
    if (topPodcastResponse) setFilterPodcast(topPodcastResponse.feed.entry);
  }, [topPodcasts]);

  const handlerOnSearching = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const query = target.value.trim().toLowerCase();

    const filtering = podcasts.filter((podcast: PodcastInfo) => {
      const title = podcast["im:name"].label.toLowerCase();
      const artist = podcast["im:artist"].label.toLowerCase();
      return title.includes(query) || artist.includes(query);
    });

    setFilterPodcast(query ? filtering : podcasts);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end" marginTop={4} marginRight={8} alignItems="center">
        <Chip label={filterPodcast.length} color="primary" sx={{ marginRight: 2 }} />
        <TextField label="Filter podcasts..." onChange={handlerOnSearching} />
      </Box>

      <Grid container spacing={8} padding={8}>
        <PodcastListCard podcasts={filterPodcast} isLoading={topPodcasts.status === "loading"} />
      </Grid>
    </>
  );
};

export default PodcastList;
