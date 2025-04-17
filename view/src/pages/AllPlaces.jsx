import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import { getAllPlaces, createPlace } from "../services/placeService";

const AllPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const data = await getAllPlaces();
      setPlaces(data);
    } catch (err) {
      console.error("Failed to fetch places:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePlace = async () => {
    if (!name.trim()) return;
    try {
      await createPlace(name);
      setName("");
      fetchPlaces(); // Refresh list
    } catch (err) {
      console.error("Failed to create place:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Places</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter place name"
          className="flex-1 border px-4 py-2 rounded"
        />
        <button
          onClick={handleCreatePlace}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <FaPlus /> Add
        </button>
      </div>

      {loading ? (
        <p>Loading places...</p>
      ) : places.length === 0 ? (
        <p>No places found.</p>
      ) : (
        <ul className="space-y-2">
          {places.map((place, index) => (
            <li
              key={place.id}
              className="border px-4 py-2 rounded shadow-sm bg-white flex justify-between items-center"
            >
              <div>
                {index + 1}. {place.name}
              </div>
              <div className="flex gap-2">
                <button className="text-yellow-500 hover:text-yellow-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllPlaces;
