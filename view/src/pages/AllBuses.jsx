import React, { useEffect, useState } from "react";
import { FaBus, FaEdit, FaTrash } from "react-icons/fa";
import { getAllBuses } from "../services/busService";

const AllBuses = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const data = await getAllBuses();
        setBuses(data);
      } catch (error) {
        console.error("Failed to fetch buses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">All Buses</h2>
      {loading ? (
        <p className="text-center">Loading buses...</p>
      ) : buses.length === 0 ? (
        <p className="text-center">No buses found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Plate Number</th>
              <th className="border px-4 py-2">Total Seats</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus, index) => (
              <tr key={bus.id}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{bus.name}</td>
                <td className="border px-4 py-2">{bus.plate_number}</td>
                <td className="border px-4 py-2 text-center">
                  {bus.total_seats}
                </td>
                <td className="border px-4 py-2 text-center">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit className="inline-block mr-2" />
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 ml-4">
                    <FaTrash className="inline-block mr-2" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllBuses;
