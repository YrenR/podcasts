import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Episode } from "../../../models/episode";

interface Props {
  episode?: Episode;
  isLoading: boolean;
}

const EpisodeDetail = ({ episode, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Typography flex={1} align="center">
        Loading...
      </Typography>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" fontWeight="bold">
          {episode?.trackName}
        </Typography>
        <Typography>{episode?.description}</Typography>
        <Divider sx={{ marginY: 2 }} />
        <audio controls src={episode?.episodeUrl} style={{ width: "100%" }} />
      </CardContent>
    </Card>
  );
};

export default EpisodeDetail;
