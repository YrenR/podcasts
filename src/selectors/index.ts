import { RootState } from "../store/types";

export const selectCount = (state: RootState) => state.counter.value;
export const selectPodcasts = (state: RootState) => state.podcasts;
