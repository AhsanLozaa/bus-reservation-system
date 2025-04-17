import axios from "./axiosInstance";

// // Create a new bus
// export const createBus = async ({ name, plate_number, total_seats }) => {
//   const response = await axios.post("/buses", {
//     name,
//     plate_number,
//     total_seats,
//   });
//   return response.data;
// };

// Create a new bus
export const createBus = async (data) => {
  const response = await axios.post("/buses", data);
  return response.data;
};

// Get all buses
export const getAllBuses = async () => {
  const response = await axios.get("/buses");
  return response.data;
};
