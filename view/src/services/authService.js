// src/services/authService.js
import axios from "./axiosInstance";

export const signup = async ({ name, email, mobile_number, password }) => {
  const response = await axios.post("/users/register", {
    name,
    email,
    mobile_number,
    password,
  });
  return response.data;
};

export const login = async ({ email, password }) => {
  const response = await axios.post("/users/login", {
    email,
    password,
  });
  return response.data;
};
