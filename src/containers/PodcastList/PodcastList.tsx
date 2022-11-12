import React, { useEffect, useState, useMemo, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectPodcasts } from "../../selectors";
import { getTopPodastsAsync } from "../../store/slices/podcastSlice";
import PodcastCard from "./components/PodcastCard/PodcastCard";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";

const PodcastList = () => {
  const topPodcasts = useAppSelector(selectPodcasts);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getTopPodastsAsync());
  }, [dispatch]);

  const handlerOnSearching = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFilter(target.value.toLowerCase());
  };

  const filtered = useMemo(() => {
    const isIncluded = (title: string, artist: string): boolean => {
      return title.toLowerCase().includes(filter) || artist.toLowerCase().includes(filter);
    };

    const podcasts = topPodcasts.topPodcast.response?.feed.entry || [];
    return podcasts.filter((x) => isIncluded(x.title.label, x["im:artist"].label));
  }, [topPodcasts.topPodcast, filter]);

  return (
    <>
      <Box display="flex" justifyContent="flex-end" marginTop={4} marginRight={8}>
        <TextField label="Search" onChange={handlerOnSearching} />
      </Box>

      <Grid container spacing={8} padding={8}>
        {filtered.map((podcast) => (
          <PodcastCard
            key={podcast.id.attributes["im:id"]}
            id={podcast.id.attributes["im:id"]}
            title={podcast.title.label}
            author={podcast["im:artist"].label}
            images={podcast["im:image"]}
          />
        ))}
      </Grid>
    </>
  );
};

export default PodcastList;
