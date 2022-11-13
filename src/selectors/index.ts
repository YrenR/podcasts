import { RootState } from "../store/types";

export const selectPodcasts = (state: RootState) => state;
export const selectTopPodcasts = (state: RootState) => state.topPodcast;

export const selectPodcastsByPodcastId = (state: RootState, podcastId?: string) => {
  const podcasts = state.topPodcast.response?.feed.entry;
  const podcast = podcasts?.find(({ id }) => id.attributes["im:id"] === podcastId);
  return podcast;
};

export const selectEpisodes = (state: RootState) => state.episodes;

export const selectEpisodeByPodcastId = (state: RootState, podcastId?: string) =>
  podcastId ? state.episodes[podcastId] : undefined;

export const selectEpisodeByPodcastIdEpisodeId = (state: RootState, podcastId?: string, episodeId?: string) => {
  const episodes = podcastId ? state.episodes[podcastId] : undefined;
  const episode = episodes?.results.find(({ trackId }) => trackId.toString() === episodeId);
  return episode;
};
