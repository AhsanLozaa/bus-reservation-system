import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBus,
  FaTicketAlt,
  FaUser,
  FaCog,
  FaMapMarkerAlt,
  FaPlusCircle,
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("At Home Page");
  }, []);

  const buttons = [
    { label: "Book Now", path: "/booking", icon: <FaTicketAlt /> },
    { label: "My Bookings", path: "/my-bookings", icon: <FaUser /> },
    { label: "Admin Bookings", path: "/admin-bookings", icon: <FaCog /> },
    { label: "Add Bus", path: "/add-bus", icon: <FaPlusCircle /> },
    { label: "All Buses", path: "/buses", icon: <FaBus /> },
    { label: "Add Place", path: "/add-place", icon: <FaPlusCircle /> },
    { label: "All Places", path: "/places", icon: <FaMapMarkerAlt /> },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="text-center text-white p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl max-w-4xl w-full mx-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to the Bus Reservation System!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Your journey starts here. Book your bus tickets today and travel with
          comfort and convenience.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => navigate(btn.path)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <span className="text-xl">{btn.icon}</span>
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
