// src/pages/MyBookings.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const userId = 1; // Replace with dynamic user ID

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-bookings/${userId}`)
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index} className="p-2 border-b">
            {booking.bus_name} - {booking.date} - Seat {booking.seat_number}
          </li>
        ))}
      </ul>
    </div>
  );
}
