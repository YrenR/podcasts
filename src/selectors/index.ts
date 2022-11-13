import { RootState } from "../store/types";

export const selectCount = (state: RootState) => state.counter.value;
export const selectPodcasts = (state: RootState) => state.podcasts;
export const selectTopPodcasts = (state: RootState) => state.podcasts.topPodcast;
export const selectEpisodes = (state: RootState) => state.podcasts.episodes;
export const selectEpisodeByPodcastId = (state: RootState, podcastId?: string) =>
  podcastId ? state.podcasts.episodes[podcastId] : undefined;
