import axiosClient from "./axiosClient";

export const getSettingsApi = () =>
  axiosClient.get("/public/settings");