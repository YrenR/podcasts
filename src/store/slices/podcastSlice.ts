import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TopPodcast } from "../../models/podcast";
import { addMilliseconds, ONE_DAY_IN_MILLISECONDS } from "../../tools/util";
import { getTopPodasts } from "../../httpClients/podcastApi";
import { selectTopPodcasts } from "../../selectors";

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
    const data = await getTopPodasts({ limit: 100, genre: 1310 });
    return data;
  },
  {
    condition: (_, { getState }: { getState: any }) => {
      const { topPodcast } = selectTopPodcasts(getState);
      if (topPodcast?.ttl) return new Date(topPodcast?.ttl) <= new Date();
      else return false;
    },
  },
);

export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    reset: (state) => {
      state = { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopPodastsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTopPodastsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.topPodcast.response = action.payload;
        state.topPodcast.ttl = addMilliseconds(new Date(), ONE_DAY_IN_MILLISECONDS);
      })
      .addCase(getTopPodastsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { reset } = podcastSlice.actions;

export default podcastSlice.reducer;
