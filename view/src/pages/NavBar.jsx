import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  // Check login status from localStorage when the component mounts
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("user");
    if (storedLoginStatus && storedLoginStatus !== "null") {
      setIsLoggedIn(true); // Check if the value is "true"
    } else {
      setIsLoggedIn(false); // Check if the value is "true"
    }
  }, []);

  const handleSignOut = () => {
    localStorage.setItem("user", null); // Update localStorage to reflect sign out
    setIsLoggedIn(false); // Update the login state in component
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-xl font-semibold">
          Bus Reservation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/booking" className="hover:text-gray-400">
            Booking
          </Link>
          <Link
            to="/add-bus"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Add Bus
          </Link>
          <Link
            to="/buses"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Buses
          </Link>

          {isLoggedIn ? (
            <button onClick={handleSignOut} className="hover:text-gray-400">
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/signup" className="hover:text-gray-400">
                Sign Up
              </Link>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 absolute w-full left-0 top-[60px] flex flex-col items-center gap-4 py-4 shadow-lg">
          <Link
            to="/home"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/booking"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/add-bus"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Add Bus
          </Link>
          <Link
            to="/buses"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Buses
          </Link>
          {isLoggedIn ? (
            <button onClick={handleSignOut} className="hover:text-gray-400">
              Sign Out
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
