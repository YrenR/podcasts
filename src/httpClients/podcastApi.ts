import { ApiError, axiosInstance } from "../libs/axios";
import { Episodes } from "../models/episode";
import { TopPodcast } from "../models/podcast";

export const getTopPodasts = ({ limit, genre }: { limit: number; genre: number }): Promise<TopPodcast> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get<TopPodcast>(`/us/rss/toppodcasts/limit=${limit}/genre${genre}/json`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error: ApiError) => {
        console.error(error);
        reject(error);
      });
  });
};

export const getEpisodes = ({ podcastId }: { podcastId: string }): Promise<Episodes> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get<Episodes>(`/lookup?id=${podcastId}&entity=podcastEpisode`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error: ApiError) => {
        console.error(error);
        reject(error);
      });
  });
};
