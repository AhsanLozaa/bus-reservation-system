// src/pages/AdminBookings.js
import { useEffect, useState } from "react";
import axios from "axios";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index} className="p-2 border-b">
            {booking.user_id} - {booking.bus_name} - {booking.date} - Seat{" "}
            {booking.seat_number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminBookings;
