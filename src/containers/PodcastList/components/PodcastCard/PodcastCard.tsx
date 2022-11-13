import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ImImage } from "../../../../models/podcast";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  author: string;
  images: ImImage[];
}

const PodcastCard = ({ id, title, author, images }: Props) => {
  const getLastUri = () => images.at(-1)?.label;

  return (
    <Grid item xs={12} sm={3}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar src={getLastUri()} alt={title} variant="circular" sx={{ width: 140, height: 140 }} />
        <Card
          sx={{
            p: 2,
            width: 1,
            height: 1,
            marginTop: -8,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textDecoration: "none",
          }}
          elevation={2}
          component={Link}
          to={`/podcast/${id}`}
        >
          <Box marginTop={4}>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop={3} marginBottom={1}>
              <Typography fontWeight={700} textTransform="uppercase" align="center">
                {title}
              </Typography>
            </Box>
            <Typography fontSize={14} fontWeight={600} color="text.secondary" align="center">
              Author: {author}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default PodcastCard;
