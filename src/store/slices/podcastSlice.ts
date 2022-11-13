import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopPodcast } from "../../models/podcast";
import { addMilliseconds, isExpired, ONE_DAY_IN_MILLISECONDS } from "../../tools/util";
import { getTopPodasts } from "../../httpClients/podcastApi";
import { selectPodcasts } from "../../selectors";

export interface PodcastState {
  topPodcast: {
    response?: TopPodcast;
    ttl?: Date;
  };
  status: "idle" | "loading" | "failed";
}

const initialState: PodcastState = {
  topPodcast: {},
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
      const podcasts = selectPodcasts(getState());
      if (podcasts?.topPodcast?.ttl) return isExpired(podcasts.topPodcast.ttl);
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
      });
  },
});

export const { reset } = podcastSlice.actions;

export default podcastSlice.reducer;
