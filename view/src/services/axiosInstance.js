// src/services/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api", // change this if different
  headers: {
    "Content-Type": "application/json",
  },
});

// You can also add request/response interceptors here
axiosInstance.interceptors.request.use(
  (config) => {
    // If you have auth token to attach
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    if (error.response?.status === 401) {
      // Handle unauthorized (like token expired)
      console.warn("Unauthorized. Please log in.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
