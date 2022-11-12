import { ApiError, axiosInstance } from "../libs/axios";
import { TopPodcast } from "../models/podcast";

interface params {
  limit: number;
  genre: number;
}

export const getTopPodasts = ({ limit, genre }: params): Promise<TopPodcast> => {
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
