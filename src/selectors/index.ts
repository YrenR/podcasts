import { RootState } from "../store/types";

export const selectCount = (state: RootState) => state.counter.value;
export const selectTopPodcasts = (state: RootState) => state.podcasts;
