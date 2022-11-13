import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TopPodcast } from "../../models/podcast";
import { addMilliseconds, isExpired, ONE_DAY_IN_MILLISECONDS } from "../../tools/util";
import { getEpisodes, getTopPodasts } from "../../httpClients/podcastApi";
import { selectEpisodes, selectTopPodcasts } from "../../selectors";
import { Episodes } from "../../models/episode";

export interface PodcastState {
  topPodcast: {
    response?: TopPodcast;
    ttl?: Date;
  };
  episodes: {
    [podcastId: string]: Episodes & { ttl: Date };
  };
  status: "idle" | "loading" | "failed";
}

const initialState: PodcastState = {
  topPodcast: {},
  episodes: {},
  status: "idle",
};

export const getTopPodastsAsync = createAsyncThunk(
  "podcast/toppodcasts",
  async () => {
    const topPodcast = await getTopPodasts({ limit: 100, genre: 1310 });
    return topPodcast;
  },
  {
    condition: (_, { getState }: { getState: any }) => {
      const topPodcast = selectTopPodcasts(getState());
      if (topPodcast?.ttl) return isExpired(topPodcast.ttl);
      else return true;
    },
  },
);

export const getEpisodesAsync = createAsyncThunk(
  "podcast/episodes",
  async (podcastId: string) => {
    const episodes = await getEpisodes({ podcastId });
    return { episodes, podcastId };
  },
  {
    condition: (podcastId, { getState }: { getState: any }) => {
      const episodes = selectEpisodes(getState());
      if (episodes[podcastId]?.ttl) return isExpired(episodes[podcastId].ttl);
      else return true;
    },
  },
);

export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    reset: (state) => {
      state.topPodcast = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopPodastsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTopPodastsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.topPodcast = {
          response: action.payload,
          ttl: addMilliseconds(new Date(), ONE_DAY_IN_MILLISECONDS),
        };
      })
      .addCase(getTopPodastsAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getEpisodesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEpisodesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.episodes = {
          ...state.episodes,
          [action.payload.podcastId]: {
            ...action.payload.episodes,
            ttl: addMilliseconds(new Date(), ONE_DAY_IN_MILLISECONDS),
          },
        };
      })
      .addCase(getEpisodesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { reset } = podcastSlice.actions;

export default podcastSlice.reducer;
