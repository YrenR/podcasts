import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { ImImage, PodcastInfo } from "../../../../models/podcast";

interface Props {
  podcast?: PodcastInfo;
}

const PodcastSidebar = ({ podcast }: Props) => {
  const getLastUri = (images: ImImage[]) => images.at(-1)?.label;

  if (!podcast) {
    return (
      <Typography flex={1} align="center">
        Podcast not found
      </Typography>
    );
  }

  return (
    <Card>
      <CardMedia sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <Avatar
          src={getLastUri(podcast["im:image"])}
          alt={podcast.title.label}
          variant="rounded"
          sx={{ width: 200, height: 200 }}
        />
      </CardMedia>
      <CardContent>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography fontWeight="bold">{podcast["im:name"].label}</Typography>
        <Typography variant="body2" fontStyle="italic">
          by {podcast["im:artist"].label}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="body2" color="text.secondary" fontWeight="bold">
          Description:
        </Typography>
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          {podcast.summary.label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastSidebar;
