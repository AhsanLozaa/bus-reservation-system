// src/services/placeService.js
import axios from "./axiosInstance";

export const getAllPlaces = async () => {
  const response = await axios.get("/places");
  return response.data;
};

export const createPlace = async (name) => {
  const response = await axios.post("/places", { name });
  return response.data;
};
