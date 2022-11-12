import { RootState } from "../store/types";

export const selectCount = (state: RootState) => state.counter.value;
