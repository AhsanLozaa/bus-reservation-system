import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaExclamationTriangle } from "react-icons/fa"; // Import icons
import { createPlace } from "../services/placeService";

const AddPlace = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Place name is required.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await createPlace(name);
      navigate("/places"); // Redirect to places list after adding
    } catch (err) {
      console.error("Error creating place:", err);
      setError("Failed to add place.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Place</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Place Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter place name"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {error && (
          <div className="flex items-center text-red-500">
            <FaExclamationTriangle className="mr-2" />
            <p>{error}</p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">⏳</span> Adding...
              </>
            ) : (
              <>
                <FaPlus /> Add Place
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlace;
