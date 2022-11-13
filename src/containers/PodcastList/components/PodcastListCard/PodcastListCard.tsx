import { PodcastInfo } from "../../../../models/podcast";
import PodcastCard from "../PodcastCard/PodcastCard";
import Typography from "@mui/material/Typography";

interface Props {
  podcasts: PodcastInfo[];
  isLoading: boolean;
}

const PodcastListCard = ({ podcasts, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Typography flex={1} align="center">
        Loading...
      </Typography>
    );
  }

  return (
    <>
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id.attributes["im:id"]}
          id={podcast.id.attributes["im:id"]}
          title={podcast["im:name"].label}
          author={podcast["im:artist"].label}
          images={podcast["im:image"]}
        />
      ))}
    </>
  );
};

export default PodcastListCard;
