import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

export type ApiError = Error | AxiosError;
