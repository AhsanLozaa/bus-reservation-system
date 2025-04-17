import React from "react";
import ReservationPage from "./pages/ReservationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyBookings from "./pages/MyBookings";
import AdminBookings from "./pages/AdminBookings";
import LoginPage from "./pages/login";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/booking" element={<ReservationPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/admin-bookings" element={<AdminBookings />} />
      </Routes>
    </Router>
  );
}

export default App;
