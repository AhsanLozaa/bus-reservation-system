import React, { useState } from "react";
import { FaPlus, FaExclamationTriangle } from "react-icons/fa"; // Import icons
import { createBus } from "../services/busService";

const AddBus = () => {
  const [formData, setFormData] = useState({
    name: "",
    plate_number: "",
    total_seats: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.plate_number.trim() ||
      !formData.total_seats.trim()
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await createBus(formData);
      alert("Bus added successfully!");
      setFormData({ name: "", plate_number: "", total_seats: "" });
    } catch (error) {
      console.error(error);
      setError("Failed to add bus.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl mb-4 text-center">Add New Bus</h2>
      <div>
        <label htmlFor="name" className="block text-lg font-medium">
          Bus Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Bus Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="plate_number" className="block text-lg font-medium">
          Plate Number
        </label>
        <input
          type="text"
          name="plate_number"
          id="plate_number"
          placeholder="Plate Number"
          value={formData.plate_number}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="total_seats" className="block text-lg font-medium">
          Total Seats
        </label>
        <input
          type="number"
          name="total_seats"
          id="total_seats"
          placeholder="Total Seats"
          value={formData.total_seats}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {error && (
        <div className="flex items-center text-red-500 mt-2">
          <FaExclamationTriangle className="mr-2" />
          <p>{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-6 py-3 mt-4 rounded flex items-center gap-2 justify-center hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? (
          <>
            <span className="animate-spin">⏳</span> Adding...
          </>
        ) : (
          <>
            <FaPlus /> Add Bus
          </>
        )}
      </button>
    </form>
  );
};

export default AddBus;
