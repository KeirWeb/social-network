import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
const config: AxiosRequestConfig<any> = {
  withCredentials: true,
  headers: {
    "API-KEY": "f09daa5b-2834-4b3b-81d6-287ed58b49b1",
  },
};

export const apiAxios = axios.create({
  baseURL: BASE_URL,
  ...config,
});
