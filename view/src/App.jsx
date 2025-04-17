import React, { useState, useEffect } from "react";
import ReservationPage from "./pages/ReservationPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyBookings from "./pages/MyBookings";
import AdminBookings from "./pages/AdminBookings";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";
import SignupPage from "./pages/SignupPage";
import AddBus from "./pages/AddBus";
import AllBuses from "./pages/AllBuses";
import AddPlace from "./pages/AddPlace";
import AllPlaces from "./pages/AllPlaces";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
    setLoading(false); // done checking
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  if (loading) return <div>Loading...</div>; // or spinner

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/booking"
          element={isLoggedIn ? <ReservationPage /> : <Navigate to="/" />}
        />
        <Route
          path="/my-bookings"
          element={isLoggedIn ? <MyBookings /> : <Navigate to="/" />}
        />
        <Route
          path="/admin-bookings"
          element={isLoggedIn ? <AdminBookings /> : <Navigate to="/" />}
        />
        <Route
          path="/add-bus"
          element={isLoggedIn ? <AddBus /> : <Navigate to="/" />}
        />
        <Route
          path="/buses"
          element={isLoggedIn ? <AllBuses /> : <Navigate to="/" />}
        />
        <Route
          path="/add-place"
          element={isLoggedIn ? <AddPlace /> : <Navigate to="/" />}
        />
        <Route
          path="/places"
          element={isLoggedIn ? <AllPlaces /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
